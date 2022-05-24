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
        
        <Card.Body>
          <DisplayCard />
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default Home
