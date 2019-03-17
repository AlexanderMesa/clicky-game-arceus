import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import images from "./images.json";
import GameImage from "./components/GameImage";
import { Container, Row, Col } from "react-bootstrap";
import { currentScore } from "./components/GameImage";
import { highScore } from "./components/GameImage";

localStorage.getItem("highScore");

class App extends Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.state = { images, isClicked: null };
  }

  clickEvent(event) {
    //Ramdomly orders the Pokemon
    event.preventDefault();
    var newOrder = this.state.images;
    for (var i = 0; i < newOrder.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (newOrder.length - i));
      var temp = newOrder[j];
      newOrder[j] = newOrder[i];
      newOrder[i] = temp;
    }
    console.log("clicked");
    console.log(this.state.images);

    this.setState({ images: newOrder });

    if (currentScore === 0) {
      this.setState({ isClicked: false });
    }
  }

  resetScore(event) {
    event.preventDefault();
    localStorage.setItem("highScore", 0);
    localStorage.getItem("highScore");
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p style={{ fontSize: "60px" }}>
            <b>Arceus Clicky Game</b>
          </p>
          <p>Don't click on the same image more than once!</p>
          <p>Current Score: {currentScore}</p>
          <p>High Score: {localStorage.getItem("highScore")}</p>
          <div className="images-group" onClick={this.clickEvent}>
            <Container>
              <Row>
                {images.map(item => (
                  <div key={item.id}>
                    <Col sm={2}>
                      <GameImage image={item.image} name={item.name} />
                    </Col>
                  </div>
                ))}
              </Row>
            </Container>
          </div>
          <button onClick={this.resetScore}>Reset High Score</button>
        </header>
      </div>
    );
  }
}

export default App;

//https://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize
