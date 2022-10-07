import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import Weather from './Components/Weather'

type WeatherInfo = {
  temp: number;
  pressure: number;
  humidity: number;
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherInfo>();

  return (
    <div className="App flex items-center justify-center bg-blue-900 h-screen">
        <div className="w-96 h-96 mx-auto grid grid-cols-1 bg-blue-100 rounded-lg shadow-xl p-5">
            <Header/>
            <Weather />
    </div>
</div>
  );
}
export default App;
