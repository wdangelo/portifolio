import type { NextPage } from 'next';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavHome from './Components/NavHome'
import SocialBar from './Components/SocialBar';

const Home: NextPage = () => {
  return (
    <div className="ok">
      <NavHome />
      <SocialBar />
      
    </div>
  )
}

export default Home
