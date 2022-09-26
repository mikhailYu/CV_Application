import React, { Component } from "react";
import "./styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headerCont">
        <h1 className="headerTitle">Quick CV</h1>
      </div>
    );
  }
}

export default Header;
