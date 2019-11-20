import React from 'react';
import './Weather.css';

/**
 * Weather
 * @version v1.0.0
 * 
 * @param {*} props 
 */


  




const Weather = (props) => {

    //const apiKey = 'd47bc5e52c9b46f24443d3c321a13ddc';
    //api.openweathermap.org/data/2.5/weather?q={city name}

    return (
        <div className="weather">
            <h4>
                <i className = "wi wi-day-sunny display-1" > </i>    
            </h4> 
            <h1 className = "py-2">25&deg;</h1>
            {minmaxTemp(19,24)}  
            <h4 className="py-3">slow rain</h4>
        </div>
    );
};

const minmaxTemp = (min,max) => {
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
       
    );
}


export default Weather;