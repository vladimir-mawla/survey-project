import React, { useEffect } from "react";
import { useState } from "react";
const axios = require('axios').default;
const SurveyComponent = () => {
  var admin = true;
  const [surveys, setSurveys]= useState([])

//   const surveys = ["survey1", "survey2", "survey3", "survey4"];
  var cat = document.getElementById("cat_search");
  const user_type = localStorage.getItem('user_type');

useEffect(() => {
  axios
  .get("http://127.0.0.1:8000/api/v1/surveys/getsurveys")

    .then((response) => {

        const s = response.data["surveys"]
        setSurveys(s)
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
}, [])
return (
    <div>
        <ul>
            {surveys.map(survey => (
                <li id={survey.id} key={survey.id}>{survey.name}</li>
            ))}
        </ul>
    </div>
)
};

export default SurveyComponent;
