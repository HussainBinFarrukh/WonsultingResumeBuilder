import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function HeaderP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  let divider;
  let dash = "|";
  let comma =",";
  if (Object.keys(contentUse.header).length > 0) {
    divider = <hr className={classes.dividerRight} />;
  } else {
    divider = "";
    dash= "";
    comma="";
  }

  return (
    <div>
      <div className={classes.headerResume}>
        <div className={classes.contentHeader} >
          <h1 className={classes.h1Name}>{contentUse.header.name}</h1>
          <div className="headerStuff">
          <p className="edu-city">
            {contentUse.header.address} 
            &nbsp;
            </p>
          <p className="edu-city">
            {contentUse.header.city}{comma} &nbsp; 
            </p>
          <p className="edu-city">
            {contentUse.header.state}{comma} &nbsp;
            </p>
          <p className="edu-city">
            {contentUse.header.zip} &nbsp; {dash} &nbsp;
            </p>
          <p className="edu-city">
            {contentUse.header.phone} &nbsp; {dash} &nbsp;
            </p>
          <p className="edu-city">
            {contentUse.header.email} &nbsp; {dash} &nbsp;
          </p>
         <p className="edu-city">
          {contentUse.header.summary}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderP;
