import React from "react";
//import images from "./images.json";
var currentScore = 0;
var highScore = localStorage.getItem("highScore");
class GameImage extends React.Component {
  state = { isClicked: false };
  handleClick = () => {
    console.log(this.state.isClicked);
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
      currentScore++;
    } else {
      console.log("Game Over");
      if (currentScore > highScore) {
        highScore = currentScore;
      }
      currentScore = 0;
      localStorage.setItem("highScore", highScore);
      window.location.reload();
    }
  };

  resetGame = () => {
    localStorage.setItem("highScore", 0);
    localStorage.getItem("highScore");
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <img
          src={this.props.image}
          alt={this.props.name}
          style={{ width: "150px", height: "150px" }}
        />
        <p>{/*!this.state.isClicked ? "false" : "true"*/}</p>
      </div>
    );
  }
}

export default GameImage;
export { currentScore };
export { highScore };
