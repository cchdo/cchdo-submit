import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form, Button} from 'react-bootstrap';

const CCHDO_CRUISE_INFO = "https://cchdo.ucsd.edu/api/v1/cruise/all"

const handleFormSubmit = (event:React.SyntheticEvent) => {
  event.preventDefault();
  const target = event.nativeEvent.target as HTMLFormElement
  const data = new FormData(target);
  console.log(Array.from(data.entries()))
}

const Files = () => {
  const [files, setFiles] = useState<string[]>([])
  const handleFileSelect = (event:React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    if (target.files === null){
      return
    }
    setFiles(Array.from(target.files).map(v => v.name))
  };
  return (
    <Form.Group className="mb-3" controlId="submitter_email">
      <Form.Label>Select FIles</Form.Label>
      <Form.Control onChange={handleFileSelect} name="file" type="file" multiple />
      <Form.Text>You can select multiple files using your system dialog box</Form.Text>
      {files.length > 1 &&
        <ul>
          {files.map(v => <li key={v}>{v}</li>)}
        </ul>
      }
    </Form.Group>
  )
}

type CruiseSelectorStates = "notYet" | "loadError" | "loaded"

const CruiseSelector = () => {
  const [loaded, setLoaded] = useState<CruiseSelectorStates>("notYet")
  const [cruises, setCrusies] = useState([])

  useEffect(() => {
    async function loadCruiseInfo(){
      try{
        let response = await fetch(CCHDO_CRUISE_INFO)
        let data = await response.json()
        setCrusies(data)
        setLoaded("loaded")
      } catch (err){
        setLoaded("loadError")
      }
    }
    loadCruiseInfo()
  }, [])
  const buttonText = {
    notYet: "Loading cruises...",
    loadError: "Could not load cruise list",
    loaded: `Select Cruise: (${cruises.length} cruises)`,
  }

  return <Button variant="outline-secondary" disabled={loaded!=="loaded"}>{buttonText[loaded]}</Button>
}

function App() {
  return (
    <div>
    <h1>CCHDO Submit Page</h1>
    <h2>Required Information</h2>
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="submitter_name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="submitter_name" type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="submitter_email">
        <Form.Label>Your Email</Form.Label>
        <Form.Control name="submitter_email" type="email" placeholder="example@example.edu" />
      </Form.Group>

      <h2>Files to Upload</h2>
      <Files />

      <h2>Optional Questions about uploaded data</h2>

      <h3>Associate with a cruise?</h3>
      <CruiseSelector />

      <h3>Any Notes?</h3>
        <Form.Group className="mb-3" controlId="submission_notes">
          <Form.Label>Public Submission Notes</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Text> Anything else users of the data should know? These notes will appear on cruise pages.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="submission_notes_private">
          <Form.Label>Private Submission Notes</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Text>Anything else you would like CCHDO staff to know? If data are not intended for public access, please note why here</Form.Text>
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
