
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MovieCards({selection, mdata}){
    // console.log(mdata)
    let currentItem = mdata.filter((movie) => movie.id === selection);
    console.log(currentItem);
    if (currentItem.length === 0) { return null}
    return (
        <Card>
        
        <Card.Body>
        <Row><Col md={3}><img  src={currentItem[0].image} /></Col>
          <Col><Card.Title>{currentItem[0].title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{currentItem[0].release_date}</Card.Subtitle>
          <Card.Text>
          {currentItem[0].description}
          </Card.Text>
          </Col>
          </Row>
        </Card.Body>
      </Card>)
}