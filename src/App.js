import React, { Component } from "react";
import { Container, Col, Card } from "reactstrap";
import Weather from './components/weather/Weather';

import "./App.css";


const apiKey = 'd47bc5e52c9b46f24443d3c321a13ddc';

class App extends Component {
 
  constructor(){
    super();
    this.state = {

    };
    this.getWeather();
  }


   

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`);
    const response = await api_call.json();
    console.log(response);
  }



  render() {
    return (
      <div className="App">
        <Container>
          <Col lg="6">
            <Card>
              <h1>Weather App</h1>
              <h1>Santiago</h1>
              <Weather />

            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
