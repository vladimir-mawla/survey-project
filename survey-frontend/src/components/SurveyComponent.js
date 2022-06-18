import React from "react";
import { useState } from "react";

const SurveyComponent = () => {
    var admin = true;
    
    const surveys = ["survey1", "survey2", "survey3", "survey4"]; 
    
    // fetch("http://127.0.0.1:8000/api/v1/surveys/getsurveys", {
    //     method: "get",
    //     credentials: "same-origin",
    //   })
    //   console.log("hello")
    //     .then((response) => {
    //         console.log("hello")
    //     })

  try {return (
    <div>{surveys.map((survey, index) => ( 

        <p id={index}> hello {survey} {admin ? 'x' : ''}</p>
        ))}</div>
  );
    } catch(error) {
        console.log(error)
    }






};

export default SurveyComponent;
