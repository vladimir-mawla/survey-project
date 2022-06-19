import React from "react";
addQuestionOption
const Option = () => {
    function submit() {
        const answer = document.getElementById('answer')
        const option = answer.value
        axios
          .post("http://127.0.0.1:8000/api/v1/questionoptions/addquestionoption", {
            question_id, option
          })
    
          .then((response) => {
            // localStorage.setItem("survey_id", response.data["survey"]["id"]);
          });
        input.current.value = "";
      }
      return (
          <div>
              <input id='answer'></input>
          </div>
      )
}
export default Option;