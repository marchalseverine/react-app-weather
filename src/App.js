
import './App.css';
import CurrentWeather from "./CurrentWeather";


import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="dashboard">      
       <CurrentWeather defaultCity="New York"/>
      


      </div> 
      <Footer />
    </div>
  );
}

export default App;
