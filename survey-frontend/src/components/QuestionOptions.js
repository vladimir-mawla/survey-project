import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const QuestionOptions = (props) => {
    const answer = document.getElementById("answer")
    const user_id = localStorage.getItem('user_id')
    function submit(){
        axios
        .post("http://127.0.0.1:8000/api/v1/answers/addanswer", {
          question_id: props.question_id,
          answer: answer.value,
          user_id: user_id,

        })
  
        // .then((response) => {
        //     response.json()
        //     .then((data) => ({
        //       data: data,
        //       status: response.status,
        //     }))
        // });
        console.log(props.question_id)
        console.log(answer.value)
        console.log(localStorage.getItem('user_id'))
    }
    
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
  if (props.question_type == 1) {
    return (
      <div>
        <input id='answer' type="text"></input>
        <Button
          text={"Submit"}
          b_id={'submit_answer'}
          className={"login-btn"}
          onClick={() => {
            submit();
          }}
        />
      </div>
    );
  } else if (props.question_type == 2) {
    return (
      <div>
        {options.map((value, index) => {
          return (
            <div key={index}>
              <input type="radio" id="answer" name={props.question_id} />
              {value["option"]}
            </div>
          );
        })}
                <Button
          text={"Submit"}
          b_id={'submit_answer'}
          className={"login-btn"}
          onClick={() => {
            submit();
          }}
        />
      </div>
    );
  } else if (props.question_type == 3) {
    return (
      <div>
        {options.map((value, index) => {
          return (
            <div key={index}>
              <input type="checkbox" id="answer" name={props.question_id} />
              {value["option"]}
            </div>
          );
        })}
                <Button
          text={"Submit"}
          b_id={'submit_answer'}
          className={"login-btn"}
          onClick={() => {
            submit();
          }}
        />

      </div>
    );
  }
};
export default QuestionOptions;
