import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

import {
  Form,
  Button,
  Collapse,
  Card,
  Stack,
  Col,
  Container,
} from "react-bootstrap";
import { Document, Id, IndexOptionsForDocumentSearch } from "flexsearch";
import { intersection, union } from "lodash";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

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

const CCHDO_CRUISE_INFO = "https://cchdo.ucsd.edu/api/v1/cruise/all";

const handleFormSubmit = (event: React.SyntheticEvent) => {
  event.preventDefault();
  const target = event.nativeEvent.target as HTMLFormElement;
  const data = new FormData(target);
  console.log(Array.from(data.entries()));
};

const Files = () => {
  const [files, setFiles] = useState<string[]>([]);
  const handleFileSelect = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.files === null) {
      return;
    }
    setFiles(Array.from(target.files).map((v) => v.name));
  };
  return (
    <Form.Group className="mb-3" controlId="submitter_email">
      <Form.Label>Select FIles</Form.Label>
      <Form.Control
        onChange={handleFileSelect}
        name="file"
        type="file"
        multiple
      />
      <Form.Text>
        You can select multiple files using your system dialog box. (see how:{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://support.apple.com/en-lamr/guide/mac-help/mchlp1378/mac"
        >
          mac
        </a>
        ,{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://nerdschalk.com/how-to-select-multiple-files-on-windows-10-in-2021-7-ways/"
        >
          windows
        </a>
        )
      </Form.Text>
      {files.length > 1 && (
        <ul>
          {files.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      )}
    </Form.Group>
  );
};

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

        setLoaded("loaded");
      } catch (err) {
        console.error(err);
        setLoaded("loadError");
      }
    }
    loadCruiseInfo();
  }, []);

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
          onClick={() => setSelectedCruise(undefined)}
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

const DataTypeSelector = () => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="submission_notes_private">
        <Form.Check
          id="submission_data_type_btl"
          name="submission_data_type"
          value="bottle"
          type="checkbox"
          label="bottle data"
        />
        <Form.Check
          id="submission_data_type_ctd"
          name="submission_data_type"
          value="ctd"
          type="checkbox"
          label="CTD data"
        />
        <Form.Check
          id="submission_data_type_raw"
          name="submission_data_type"
          value="raw"
          type="checkbox"
          label="raw ctd data"
        />
        <Form.Check
          id="submission_data_type_other"
          name="submission_data_type"
          value="other"
          type="checkbox"
          label="other"
        />
        <Form.Text>select all that apply</Form.Text>
      </Form.Group>
    </div>
  );
};

function App() {
  return (
    <Container>
      <h1>CCHDO Submit Page</h1>
      <h2>Required Information</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="submitter_name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            name="submitter_name"
            type="text"
            placeholder="Your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="submitter_email">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            name="submitter_email"
            type="email"
            placeholder="example@example.edu"
          />
        </Form.Group>

        <h2>Files to Upload</h2>
        <Files />

        <h2>Optional Questions about uploaded data</h2>

        <h3>Associate with a cruise?</h3>
        <CruiseSelector />

        <h3>Associate with data type?</h3>
        <DataTypeSelector />

        <h3>Any Notes?</h3>
        <Form.Group className="mb-3" controlId="submission_notes">
          <Form.Label>Public Submission Notes</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Text>
            {" "}
            Anything else users of the data should know? These notes will appear
            on cruise pages.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="submission_notes_private">
          <Form.Label>Private Submission Notes</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Text>
            Anything else you would like CCHDO staff to know? If data are not
            intended for public access, please note why here
          </Form.Text>
        </Form.Group>

        <hr />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
