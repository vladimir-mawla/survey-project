import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const user_type = 1;
const GetAnswers = ({ question_id }) => {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/v1/answers/getanswerofquestion", {
        question_id: question_id,
      })

      .then((response) => {
        const s = response.data["answer"];
        console.log(s)
        setAnswers(s);
      });
  }, []);

  return (
      <div className="answer-container">
          {answers.map((answer, index) => (
              <div className="answer-container-child">
            <h4 className="answer" key={index} id={answer.id}>{answer.answer}</h4>
            </div>
        ))}
      </div>
  )
};
export default GetAnswers;
