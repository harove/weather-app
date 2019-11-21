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
        <h1>{city}</h1>
        <h4>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather"
          ></img>
        </h4>
        <h1 className="py-2">{temp}&deg;</h1>
        {minmaxTemp(minTemp, maxTemp)}
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
