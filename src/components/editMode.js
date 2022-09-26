import React from "react";
import InfoPanel from "./infoPanel";

function EditMode(props) {
  let personalInfo = props.info.personalInfo,
    eduInfo = props.info.eduInfo,
    expInfo = props.info.expInfo;
  return (
    <div className="editMode">
      <InfoPanel info={personalInfo} />
    </div>
  );
}

export default EditMode;
