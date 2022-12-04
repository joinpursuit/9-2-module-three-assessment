import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useState, useEffect } from "react";
import MovieCards from './MovieCards'


function Movies() {
    const [selection, setSelection] = useState('');
    const [mdata, setData] = useState('');

    useEffect(() => {
      fetch("../films.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData([...data]);
        //   console.log(mdata);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
    },
    []
    )
// 

let currentItem = mdata.length === 0 ? null : mdata.filter((movie) => movie.id === selection);


    console.log(mdata)
    const select = mdata.length > 0 ? mdata.map((datalist) => <Dropdown.Item eventKey={datalist.id}>{datalist.title}</Dropdown.Item>) : null;
  return (
    <>
    <Container>
      <Row style={{marginBottom: 20}}>
      <Col></Col>
      <Col className="text-center">
    <h3>Select Movies</h3>
    <Form onSubmit={(event)=>event.preventDefault()}>
        <DropdownButton
          onSelect={(event) => setSelection(event)}
          variant="secondary"
          title={selection ? currentItem[0].title : "Select a movie"}
          id="input-group-dropdown-1"
         >
          <Dropdown.Item eventKey="">-------</Dropdown.Item>
          {select}
          </DropdownButton>
      </Form>
      </Col>
      <Col></Col>
      </Row>
        <Row>
            <Col></Col>
            <Col sm={8}>{!(mdata.length === 0) ? <MovieCards selection={selection} mdata={mdata} /> : null}</Col>
            <Col>{selection ? null: null}</Col>
        </Row>
      </Container>
    </>
  );
}


export default Movies;