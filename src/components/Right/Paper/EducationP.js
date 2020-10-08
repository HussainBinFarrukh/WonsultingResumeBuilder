import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";
import './paper.css';

function EducationP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (Object.keys(contentUse.education).length === 0) {
    title = "";
  } else {
    title = (
      <h5 style={{borderBottom: "solid 2px", marginTop: "5px", paddingBottom: "5px"}}>
        <strong>Education</strong>
      </h5>
    );
  }

  let bulletEducation;
  let bulletEducation1;

  if (!contentUse.education.additional) {
    bulletEducation = "";
  } else {
    bulletEducation = (
        <li>{contentUse.education.additional}</li>
    );
  }
  if (!contentUse.education.additional1) {
    bulletEducation1 = "";
  } else {
    bulletEducation1 = (
        <li>{contentUse.education.additional1}</li>
    );
  }

  return (
    <div className={classes.professionalResume}>
      <div >
        {title}
        <p>
          <strong>{contentUse.education.institution} </strong>{" "}
          </p>
          <p style={{float: "right"}}>
          {contentUse.education.city}
        </p>
        <p>
          {contentUse.education.major} 
          </p>
          <p style={{float: "right"}}>
          {contentUse.education.gradYear}
          </p>
        {bulletEducation}
        {bulletEducation1}
      </div>
    </div>
  );
}

export default EducationP;
