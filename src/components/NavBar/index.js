import React from "react";
import "./style.css";

// This is called navbar but it's just the header, displaying the name and different messages depending on what the person clicks.
//also includes their score

const NavBar = props =>  (
    <nav className="navbar">
      <div className="title">Lord of the Clicks</div>
      <div className="message">{props.message}<p>Try Not To Click The Same Character Twice!</p></div>
      <div className="score">Score: {props.score}</div>
      </nav>
  );


export default NavBar;
