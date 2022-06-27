import React from "react";
import axios from "axios";
import Button from "./Button";
import { useRef } from "react";
const Option = () => {
  const input = useRef(null);

  function submit() {
    const question_id = localStorage.getItem("question_id");
    const answer = document.getElementById("answer");
    const option = answer.value;
    axios
      .post("http://127.0.0.1:8000/api/v1/questionoptions/addquestionoption", {
        question_id: question_id,
        option: option,
      })

      .then((response) => {
        input.current.value = "";
      });
  }
  return (
    <div>
      <input ref={input} id="answer" type="text"></input>
      <Button
        text={"Submit"}
        className={"submit"}
        onClick={() => {
          submit();
        }}
      />
    </div>
  );
};
export default Option;
