import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Vehicles from './components/Vehicles';


function App() {

  const homeData = [{ icon: "fas fa-home", num: "150+", topic: "Branches" }, { icon: "fas fa-car", num: "4770+", topic: "cars sold" }, { icon: "fas fa-users", num: "320+", topic: "Happy clients" }, { icon: "fas fa-car", num: "1500+", topic: "news cars" }]


  return (
    <div className="App">
      <Header />
      <Home data = {homeData}/>
      <Vehicles/>
    </div>
  );
}

export default App;
