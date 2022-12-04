import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useState, useEffect } from "react";

function Locations() {
    const [toggle, setToggle] = useState(false);
    const [sort, setSort] = useState('name');
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("../locations.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setLocations([...data]);

          })
          .catch((error) => {
            console.error("Error:", error);
          })
      },
      [toggle]
      )
function locationDisplay(locations, sorttype){
    let sorted = locations.sort((a, b) => a[sorttype] < b[sorttype] ? -1 : (a[sorttype]> b[sorttype]? 1 : 0));
    console.log(sorted);
    console.log(locations[0][sort])
    return sorted.map((place) =>{ return(
        <Col>
        <Card className="mb-2 g-4 bg-light border ms-auto" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{place.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{place.climate}</Card.Subtitle>
            <Card.Text>
                {place.terrain}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
      </Col>
    )
    }
    )
            
    }

      return (
        <>
        <Row>
            <Col md={3}>
            <ButtonGroup size="lg"  aria-label="Location Controls" vertical>
                <Button onClick={() => setToggle(!toggle)} variant="secondary">{toggle ? 'Hide Locations' : 'Show Locations'} </Button>
                <Button onClick={() => setSort('name')} variant="secondary">Sort by Name</Button>
                <Button onClick={() => setSort('climate')} variant="secondary">Sort by Climate</Button>
                <Button onClick={() => setSort('terrain')} variant="secondary">Sort by Terrain</Button>
            </ButtonGroup>
            </Col>
            <Col>
            <Row className="grid-container" >
                    
                        {toggle? <ul>{locationDisplay(locations, sort)}</ul> : null}
                    
                    </Row>
                    </Col>
        </Row>
        </>
      );
    }
    


export default Locations;