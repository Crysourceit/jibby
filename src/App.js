import './App.css';
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron';
import WeatherApp from './components/WeatherApp/WeatherApp';

function App() {
  return (
    <div className="root">
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
