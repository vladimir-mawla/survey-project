import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const QuestionOptions = (props) => {
  const answer = document.getElementById("answer");
  const user_id = localStorage.getItem("user_id");

  const [options, setOptions] = useState([]);

  async function getOptions() {
    axios
      .post("http://127.0.0.1:8000/api/v1/questionoptions/getquestionoptions", {
        question_id: props.question_id,
      })

      .then((response) => {
        setOptions(response.data["options"]);
      });
  }
  useEffect(() => {
    getOptions();
  }, []);
  if (props.question_type === 1) {
    document
      .getElementById("submit_answer")
      .addEventListener("click", async function (e) {
        e.preventDefault();
        const answer = document.getElementById(
          props.question_id + "input"
        ).value;
        await axios.post("http://127.0.0.1:8000/api/v1/answers/addanswer", {
          question_id: props.question_id,
          answer: answer,
          user_id: user_id,
        });

        window.location.reload()
      });

    return (
      <div>
        <input id={props.question_id + "input"} type="text"></input>
      </div>
    );
  } else if (props.question_type === 2) {
    document
      .getElementById("submit_answer")
      .addEventListener("click", async function (e) {
        e.preventDefault();

        const answers = document.getElementsByName(props.question_id);
        for (var answer of answers) {
          if (answer.checked) {
            await axios.post("http://127.0.0.1:8000/api/v1/answers/addanswer", {
              question_id: props.question_id,
              answer: answer.value,
              user_id: user_id,
            });
            console.log(answer.value);
          }
          window.location.reload()
        }
      });

    return (
      <div>
        {options.map((value, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                value={value["option"]}
                name={props.question_id}
              />
              {value["option"]}
            </div>
          );
        })}
      </div>
    );
  } else if (props.question_type === 3) {
    document
      .getElementById("submit_answer")
      .addEventListener("click", async function (e) {
        e.preventDefault();

        const answers = document.getElementsByName(props.question_id);
        for (var answer of answers) {
          if (answer.checked) {
            await axios.post("http://127.0.0.1:8000/api/v1/answers/addanswer", {
              question_id: props.question_id,
              answer: answer.value,
              user_id: user_id,
            });
            window.location.reload()
          }
        }
      });

    return (
      <div>
        {options.map((value, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={value["option"]}
                name={props.question_id}
              />
              {value["option"]}
            </div>
          );
        })}
      </div>
    );
  }
};
export default QuestionOptions;
