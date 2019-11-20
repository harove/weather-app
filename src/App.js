import React, { Component } from "react";
import { Container, Col, Card } from "reactstrap";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Container>
          <Col lg="6">
            <Card>
              <h1>Hola</h1>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
