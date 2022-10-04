import React from "react";
import InfoPanel from "./infoPanel";
import EduPanel from "./educationPanel";
import ExpPanel from "./experiencePanel";

function EditMode(props) {
  let checkValidy = true; // test flag

  let personalInfo = props.info[0].personalInfo,
    eduInfo = props.info[0].eduInfo,
    expInfo = props.info[0].expInfo;

  function RenderEduPanels() {
    let eduPanels = eduInfo.map((panel) => (
      <EduPanel info={eduInfo[panel.ID]} key={panel.ID} />
    ));
    return <div className="mappedPanels">{eduPanels}</div>;
  }

  function RenderExpPanels() {
    let expPanels = expInfo.map((panel) => (
      <ExpPanel info={expInfo[panel.ID]} key={panel.ID} />
    ));
    return <div className="mappedPanels">{expPanels}</div>;
  }

  function addEduPanel() {
    let newEduPanel = {
      school: null,
      study: null,
      dateOfStudy: null,
      ID: eduInfo.length,
    };
    let newArr = eduInfo;

    newArr.push(newEduPanel);

    props.info[2](newArr);
  }

  function addExpPanel() {
    let newExpPanel = {
      company: null,
      position: null,
      description: null,
      dateOfWork: null,
      ID: expInfo.length,
    };
    let newArr = expInfo;

    newArr.push(newExpPanel);

    props.info[3](newArr);
  }

  function AddEduDel() {
    if (eduInfo.length > 1) {
      return (
        <button className="delEduBtn" onClick={delEduPanel}>
          Delete -
        </button>
      );
    }
  }
  function AddExpDel() {
    if (expInfo.length > 1) {
      return (
        <button className="delExpBtn" onClick={delExpPanel}>
          Delete -
        </button>
      );
    }
  }

  function delEduPanel() {
    props.info[4]();
  }

  function delExpPanel() {
    props.info[5]();
  }

  function submitEdit() {
    if (inputsValid() || !checkValidy) {
      // function to switch modes
      props.info[1]();
    } else {
      displayWarning();

      return;
    }

    function displayWarning() {
      let message = document.querySelector(".warningMessage");
      message.style.display = "inline-block";

      setInterval(() => {
        message.style.display = "none";
      }, 6000);
    }

    function inputsValid() {
      let allInputs = document.querySelectorAll("input");
      let descriptionInput = document.getElementById("descriptionInput").value;
      let isValid = true;
      allInputs.forEach((input) => {
        if (!input.value) {
          isValid = false;
        }
      });

      if (!descriptionInput) {
        isValid = false;
      }

      return isValid;
    }
  }

  return (
    <div className="editMode">
      <InfoPanel info={personalInfo} />
      <RenderEduPanels />
      <AddEduDel />
      <button id="addEduBtn" onClick={addEduPanel}>
        Add Education Panel +
      </button>
      <RenderExpPanels />
      <AddExpDel />
      <button id="addExpBtn" onClick={addExpPanel}>
        Add Experience Panel +
      </button>
      <button id="submitBtn" onClick={submitEdit}>
        Preview
      </button>
      <div className="warningMessage">Please fill out all fields</div>
    </div>
  );
}

export default EditMode;
