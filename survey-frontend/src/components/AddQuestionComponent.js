import React, { useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddQuestionComponent = () => {
    const navigate = useNavigate();

    
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
        content, question_type_id, question_option_id
      })

      .then((response) => {
        localStorage.setItem("question_id", response.data["question"]["id"]);
      });
    input.current.value = "";
    navigate('./addquestioncomponent')
  }
  return (
    <div>
        <h1>hello</h1>
      <input ref={input} type="text" placeholder="Type Question" id="answer1" />
      <select name="cars" id="answer2">
        <option value="1">Text</option>
        <option value="2">Radio</option>
        <option value="3">Checkbox</option>
      </select>
      {/* {question_type_id == 2 ? navigate("./Options") : question_type_id == 3 ? navigate("./Options") : ''} */}
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
