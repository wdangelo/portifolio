import { Button, Card } from "react-bootstrap";

function DisplayCard(){
    return(

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/william.svg" />
  <Card.Body>
    <Card.Title>William de Angelo</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Button variant="primary">Sobre mim</Button>
  </Card.Body>
</Card>
    )
}

export default DisplayCard;