import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function AdditionalSkillsP() {
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
  let title2;
  let tiltleMain;
  if (contentUse.additional.length === 0) {
    title = "";
    title2= "";
    tiltleMain="";
  } else {
    title = (
        <strong>Skills:</strong>
    );
    title2 = (
      <strong>Interests:</strong>
    );
    tiltleMain = (
      <h5 style={{borderBottom: "solid 2px", marginTop: "5px", paddingBottom: "5px"}}>
      <strong>Skills and Interests</strong>
    </h5>
    )
  }

  let bulletsData = contentUse.additional;
  return (
    <div className={classes.professionalResumeskills}>
    {tiltleMain}
      <div className={classes.professionalResumeskillstuff} >

        <p>{title} {bulletsData[0]}</p>
        
        <p>{title2} {bulletsData[1]} </p>

      </div>
      </div>
  );
}

export default AdditionalSkillsP;
