import React from 'react';
import './Weather.css';

/**
 * Weather
 * @version v1.0.0
 * 
 * @param {*} props 
 */


  




const Weather = ({city,temp,minTemp,maxTemp,weatherDesc}) => {
    return (
        <div className="weather">
            <h1>{city}</h1>
            <h4>
                <i className = "wi wi-day-sunny display-1" > </i>    
            </h4> 
    <h1 className = "py-2">{temp}&deg;</h1>
            {minmaxTemp(minTemp,maxTemp)}  
    <h4 className="py-3">{weatherDesc}</h4>
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