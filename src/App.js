import React from "react";
import Mechanics from "./components/mechanics";
import Nav from "./components/nav";
import MainContent from "./components/mainContent";

class App extends Mechanics {
  constructor(props) {
    super(props);
    this.state = {
      startButton: true,
      instruction: true,
      bubblesList: [],
      allBubbles: true,
      goodjob: false,
      timeUP: false,
      timeLeft: 30,
      // Randomly Select the Burst-all Bubble
      pickedBubble: "bubble" + Math.floor(Math.random() * 64 + 1),
      // Trigger Show Bubbles
      triggerBubbles: []
    };
  }

  render() {
    const {
      instruction,
      timeLeft,
      startButton,
      bubblesList,
      allBubbles,
      goodjob,
      timeUP
    } = this.state;
    return (
      <div>
        <Nav reset={this.reset} />

        <MainContent
          instruction={instruction}
          timeLeft={timeLeft}
          startButton={startButton}
          startGame={this.startGame}
          bubblesList={bubblesList}
          clickBubble={this.clickBubble}
          allBubbles={allBubbles}
          goodjob={goodjob}
          timeUP={timeUP}
        />

        <footer>
          <p>
            <small>
              Copyright © 2015-{new Date().getFullYear()} Bernadette Estacio.
              All rights reserved.
            </small>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
