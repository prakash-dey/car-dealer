import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Newsletter from './components/Newsletter';
import Section from './components/Section';
import Services from './components/Services';
import Vehicles from './components/Vehicles';


function App() {

  const homeData = [{ icon: "fas fa-home", num: "150+", topic: "Branches" }, { icon: "fas fa-car", num: "4770+", topic: "cars sold" }, { icon: "fas fa-users", num: "320+", topic: "Happy clients" }, { icon: "fas fa-car", num: "1500+", topic: "news cars" }]

const services = [{icon:"fas fa-car",service:"car selling"},{icon:"fas fa-tools",service:"parts repair"},{icon:"fas fa-car-crash",service:"car insurance"},{icon:"fas fa-car-battery",service:"battery replacement"},{icon:"fas fa-gas-pump",service:"oil change"},{icon:"fas fa-headset",service:"24/7 support"},]

  return (
    <div className="App">
      <Header />
      <Home data = {homeData}/>
      <Services services = {services}/>
      <Newsletter/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
