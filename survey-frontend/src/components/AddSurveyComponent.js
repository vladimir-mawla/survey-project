import React, { useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddSurveyComponent = () => {
    const navigate = useNavigate();

    const input = useRef(null)

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
      input.current.value = '';
    navigate('../addquestioncomponent');
  }
  return (
    <center>
        <h2>Add Survey</h2>
      <input ref={input} type="text" placeholder="Survey Name" id="answer" />
      <Button
        text={"Submit"}
        className={"submit-answer"}
        onClick={() => {
          submit();
        }}
      />
    </center>
  );
};
export default AddSurveyComponent;
