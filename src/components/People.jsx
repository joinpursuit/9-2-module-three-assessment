import { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function People() {
    const [pdata, setPeople] = useState('');
    const [search, setSearch] = useState('');
    const [card, setCard] = useState('');

    useEffect(() => {
        fetch("../people.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setPeople([...data]);
            // console.log(pdata);
          })
          .catch((error) => {
            console.error("Error:", error);
          })
      },
      [search]
      )
      let selection = ''

 function handlesubmit(event){
    event.preventDefault();  
    selection = pdata.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
    console.log(selection)
    selection.length === 0 ? setCard(<><Alert key='alert' variant='secondary'>
    Not Found...
  </Alert></>): setCard(
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Header>{selection[0].name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Age: {selection[0].age}</ListGroup.Item>
        <ListGroup.Item>Eye color: {selection[0].eye_color}</ListGroup.Item>
        <ListGroup.Item>Hair color: {selection[0].hair_color}</ListGroup.Item>
        <ListGroup.Item>Gender: {selection[0].gander}</ListGroup.Item>
      </ListGroup>
    </Card>
        </>
    )
    setSearch('');
 }

  return (
    <><Row><Col></Col>
    <Col className="text-center"><h3>Search for a Person</h3></Col>
    <Col></Col>
</Row>
    <Row className="d-flex justify-content-center"><Col></Col>
    <Col><Form onSubmit={(event) => handlesubmit(event)}>
    <InputGroup className="mb-3">
    <Form.Control
      placeholder="Name"
      aria-label="Search"
      aria-describedby="basic-addon2"
      value={search}
      onChange={(event) => {setSearch(event.target.value)}} 
      required
    />
    <Button type="submit" variant="secondary" id="button-addon2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> Search
    </Button>
  </InputGroup>
  </Form>
  </Col>
  <Col></Col>
  </Row>
  <Row><Col></Col>
  <Col className="d-flex justify-content-center">{card}</Col>
   <Col></Col>
   </Row>

  </>
  );
}

export default People;