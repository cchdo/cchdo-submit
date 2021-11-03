import React, { useEffect, useState } from "react";

import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

import {
  Form,
  Button,
  Collapse,
  Card,
  Stack,
  Col,
  Alert,
} from "react-bootstrap";

import { Document, Id, IndexOptionsForDocumentSearch } from "flexsearch";
import { intersection, union } from "lodash";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const CCHDO_CRUISE_INFO = "https://cchdo.ucsd.edu/api/v1/cruise/all";

interface Participant {
  name: string;
  email: string;
  role: string;
  institution: string;
}

interface Collections {
  groups: string[];
  oceans: string[];
  programs: string[];
  woce_lines: string[];
}

interface Cruise {
  id: number;
  expocode: string;
  startDate: string;
  endDate: string;
  ship: string;
  country: string;
  collections: Collections;
  participants: Participant[];
}

type CruiseSelectorStates = "notYet" | "loadError" | "loaded";

const flexsearchOptions: IndexOptionsForDocumentSearch<Cruise> = {
  preset: "match",
  tokenize: "full",
  document: {
    id: "id",
    index: [
      "expocode",
      "participants[]:name",
      "collections:woce_lines",
      "collections:groups",
      "collections:programs",
      "collections:oceans",
      "country",
      "ship",
      "startDate",
      "endDate",
      "start_port",
      "end_port",
      "references[]:value",
    ],
  },
};

const CruiseSelector = () => {
  const [loaded, setLoaded] = useState<CruiseSelectorStates>("notYet");
  const [cruises, setCrusies] = useState<Cruise[]>([]);
  const [searchResults, setSearchResults] = useState<Cruise[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState(new Document(flexsearchOptions));
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCruise, setSelectedCruise] = useState<number | undefined>();
  const [pageFor, setPageFor] = useState<string | null>(null);

  const doSearch = (query: string, idx: Document<Cruise>): Id[] => {
    const tokens = query.split(/(\s+)/).filter((e) => e.trim().length > 0);
    if (tokens.length > 1) {
      return intersection(...tokens.map((token) => doSearch(token, idx)));
    }
    const queryResults = idx.search(query);
    const queryIds = queryResults.map((tokenMatch) => tokenMatch.result);
    return union(...queryIds);
  };

  const setSearchFilteredCruises = (_cruises: Cruise[], ids: Id[]): void => {
    setSearchResults(_cruises.filter((cruise) => ids.includes(cruise.id)));
  };

  const selectedCruiseObject: Cruise | undefined = selectedCruise
    ? cruises.filter((cruise) => cruise.id === selectedCruise)[0]
    : undefined;

  useEffect(() => {
    async function loadCruiseInfo() {
      let searchPageFor = new URLSearchParams(window.location.search).get(
        "for"
      );
      setPageFor(searchPageFor);

      try {
        let response = await fetch(CCHDO_CRUISE_INFO);
        let data: Cruise[] = await response.json();
        data = data.sort((a, b) =>
          a.startDate > b.startDate
            ? a.startDate === b.startDate
              ? 0
              : -1
            : -0
        );
        setCrusies(data);

        const newIndex = new Document(flexsearchOptions);
        data.forEach((element) => {
          newIndex.add(element);
        });
        setIndex(newIndex);

        if (searchPageFor !== null) {
          let cruiseObjects = data.filter(
            (cruise) => cruise.expocode === searchPageFor
          );
          if (cruiseObjects.length === 1) {
            setSelectedCruise(cruiseObjects[0].id);
          }
        }

        setLoaded("loaded");
      } catch (err) {
        console.error(err);
        setLoaded("loadError");
      }
    }
    loadCruiseInfo();
  }, []);

  const PageForAlertBad = (
    <Alert variant="danger">
      This was a page for {pageFor}, but no cruise with that Expocode could be
      found, use the Select Cruise button to select an existing cruise. Or
      ignore this message to not select a cruise.
    </Alert>
  );
  const PageForAlertYay = (
    <Alert variant="success">
      This is a page for {pageFor}, if you didn't want this, use the Select
      Cruise button to select a different cruise or Clear Cruise to not select
      anything.
    </Alert>
  );

  const buttonText = {
    notYet: "Loading cruises...",
    loadError: "Could not load cruise list",
    loaded: `Select Cruise`,
  };

  const listFormatter = (cell: string[], row: any) => {
    if (cell.length === 0) {
      return <span>-</span>;
    }
    return (
      <ul>
        {cell.map((str) => (
          <li key={str}>{str}</li>
        ))}
      </ul>
    );
  };
  const chiSciFormatter = (cell: Participant[], row: any) => {
    const chiSci = cell.filter((obj) => obj.role === "Chief Scientist");
    if (chiSci.length === 0) {
      return <span>-</span>;
    }
    return (
      <ul>
        {chiSci.map((str) => (
          <li key={str.name}>{str.name}</li>
        ))}
      </ul>
    );
  };

  const columns = [
    {
      dataField: "df1",
      isDummyField: true,
      text: "Select",
      formatter: (_: any, row: Cruise, rowIndex: number) => {
        return (
          <Button
            onClick={() => {
              setSelectedCruise(row.id);
              setOpen(false);
              setPageFor(null);
            }}
          >
            Select
          </Button>
        );
      },
    },
    {
      dataField: "expocode",
      text: "Expocode",
    },
    {
      dataField: "collections.woce_lines",
      text: "Line",
      formatter: listFormatter,
    },
    {
      dataField: "ship",
      text: "Ship",
    },
    {
      dataField: "country",
      text: "Country",
    },
    {
      dataField: "startDate",
      text: "Start Date",
    },
    {
      dataField: "endDate",
      text: "End Date",
    },
    {
      dataField: "participants",
      text: "Chi Sci",
      formatter: chiSciFormatter,
    },
  ];

  return (
    <div>
      {pageFor && loaded === "loaded" && !selectedCruise && PageForAlertBad}
      {pageFor && loaded === "loaded" && selectedCruise && PageForAlertYay}
      <p>
        Selected Cruise:{" "}
        {selectedCruise
          ? `${selectedCruiseObject?.expocode} (${selectedCruiseObject?.startDate} to ${selectedCruiseObject?.endDate} on the ${selectedCruiseObject?.ship})`
          : "None (this is OK)"}
      </p>
      <input
        type="hidden"
        name="cruise_id"
        id="cruise_id"
        value={selectedCruise}
      />
      <Button
        onClick={() => setOpen(!open)}
        variant="outline-secondary"
        disabled={loaded !== "loaded"}
      >
        {selectedCruise ? "Change Cruise" : buttonText[loaded]}
      </Button>

      {selectedCruise && (
        <Button
          onClick={() => {
            setSelectedCruise(undefined);
            setPageFor(null);
          }}
          variant="outline-secondary"
        >
          Clear Cruise
        </Button>
      )}

      <Collapse in={open}>
        <Card>
          <Card.Body>
            <Stack gap={1}>
              <Col md={4}>
                <Form.Control
                  type="search"
                  placeholder="search..."
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setSearchFilteredCruises(
                      cruises,
                      doSearch(event.target.value, index)
                    );
                  }}
                />
              </Col>
              <div className="table-responsive-lg">
                <BootstrapTable
                  keyField="expocode"
                  data={searchQuery.trim() === "" ? cruises : searchResults}
                  columns={columns}
                  pagination={paginationFactory({})}
                  noDataIndication="No Cruises Found"
                />
              </div>
            </Stack>
          </Card.Body>
        </Card>
      </Collapse>
    </div>
  );
};

export default CruiseSelector;
