import React from "react";
import "./Weather.css";
import {Card} from 'reactstrap';

/**
 * Weather
 * @version v1.0.0
 *
 * @param {*} props
 */

const Weather = ({ city, temp, minTemp, maxTemp, weatherDesc, icon }) => {
  return (
    <div className="weather">
      <Card>
        

        { city? (<h1>{city}</h1>) : null }


        <h4>
          { city? <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather" /> : null  }
        </h4>

        
        


        { temp? (<h1 className="py-2">{temp}&deg;</h1>) : null }
    
        {temp? minmaxTemp(minTemp, maxTemp):null}
    
        <h4 className="py-3">{weatherDesc}</h4>
      </Card>
    </div>
  );
};

const minmaxTemp = (min, max) => {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
};

export default Weather;
