import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const axios = require("axios").default;

const SurveyComponent = () => {
  const handleClick = (event) => {
    localStorage.setItem("survey_id", event.currentTarget.id);
  };
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/surveys/getsurveys")

      .then((response) => {
        const s = response.data["surveys"];
        setSurveys(s);
      });
  }, []);

  return (
    <div>
      <ul className="surveys">
        {surveys.map((survey) => (
          <Link to={"/questioncomponent"} style={{ textDecoration: "none" }}>
            <li id={survey.id} key={survey.id} onClick={handleClick}>
              {survey.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SurveyComponent;
