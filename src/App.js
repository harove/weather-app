import React, { Component } from "react";
import { Container, Col, Card } from "reactstrap";
import Weather from './components/weather/Weather';

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

    };
    this.getWeather();
  }

  fahrenheitInCelsius = f => Math.floor(f-273.15); 

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Valparaiso,cl&appid=${apiKey}`);
    console.log(api_call);
    const response = await api_call.json();
    console.log(response);
    const {temp,temp_min,temp_max} = response.main;
    this.setState({
      city: response.name,
      temp: this.fahrenheitInCelsius(temp),
      temp_min: this.fahrenheitInCelsius(temp_min),
      temp_max: this.fahrenheitInCelsius(temp_max),
      weatherDesc: response.weather[0].main,
    });
  }


 



  render() {

    const {temp,temp_min,temp_max} = this.state;

    return (

      <div className="App">
        <Container>
          <Col lg="6">
            <Card>
              <h1>Weather App</h1>
                <Weather
                  city = {this.state.city}
                  temp = {temp}
                  minTemp = {temp_min}
                  maxTemp = {temp_max}
                  weatherDesc = {this.state.weatherDesc}
                />
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
