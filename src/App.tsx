import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Form,
  Button,
  Container,
} from "react-bootstrap";

import CruiseSelector from "./components/CruiseSelector";

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
