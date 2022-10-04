import React, { Component } from "react";
import "./styles/App.css";
import uniqid from "uniqid";
import PreviewMode from "./components/previewMode";
import EditMode from "./components/editMode";

class App extends Component {
  constructor(props) {
    super(props);
    this.switchModes = this.switchModes.bind(this);

    this.state = {
      mode: "edit",
      personalInfo: { name: null, email: null, phone: null },
      eduInfo: [
        { school: null, study: null, dateOfStudy: null, ID: 0 },

        // add to this via another component, new arr for each panel
      ],
      expInfo: [
        {
          company: null,
          position: null,
          description: null,
          dateOfWork: null,
          ID: 0,
        },
      ],
      id: uniqid(),
    };
  }

  newEduPanel = (newArr) => {
    this.setState({ eduInfo: newArr });
  };

  newExpPanel = (newArr) => {
    this.setState({ expInfo: newArr });
  };

  delEduPanel = () => {
    let length = this.state.eduInfo.length;
    this.setState({
      eduInfo: this.state.eduInfo.filter(function (panel) {
        return panel.ID < length - 1;
      }),
    });
  };

  delExpPanel = () => {
    let length = this.state.expInfo.length;
    this.setState({
      expInfo: this.state.expInfo.filter(function (panel) {
        return panel.ID < length - 1;
      }),
    });
  };

  switchModes = () => {
    let mode = this.state.mode;

    if (mode == "edit") {
      this.setState({ mode: "preview" });
    } else {
      this.setState({ mode: "edit" });
    }
  };

  currentMode = () => {
    if (this.state.mode == "edit") {
      return (
        <EditMode
          info={[
            this.state,
            this.switchModes,
            this.newEduPanel,
            this.newExpPanel,
            this.delEduPanel,
            this.delExpPanel,
          ]}
        />
      );
    } else {
      return <PreviewMode info={[this.state, this.switchModes]} />;
    }
  };

  render() {
    return <div className="mainCont">{this.currentMode()}</div>;
  }
}

export default App;
