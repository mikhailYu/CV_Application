import React from "react";

function ReturnPreviewEducation(props) {
  let eduInfo = props.info;

  return (
    <div className="previewBox previewGap">
      <div className="previewLine">
        <span className="previewLabel">Location of Study: </span>
        <span className="previewAnswer">{eduInfo.school}</span>
      </div>
      <div className="previewLine">
        <span className="previewLabel">Qualification: </span>
        <span className="previewAnswer">{eduInfo.study}</span>
      </div>
      <div className="previewLine">
        <span className="previewLabel">Date of Study: </span>
        <span className="previewAnswer">{eduInfo.dateOfStudy}</span>
      </div>
    </div>
  );
}

export default ReturnPreviewEducation;
