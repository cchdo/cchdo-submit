import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form, Button} from 'react-bootstrap';

const handleFormSubmit = (event:React.SyntheticEvent) => {
  event.preventDefault();
  const target = event.nativeEvent.target as HTMLFormElement
  const data = new FormData(target);
  console.log(Object.fromEntries(data.entries()))
}

const File = ({id}:{id:number}) => {
      return (
      <Form.Group className="mb-3" controlId="submitter_email">
        <Form.Label>Your Email</Form.Label>
        <Form.Control name={"file_whatever" + id} type="file" />
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

      <File id={0} />
      <File id={2} />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default App;
