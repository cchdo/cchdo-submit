import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button, Table } from "react-bootstrap";

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
        <a rel="noopener noreferrer" target="_blank" href="https://support.apple.com/en-lamr/guide/mac-help/mchlp1378/mac">
          mac
        </a>
        ,{" "}
        <a rel="noopener noreferrer" target="_blank" href="https://nerdschalk.com/how-to-select-multiple-files-on-windows-10-in-2021-7-ways/">
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

const CruiseLines = ({ cruise }: { cruise: Cruise }) => {
  const line = cruise.collections.woce_lines;
  if (line.length === 0) {
    return <span></span>
  }
  return (<ul>
    {line.map((line) => <li key={`${cruise.expocode}_${line}`}>{line}</li>)}
  </ul>)
}

const PIList = ({ cruise }: { cruise: Cruise }) => {
  const roles = new Set(["Chief Scientist", "Co-Chief Scientist"])
  let participants = cruise.participants;
  participants = participants.filter((participant) => roles.has(participant.role))
  if (participants.length === 0) {
    return <span></span>
  }
  return (<ul>
    {participants.map((participant) => <li key={`${cruise.expocode}_${participant.name}`}>{participant.name}</li>)}
  </ul>)
}

const CruiseSelector = () => {
  const [loaded, setLoaded] = useState<CruiseSelectorStates>("notYet");
  const [cruises, setCrusies] = useState<Cruise[]>([]);
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    async function loadCruiseInfo() {
      try {
        let response = await fetch(CCHDO_CRUISE_INFO);
        let data = await response.json();
        setCrusies(data);
        setLoaded("loaded");
      } catch (err) {
        setLoaded("loadError");
      }
    }
    loadCruiseInfo();
  }, []);
  const buttonText = {
    notYet: "Loading cruises...",
    loadError: "Could not load cruise list",
    loaded: `Select Cruise: (${cruises.length} cruises)`,
  };

  return (
    <div>
      <Button onClick={() => setOpen(!open)} variant="outline-secondary" disabled={loaded !== "loaded"}>
        {buttonText[loaded]}
      </Button>
      {open === true && <Table><tbody>{cruises.map(cruise => <tr><td>{cruise.expocode}</td><td><CruiseLines cruise={cruise} /></td><td>{cruise.ship}</td><td>{cruise.country}</td><td>{cruise.startDate}</td><td>{cruise.endDate}</td><td><PIList cruise={cruise} /></td></tr>)}</tbody></Table>}
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
    <div>
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
    </div>
  );
}

export default App;
