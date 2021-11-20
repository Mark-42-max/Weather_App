import React from 'react'


const Results = ({searchData, cityData}) => {
    return (
        <div className = "results">  
            <div className="results-name">
                {cityData ? (<h1>{searchData.charAt(0).toUpperCase() + searchData.slice(1)}</h1>) : (<h2>Enter valid city name 😒</h2>)}
            </div>
            <div className = "results-data">
                {!cityData ? (<p>not found🤔</p>)  : (<p>max-temp: {((cityData.temp_max - 32) * (5/9)).toFixed(2)} deg-C</p>) }
                {!cityData ? (<p>not found🤔</p>)  : (<p>min-temp: {((cityData.temp_min - 32) * (5/9)).toFixed(2)} deg-C</p>) }
                {!cityData ? (<p>not found🤔</p>)  : (<p>humidity: {cityData.humidity}</p>) }
            </div>
        </div>
    )
}

// const responsive_bg = {
//     backgroundImage: `url(../src/Images/Sunny_day_background_vector.jpg)`,
//     backgroundSize: `cover`,
//     backgroundRepeat: `no-repeat`
// }

export default Results
