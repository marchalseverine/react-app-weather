
import './App.css';
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="dashboard">      
       <CurrentWeather />
<Forecast />
<Search />

      </div>
      <Footer />
    </div>
  );
}

export default App;
