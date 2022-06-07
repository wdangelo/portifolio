import type { NextPage } from 'next';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavHome from './components/NavHome'
import SocialBar from './components/SocialBar';



const Home: NextPage = () => {
  return (
    <div className="ok">
      <NavHome />
      <SocialBar />
      
    </div>
  )
}

export default Home
