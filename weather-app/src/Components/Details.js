
const Details = ({weatherData, system}) => {

    return (
        <div>
            <div className = "details-data">
                {!weatherData ? (<p>not found🤔</p>)  : (<p>weather: {weatherData[0].main}</p>) }
                {!weatherData ? (<p>not found🤔</p>)  : (<p>description: {weatherData[0].description}</p>) }
                {!weatherData ? (<p>not found🤔</p>)  : (<p><img src={`http://openweathermap.org/img/wn/${weatherData[0].icon}@2x.png`} alt=""/></p>) }
                {!system ? (<p>not found🤔</p>)  : (<p>Country: {system.country}</p>) }
            </div>
        </div>
    )
}

export default Details
