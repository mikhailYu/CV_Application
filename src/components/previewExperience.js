import React from "react";

function ReturnPreviewExperience(props) {
  let expInfo = props.info;

  return (
    <div className="previewBox previewGap">
      <div className="previewLine">
        <span className="previewLabel">Company Name: </span>
        <span className="previewAnswer">{expInfo.company}</span>
      </div>
      <div className="previewLine">
        <span className="previewLabel">Position: </span>
        <span className="previewAnswer">{expInfo.position}</span>
      </div>
      <div className="previewLine">
        <span className="previewLabel">Description of work: </span>
        <span className="previewAnswer">{expInfo.description}</span>
      </div>
      <div className="previewLine">
        <span className="previewLabel">Date of Work: </span>
        <span className="previewAnswer">{expInfo.dateOfWork}</span>
      </div>
    </div>
  );
}

export default ReturnPreviewExperience;
