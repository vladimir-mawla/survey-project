import React, { useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddQuestionComponent = () => {
    var navigate = useNavigate();
    var survey_id = localStorage.getItem('surveyz_id')

    // var answer3 = document.getElementById("answer3");

  const input = useRef(null);

  async function submit() {
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    // var content = ;
    var question_type_id = answer2.value;
    // const question_option_id = answer3.value;
    await axios
      .post("http://127.0.0.1:8000/api/v1/questions/addquestion", {
        content:answer1.value,
        survey_id:survey_id,
        question_type_id:answer2.value,
    })

      .then((response) => {
        localStorage.setItem("question_id", response.data["question"]["id"]);
      });
    input.current.value = "";
    // navigate('./addquestioncomponent')
    if(question_type_id == 2 || question_type_id == 3){
        navigate('../Options')
    }
  }
  return (
    <center className="add-question">
      <input ref={input} type="text" placeholder="Type Question" id="answer1" />
      <select name="type" id="answer2">
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
    </center>
  );
};
export default AddQuestionComponent;
