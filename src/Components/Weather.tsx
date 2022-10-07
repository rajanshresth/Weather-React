import { useState } from 'react';

type WeatherInfo = {
    temp: number;
    pressure: number;
    humidity: number;
}
function Weather() {
        const [city, setCity] = useState('');
        const [weather, setWeather] = useState<WeatherInfo>();

        // if input is removed, weather is set to undefined
        const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setCity(e.target.value);
            setWeather(undefined);
        }

        //fetch data from api
        const getWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a043302d37e769dbc12968f16bb18e0`);
            const resJson = await response.json();
            setWeather(resJson.main);
        }

    return (
        <div>
            <div className="flex justify-center">
                <input type="text" className="w-64 h-10 rounded-lg border-2 border-blue-900" placeholder="Enter City Name" onChange={handleCityChange}/>
                <button className="w-20 h-10 rounded-lg bg-blue-900 text-white" onClick={getWeather}>Search</button>
            </div>
            {weather && (
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-bold mt-4">{city}</h1>

                    <h1 className="text-2xl font-bold mt-4">
                        Temperature:{weather.temp}°C
                    </h1>
                    <h1 className="text-2xl font-bold mt-4">
                        Pressure: {weather.pressure}
                    </h1>
                    <h1 className="text-2xl font-bold mt-4">
                        Humidity: {weather.humidity}
                    </h1>
        </div>)}
        </div>
    )
}

export default Weather