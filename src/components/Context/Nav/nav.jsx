import React from "react";
import "./styles.scss";

const Nav = () => (
  <nav>
    <a
      href="https://bernadetteestacio.site/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Home
    </a>
    <span onClick={() => window.location.reload()}>Reset</span>

    <h1>Pop The Bubbles Game</h1>
  </nav>
);

export default Nav;
