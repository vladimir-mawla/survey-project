import React, { useEffect } from "react";
import Button from "./Button";
import axios from "axios";

const AddSurveyComponent = () => {
  function submit() {
    const answer = document.getElementById("answer");
    const name = answer.value;

    axios
      .post("http://127.0.0.1:8000/api/v1/surveys/addsurvey", {
        name,
      })

      .then((response) => {
        localStorage.setItem("survey_id", response.data["survey"]["id"]);
      });
  }
  return (
    <div>
      <input type="text" placeholder="Survey Name" id="answer" />
      <Button
        text={"Submit"}
        className={"submit-answer"}
        onClick={() => {
          submit();
        }}
      />
    </div>
  );
};
export default AddSurveyComponent;
