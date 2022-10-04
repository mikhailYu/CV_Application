import React from "react";

function PreviewInfo(props) {
  let personalInfo = props.info;
  return (
    <div className="previewBox">
      <h1 className="previewTitle">Personal Information</h1>
      <div className="previewLine">
        <span className="previewLabel">Full Name: </span>
        <span className="previewAnswer">{personalInfo.name}</span>
      </div>
      <div className="previewLine">
        <span className="previewLabel">Email Address: </span>
        <span className="previewAnswer">{personalInfo.email}</span>
      </div>
      <div className="previewLine">
        <span className="previewLabel">Phone Number: </span>
        <span className="previewAnswer">{personalInfo.phone}</span>
      </div>
    </div>
  );
}

export default PreviewInfo;
