import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [questiontype, setQuestionType] = useState([]);

  const user_type = localStorage.getItem("user_type");
  const survey_id = localStorage.getItem("survey_id");
  const user_id = localStorage.getItem("user_id");
  let answer = document.getElementById("answer");
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/v1/questions/getquestionsofsurveys", {
        survey_id,
      })

      .then((response) => {
        console.log(response.data["question"][0]["question_type_id"]);
        const s = response.data["question"];
        setQuestions(s);
        const q = response.data["question"][0]["question_type_id"];
        setQuestionType(q);
      });
  }, []);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/v1/answers/addanswer", {
        user_id,
        survey_id,
        answer,
      })

      .then((response) => {
        const a = response.data["answer"];
      });
  }, []);
  if (questiontype === 1) {
    return (
      <div>
        <ul>
          {questions.map((question) => (
            <div>
              <li id={question.id} key={question.id}>
                {question.content}
              </li>
              <input id="answer"></input>
            </div>
          ))}
        </ul>
      </div>
    );
  } else if (questiontype === 2) {
    return (
      <div>
        <ul>
          {questions.map((question) => (
            <div>
              <li id={question.id} key={question.id}>
                {question.content}
              </li>
            </div>
          ))}
          {questionoptions.map((option) => (
            <div>
              <input
                id="answer"
                type="radio"
                value={question_option.id}
                name={question_option.name}
              />
            </div>
          ))}
        </ul>
      </div>
    );
  } else if (questiontype === 3) {
    return (
      <div>
        <ul>
          {questions.map((question) => (
            <div>
              <li id={question.id} key={question.id}>
                {question.content}
              </li>
            </div>
          ))}
          {questionoptions.map((option) => (
            <div>
              <checkbox
                id="answer"
                type="radio"
                value={question_option.id}
                name={question_option.name}
              />
            </div>
          ))}
        </ul>
      </div>
    );
  }
};
export default QuestionComponent;
