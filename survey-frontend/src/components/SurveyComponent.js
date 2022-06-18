import React from "react";


const SurveyComponent = () => {
    const surveys = ["survey1", "survey2", "survey3", "survey4"]; 
    
    const pablo = surveys.map((survey, index) => ( 
    <p key={index}> hello {survey}</p>
    ));
    
  return (
    <div>{pablo}</div>
  );
};

export default SurveyComponent;
