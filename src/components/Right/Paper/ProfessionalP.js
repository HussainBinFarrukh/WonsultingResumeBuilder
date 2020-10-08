import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";
import data from '../../../utils/fake_data';

function ProfessionalP() {
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
  let dash= "-";
  if (Object.keys(contentUse.professional).length < 5) {
    title = "";
    dash="";
  } else {
    title = (
      <h5 style={{borderBottom: "solid 2px", marginTop: "5px", paddingBottom: "5px"}}>
        <strong>Professional Experience</strong>
      </h5>
    );
  }
  let bulletProfessional4 = contentUse.professional.desc2.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });


  let bulletProfessional1 = contentUse.professional.desc1.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  let bulletProfessional2 = contentUse.professional.desc2.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  let bulletProfessional3 = contentUse.professional.desc2.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });




  return (
    <div className={classes.professionalResume}>
    {title}
      <div className={classes.professionalResumeExp}>
        <p>
          <strong style={{ fontWeight: "bold" }}>{contentUse.professional.company1}</strong>{" "}
          <strong><span style={{float: "right"}}>{contentUse.professional.local1}</span></strong>
        </p>
        <p>
          <span style={{fontStyle: "italic"}}>{contentUse.professional.position1} </span>
          <span style={{float: "right", fontStyle: "italic"}}>{contentUse.professional.start1}</span>
          <span style={{float: "right", fontStyle: "italic"}}> {contentUse.professional.end1} {dash} &nbsp; </span>
        </p>
        <ul>{bulletProfessional1}</ul>
        <p>
          <strong>{contentUse.professional.company2}</strong>{" "}
          <strong><span style={{float: "right"}}>{contentUse.professional.local2}</span></strong>
        </p>
        <p>
        <span style={{fontStyle: "italic"}}> {contentUse.professional.position2} </span>
          <span style={{float: "right", fontStyle: "italic" }}>{contentUse.professional.start2}</span>
          <span style={{float: "right", fontStyle: "italic"}}> {contentUse.professional.end2} {dash} &nbsp; </span>
        </p>
        <ul>{bulletProfessional2}</ul>
        <p>
        <strong>{contentUse.professional.company3}</strong>{" "}
        <strong><span style={{float: "right"}}>{contentUse.professional.local3}</span></strong>
      </p>
      <p>
      <span style={{fontStyle: "italic"}}> {contentUse.professional.position3} </span>
        <span style={{float: "right", fontStyle: "italic" }}>{contentUse.professional.start3}</span>
        <span style={{float: "right", fontStyle: "italic"}}> {contentUse.professional.end3} {dash} &nbsp; </span>
      </p>
      <ul>{bulletProfessional3}</ul>
              <p>
        <strong>{contentUse.professional.company4}</strong>{" "}
        <strong><span style={{float: "right"}}>{contentUse.professional.local4}</span></strong>
      </p>
      <p>
      <span style={{fontStyle: "italic"}}> {contentUse.professional.position4} </span>
        <span style={{float: "right", fontStyle: "italic" }}>{contentUse.professional.start4}</span>
        <span style={{float: "right", fontStyle: "italic"}}> {contentUse.professional.end4} {dash} &nbsp; </span>
      </p>
      <ul>{bulletProfessional4}</ul>
      </div>
    </div>
  );
}

export default ProfessionalP;
