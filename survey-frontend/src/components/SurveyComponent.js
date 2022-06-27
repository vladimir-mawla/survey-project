import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import QuestionComponent from "./QuestionComponent";
import { Link } from "react-router-dom";

const axios = require("axios").default;

const SurveyComponent = () => {
  const handleClick = (event) => {
    localStorage.setItem("survey_id", event.currentTarget.id)
    // console.log(event.currentTarget.id);
  };
  const [surveys, setSurveys] = useState([]);

  //   const surveys = ["survey1", "survey2", "survey3", "survey4"];
  const user_type = localStorage.getItem("user_type");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/surveys/getsurveys")

      .then((response) => {
        const s = response.data["surveys"];
        setSurveys(s);
        //   return (
        //     <div>
        //       <h1>hello</h1>
        //       {response.data["surveys"].map((survey) => (
        //         <div id={survey["id"]}>
        //           <p>
        //             {" "}
        //             hello {survey["name"]} {admin ? "x" : ""}
        //           </p>
        //         </div>
        //       ))}
        //     </div>
        //   );
      });
  }, []);

  return (
    <div>
      <ul className="surveys">
        {surveys.map((survey) => (
          <Link to={"/questioncomponent"} style={{textDecoration:"none"}}>
          <li id={survey.id} key={survey.id} onClick={handleClick}>
            
              {survey.name} 
              {/* {user_type == "1" ? "x" : ""} */}
            
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SurveyComponent;
