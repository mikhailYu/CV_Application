import React from "react";

function InfoPanel(props) {
  function checkValue(key) {
    let info = props.info;

    if (info[key]) {
      return info[key];
    } else if (key == "name") {
      return "Full Name";
    } else if (key == "email") {
      return "Email Address";
    } else {
      return "Phone Number";
    }
  }

  return (
    <div className="editPanel">
      <div>
        <input id="nameInput" placeholder={checkValue("name")}></input>
        <input id="emailInput" placeholder={checkValue("email")}></input>
        <input id="phoneNumInput" placeholder={checkValue("phone")}></input>
      </div>
    </div>
  );
}

export default InfoPanel;
