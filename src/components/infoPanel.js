import React from "react";

function InfoPanel(props) {
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
    <div className="editPanel editPanelPerInfo">
      <div className="inputsCont personalInfoInputs">
        <input
          id="nameInput"
          placeholder="Full Name"
          defaultValue={checkValue("name")}
          onChange={(e) => handleChange("name", e)}
          maxLength="40"
        ></input>
        <input
          id="emailInput"
          placeholder="Email Address"
          defaultValue={checkValue("email")}
          onChange={(e) => handleChange("email", e)}
          maxLength="40"
        ></input>
        <input
          id="phoneNumInput"
          placeholder="Phone Number"
          defaultValue={checkValue("phone")}
          onChange={(e) => handleChange("phone", e)}
          maxLength="25"
        ></input>
      </div>
    </div>
  );
}

export default InfoPanel;
