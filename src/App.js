import React, { Component } from "react";
import "./styles/App.css";
import uniqid from "uniqid";

import EditMode from "./components/editMode";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "edit",
      personalInfo: { name: null, email: null, phone: null },
      eduInfo: [
        // add to this via another component, new arr for each panel
      ],
      expInfo: [
        // ...and here too
      ],
      id: uniqid(),
    };
  }

  render() {
    return (
      <div className="mainCont">
        <EditMode info={this.state} />
      </div>
    );
  }
}

export default App;
