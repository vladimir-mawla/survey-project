import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import QuestionOptions from "./QuestionOptions";

const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [questiontype, setQuestionType] = useState([]);
  const [questionoption, setQuestionOption] = useState([]);

  const user_type = localStorage.getItem("user_type");
  const question_id = localStorage.getItem("question_id");
  const survey_id = localStorage.getItem("survey_id");
  const user_id = localStorage.getItem("user_id");
  let answer = document.getElementById("answer");

  async function getQuestions() {
    axios
      .post("http://127.0.0.1:8000/api/v1/questions/getquestionsofsurveys", {
        survey_id: survey_id,
      })

      .then((response) => {
        const s = response.data["question"];
        setQuestions(s);
        for (var i = 0; i < s.length; i++) {
          const q = response.data["question"][i]["question_type_id"];
          setQuestionType(q);
        }
      });
  }
  useEffect(() => {
    getQuestions();
  }, []);
  function submit() {
    axios
      .post("http://127.0.0.1:8000/api/v1/answers/addanswer", {
        user_id: user_id,
        survey_id: survey_id,
        answer: "abc",
        question_id: question_id,
      })

      .then((response) => {
        const a = response.data["answer"];
      });
  }

  return (
    <div>
      <ul>
        {questions.map((question) => (
          <div key={question.id}>
            <li id={question.id}>{question.content}</li>
            <QuestionOptions question_id={question.id} question_type={question['question_type_id']}/>
            {/* {question["question_type_id"] === 1 ? (
              <input id="answer"></input>
            ) : question["question_type_id"] === 2 ? (
              <input id="answer" type="radio" />
            ) : question["question_type_id"] === 3 ? (
              <checkbox id="answer" type="checkbox" />
            ) : (
              ""
            )} */}
          </div>
        ))}
        <Button
          text={"Submit"}
          className={"login-btn"}
          onClick={() => {
            submit();
          }}
        />
      </ul>
    </div>
  );
  //  else if (questiontype === 2) {
  //   return (
  //     <div>
  //       <ul>
  //         {questions.map((question) => (
  //           <div>
  //             <li id={question.id} key={question.id}>
  //               {question.content}
  //             </li>
  //           </div>
  //         ))}
  //         {questionoptions.map((option) => (
  //           <div>
  //             <input
  //               id="answer"
  //               type="radio"
  //               value={question_option.id}
  //               name={question_option.name}
  //             />
  //           </div>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // } else if (questiontype === 3) {
  //   return (
  //     <div>
  //       <ul>
  //         {questions.map((question) => (
  //           <div>
  //             <li id={question.id} key={question.id}>
  //               {question.content}
  //             </li>
  //           </div>
  //         ))}
  //         {questionoptions.map((option) => (
  //           <div>
  //             <checkbox
  //               id="answer"
  //               type="radio"
  //               value={question_option.id}
  //               name={question_option.name}
  //             />
  //           </div>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
};
export default QuestionComponent;
