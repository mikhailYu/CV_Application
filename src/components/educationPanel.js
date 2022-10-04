import React from "react";

function EduPanel(props) {
  let info = props.info;

  function handleChange(key, e) {
    info[key] = e.target.value;
  }
  function checkValue(key) {
    if (info[key]) {
      return info[key];
    } else {
      return;
    }
  }

  return (
    <div className="editPanel editPanelEdu">
      <div className="inputsCont eduInputs">
        <input
          id="schoolInput"
          placeholder="Place of Education"
          defaultValue={checkValue("school")}
          onChange={(e) => handleChange("school", e)}
          maxLength="40"
        ></input>
        <input
          id="studyTitleInput"
          placeholder="Qualification"
          defaultValue={checkValue("study")}
          onChange={(e) => handleChange("study", e)}
          maxLength="40"
        ></input>
        <input
          id="dateStudyInput"
          placeholder="Date of study"
          defaultValue={checkValue("dateOfStudy")}
          onChange={(e) => handleChange("dateOfStudy", e)}
          maxLength="30"
        ></input>
      </div>
    </div>
  );
}

export default EduPanel;
