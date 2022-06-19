import React from "react";

const AddSurveyComponent = () => {
    const answer = document.getElementById('answer')
    const name = answer.value
    useEffect(() => {
        axios
          .post("http://127.0.0.1:8000/api/v1/surveys/addsurvey", {
            name,
          })
    
          .then((response) => {
            localStorage.setItem('survey_id', response.data["survey"]["id"]);
          });
      }, []);
}
export default AddSurveyComponent;