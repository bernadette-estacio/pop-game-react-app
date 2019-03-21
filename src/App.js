import React, { Component } from "react";
import ReactDOM from "react-dom";
import start from "./img/start.png";
import bubbleImg from "./img/bubble.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleDisplay: { display: "block" },
      styleVisibility: { visibility: "hidden" },
      width: window.innerWidth,
      height: window.innerHeight,
      timeLeft: 30,
      bubble: [],

      // Randomly Select the Burst-all Bubble
      pickedBubble: "bubble" + Math.floor(Math.random() * 64 + 1)
    };
  }

  componentDidMount() {
    let bubble = [];
    for (var e = 0; e < 64; e++) {
      let obj = { id: e, vis: true };
      bubble.push(obj);
    }

    this.setState({
      bubble: bubble
    });
  }

  startGame = () => {
    console.log(
      ReactDOM.findDOMNode(document.getElementById(this.state.pickedBubble))
    ); // DELETE------------
    this.setState({
      styleDisplay: { display: "none" },
      styleVisibility: { visibility: "visible" }
    });
    this.timerId();
  };

  timerId = () => {
    setInterval(
      function() {
        this.state.timeLeft === 0
          ? this.stopGame()
          : this.setState({ timeLeft: this.state.timeLeft - 1 });
      }.bind(this),
      1000
    );
  };

  clickBubble = ev => {
    let clickedBubble = ev.currentTarget.id;
    this.hideBubble(clickedBubble);
    if (clickedBubble === this.state.pickedBubble) {
      this.burstBonus();
    }
    switch (clickedBubble) {
      case "bubble6":
        this.showBubbles("popbubble6");
        break;
      case "bubble11":
        this.showBubbles("popbubble11");
        break;
      case "bubble24":
        this.showBubbles("popbubble24");
        break;
      case "bubble30":
        this.showBubbles("popbubble30");
        break;
      case "bubble43":
        this.showBubbles("popbubble43");
        break;
      case "bubble52":
        this.showBubbles("popbubble52");
        break;
      case "bubble59":
        this.showBubbles("popbubble59");
        break;
    }
  };

  hideBubble = clickedBubble => {
    ReactDOM.findDOMNode(
      document.getElementById(clickedBubble)
    ).style.visibility = "hidden";
  };

  showBubbles = showBubble => {
    ReactDOM.findDOMNode(
      document.getElementsByClassName(showBubble)
    ).style.visibility = "visible";
  };

  // Burst all bubble by pickedBubble
  burstBonus = () => {
    this.burst();
    setTimeout(function() {
      ReactDOM.findDOMNode(
        document.getElementById("instruction")
      ).style.visibility = "hidden";
      ReactDOM.findDOMNode(document.getElementById("timeUP")).style.display =
        "none";
      ReactDOM.findDOMNode(
        document.getElementById("goodjob")
      ).style.visibility = "visible";
    }, 750);
  };

  stopGame = () => {
    this.burst();
    // ReactDOM.findDOMNode(
    //   document.getElementById("instruction")
    // ).style.visibility = "hidden";
    ReactDOM.findDOMNode(document.getElementById("timeUP")).style.visibility =
      "visible";
  };

  // Burst All Bubbles
  burst = () => {
    ReactDOM.findDOMNode(document.getElementById("allBubbles")).style.display =
      "none";
  };

  reset = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <nav>
          <a
            href="http://bernadetteengleman.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <span onClick={this.reset}>Reset</span>

          <h1>Pop The Bubbles Game</h1>
        </nav>

        <main>
          <div className="row" id="instruction">
            <p>
              Some bubbles will make popped bubbles appear BUT there is one
              bubble that can pop everything!
            </p>

            <Timer timeLeft={this.state.timeLeft} />
          </div>

          <div>
            <img
              src={start}
              alt="START"
              id="startButton"
              width="80"
              style={this.state.styleDisplay}
              onClick={this.startGame}
            />
          </div>

          {/* Winner Image */}
          <div id="goodjob" />

          {/* Time is Up Image */}
          <div id="timeUP" />

          <Bubbles
            bubbles={this.state.bubbles}
            styleVisibility={this.state.styleVisibility}
            clickBubble={this.clickBubble}
          />
        </main>

        <footer>
          <p>
            <small>
              Copyright © 2015-{new Date().getFullYear()} Bernadette Estacio.
              All rights reserved
            </small>
          </p>
        </footer>
      </div>
    );
  }
}

const Timer = props => {
  return (
    <div>
      <p>You have 30 seconds to pop all the bubbles.</p>

      <p className="timer">
        Time Left:{" "}
        <strong>
          <span id="countDown">{props.timeLeft}</span>{" "}
        </strong>
        sec
      </p>
    </div>
  );
};

const Bubbles = props => {
  return (
    <div id="allBubbles">
      {props.bubbles.map((bubble, i) => (
        <div key={i}>
          <img
            src={bubbleImg}
            alt="bubble"
            id={"bubble" + (i + 1)}
            className={bubble.vis}
            style={props.styleVisibility}
            onClick={props.clickBubble}
            unselectable="on"
          />
        </div>
      ))}
    </div>
  );
};

export default App;
