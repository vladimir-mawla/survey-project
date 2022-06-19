import React, { useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AddQuestionComponent = () => {
  const input = useRef(null);

  function submit() {
    const answer1 = document.getElementById("answer1");
    const content = answer1.value;
    const answer2 = document.getElementById("answer2");
    const question_type_id = answer2.value;
    const answer3 = document.getElementById("answer3");
    const question_option_id = answer3.value;
    axios
      .post("http://127.0.0.1:8000/api/v1/questions/addquestion", {
        name,
      })

      .then((response) => {
        localStorage.setItem("survey_id", response.data["survey"]["id"]);
      });
    input.current.value = "";
    //   Navigate('./userpage')
  }
  return (
    <div>
      <input ref={input} type="text" placeholder="Survey Name" id="answer1" />
      <select name="cars" id="answer2">
        <option value="1">Text</option>
        <option value="2">Radio</option>
        <option value="3">Checkbox</option>
      </select>
      {question_type_id == 2 ? Navigate("./Options") : ''}
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
export default AddQuestionComponent;
