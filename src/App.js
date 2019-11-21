import React, { Component } from "react";
import { Container, Col, Card } from "reactstrap";
import Weather from './components/weather/Weather';
import Weatherform from './components/weatherform/Weatherform'

import "./App.css";


const apiKey = 'd47bc5e52c9b46f24443d3c321a13ddc';

class App extends Component {
 
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      temp: undefined,
      temp_min: undefined,
      temp_max: undefined,
      weatherDesc: undefined,
      icon: undefined,
    };
    //this.getWeather();
  }

  fahrenheitInCelsius = k => Math.floor(k-273.15); 

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`);
    const response = await api_call.json();
    console.log(response);
    const {temp,temp_min,temp_max} = response.main;
    this.setState({
      city: response.name,
      temp: this.fahrenheitInCelsius(temp),
      temp_min: this.fahrenheitInCelsius(temp_min),
      temp_max: this.fahrenheitInCelsius(temp_max),
      weatherDesc: response.weather[0].main,
      icon: response.weather[0].icon,
    });
  }


 



  render() {

    const {temp,temp_min,temp_max} = this.state;

    return (

      <div className="App">
        <Container>
          <Col md={{ size: 6, order: 2, offset: 3 }} >
        
                <h1>Weather App</h1>
                <Weatherform getWeather = {this.getWeather} />
                <Weather
                  city = {this.state.city}
                  temp = {temp}
                  minTemp = {temp_min}
                  maxTemp = {temp_max}
                  weatherDesc = {this.state.weatherDesc}
                  icon = {this.state.icon}
                />
        
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
