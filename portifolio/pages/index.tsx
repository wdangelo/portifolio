import type { NextPage } from 'next'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavHome from './Components/NavHome'
import DisplayCard from './Components/DisplayCard';
import { Card } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <div className="ok">
      <NavHome />
      <Card>
        <DisplayCard />
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      
    </div>
  )
}

export default Home
