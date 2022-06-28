import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import QuestionOptions from "./QuestionOptions";

const user_type = 1;
const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);

  const survey_id = localStorage.getItem("survey_id");

  async function getQuestions() {
    axios
      .post("http://127.0.0.1:8000/api/v1/questions/getquestionsofsurveys", {
        survey_id: survey_id,
      })

      .then((response) => {
        const s = response.data["question"];
        setQuestions(s);
      });
  }


  


  useEffect(() => {
    getQuestions();
  }, []);
  if (user_type == 0) {
    return (
      <center>
        <ul className="survey">
          {questions.map((question) => (
            <div key={question.id}>
              <li id={question.id}>{question.content}</li>
              <QuestionOptions
                question_id={question.id}
                question_type={question["question_type_id"]}
              />
            </div>
          ))}
          <button className={"login_btn"} id={"submit_answer"}>
            Submit
          </button>
        </ul>
      </center>
    );
  } else if (user_type == 1) {
    return (
      <div>
        <table>
          <tr className="survey">
            {questions.map((question) => (
                <th key={question.id} id={question.id}>{question.content}</th>
            ))}
            <tr>
              <td> </td>
            </tr>
          </tr>
        </table>
      </div>
    );
  }
};
export default QuestionComponent;
