import React, { Component } from "react";
import { Container, Col, Card } from "reactstrap";
import Weather from './components/weather/Weather';

import "./App.css";

class App extends Component {
  state = {};
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
