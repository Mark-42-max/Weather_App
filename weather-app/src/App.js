import SearchBar from "./Components/SearchBar";
import Results from "./Components/Results";
import Details from "./Components/Details";
import { useState, useEffect } from "react";

function App() {

  const [city, setCity] = useState({
                              
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100
  }                     
});

  const [weather, setWeather] = useState([
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d"
    }
  ])

  const [sys,setSys ] = useState({
      type: 1,
      id: 5122,
      message: 0.0139,
      country: "US",
      sunrise: 1560343627,
      sunset: 1560396563
  }
  )

  const [search, setSearch] = useState("Mumbai");

  //Search on change
  const change = (value) => {
    setSearch(value);
    console.log(`search: ${search}`);
  } 

  useEffect(() => {
    const fetchCity = async ()=> {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d272c62fde62caf8f22ed44594475afe`;
      const res = await fetch(url);
      const data = await res.json();
      setCity(data.main);
      setWeather(data.weather);
      setSys(data.sys);
      console.log(data.sys)
    }
    fetchCity();
  }, [search]);

  return (
    <div className="container">
      <SearchBar onChange = {change}/>
      <Results searchData = {search} cityData = {city}/>
      <Details weatherData = {weather} system = {sys}/>
      {/* {console.log(sys)} */}
    </div>
  );
}

export default App;
