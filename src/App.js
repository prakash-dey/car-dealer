import { useState } from 'react';
import Swiper from './components/Swiper';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Newsletter from './components/Newsletter';
import Services from './components/Services';
import Vehicles from './components/Vehicles';



function App() {
const [modal ,setModal] = useState(false);
const handleState=(val)=>{
  setModal(val);
}
console.log(modal);
  
  return (
    <div className="App">
      <Header handler = {handleState}/>
      {modal && <Login handler = {handleState}/>}
     
      <Home/>
      <Services/>
      <Vehicles/>
      <Newsletter/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
