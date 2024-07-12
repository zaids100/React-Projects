import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = '5af3f4e52c384f0ab5c170403241107';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const getWeather = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Weather App</h1>
        <form onSubmit={getWeather} className="mb-6">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
            className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {weatherData && (
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">{weatherData.location.name}, {weatherData.location.country}</h2>
            <div className="flex items-center mb-4">
              <img src={weatherData.current.condition.icon} alt="Weather Icon" className="w-12 h-12 mr-4" />
              <div>
                <p className="text-4xl font-semibold">{weatherData.current.temp_c}°C</p>
              </div>
            </div>
            <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
