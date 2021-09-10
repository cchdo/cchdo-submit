import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form, Button} from 'react-bootstrap';

const handleFormSubmit = (event:React.SyntheticEvent) => {
  event.preventDefault();
  const target = event.nativeEvent.target as HTMLFormElement
  const data = new FormData(target);
  console.log(Object.fromEntries(data.entries()))
}

const File = () => {
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

function App() {
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="submitter_name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="submitter_name" type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="submitter_email">
        <Form.Label>Your Email</Form.Label>
        <Form.Control name="submitter_email" type="email" placeholder="example@example.edu" />
      </Form.Group>

      <File />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default App;
