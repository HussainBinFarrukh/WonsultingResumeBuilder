import React from "react";
import HeaderP from "./HeaderP";
import ProfessionalP from "./ProfessionalP";
import EducationP from "./EducationP";
import AdditionalSkillsP from "./AdditionalSkillsP";
import './paper.css';

function Paper() {
  return (
    <div className="mainRight" >
      <div size="A4" className="page">
        <HeaderP />
        <AdditionalSkillsP />
        <ProfessionalP />
        <EducationP />
      </div>
    </div>
  );
}

export default Paper;
