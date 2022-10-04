import React, { Component } from "react";
import "./styles/Header.css";
import logo from "./styles/icons/clock-fast.png";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headerCont">
        <h1 className="headerTitle">
          <span>Quick CV</span>
          <img src={logo}></img>
        </h1>
      </div>
    );
  }
}

export default Header;
