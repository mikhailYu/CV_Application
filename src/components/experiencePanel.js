import React from "react";

function ExpPanel(props) {
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
    <div className="editPanel editPanelExp">
      <div className="inputsCont expInputs">
        <input
          id="companyInput"
          placeholder="Company Name"
          defaultValue={checkValue("company")}
          onChange={(e) => handleChange("company", e)}
          maxLength="40"
        ></input>
        <input
          id="positionInput"
          placeholder="Position"
          defaultValue={checkValue("position")}
          onChange={(e) => handleChange("position", e)}
          maxLength="40"
        ></input>
        <textarea
          id="descriptionInput"
          placeholder="Job Description"
          defaultValue={checkValue("description")}
          onChange={(e) => handleChange("description", e)}
          maxLength="1000"
        ></textarea>
        <input
          id="dateOfWorkInput"
          placeholder="Date of Position"
          defaultValue={checkValue("dateOfWork")}
          onChange={(e) => handleChange("dateOfWork", e)}
          maxLength="30"
        ></input>
      </div>
    </div>
  );
}

export default ExpPanel;
