import React from "react";
import PreviewInfo from "./previewInfo";
import ReturnPreviewEducation from "./previewEducation";
import ReturnPreviewExperience from "./previewExperience";

function PreviewMode(props) {
  let personalInfo = props.info[0].personalInfo,
    eduInfo = props.info[0].eduInfo,
    expInfo = props.info[0].expInfo;

  function PreviewEduPanels() {
    let eduPanels = eduInfo.map((panel) => (
      <ReturnPreviewEducation info={eduInfo[panel.ID]} key={panel.ID} />
    ));
    return (
      <div className="previewBox">
        <h1 className="previewTitle">Education</h1>
        {eduPanels}
      </div>
    );
  }

  function PreviewExpPanels() {
    let expPanels = expInfo.map((panel) => (
      <ReturnPreviewExperience info={expInfo[panel.ID]} key={panel.ID} />
    ));
    return (
      <div className="previewBox">
        <h1 className="previewTitle">Experience</h1>
        {expPanels}
      </div>
    );
  }

  function switchToEdit() {
    // switch modes
    props.info[1]();
  }

  return (
    <div className="previewModeCont">
      <div className="previewMode">
        <PreviewInfo info={personalInfo} />
        <PreviewEduPanels />
        <PreviewExpPanels />
      </div>
      <button id="switchToEditBtn" onClick={switchToEdit}>
        Edit
      </button>
    </div>
  );
}

export default PreviewMode;
