import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const QuestionOptions = (props) => {
    const [options, setOptions] = useState([])

    async function getOptions(){
        axios
      .post("http://127.0.0.1:8000/api/v1/questionoptions/getquestionoptions", {
        question_id: props.question_id,
      })

      .then((response) => {
        setOptions(response.data["options"])
      });
    }
    useEffect(() => {
        getOptions()
    }, [])
if(props.question_type == 1){
    return (
        <div><input type="text"></input></div>
    )
}else if(props.question_type == 2){
    return (
        <div>
            {options.map((value, index) => {
                return (
                    
                    <div key={index}>
                        <input type="radio" name={props.question_id}/>{value['option']}
                    </div>
                )
            }
            )}
        </div>
    )}else if(props.question_type == 3){
        return (
            <div>
                {options.map((value, index) => {
                    return (
                        
                        <div key={index}>
                            <input type="checkbox" name={props.question_id}/>{value['option']}
                        </div>
                    )
                }
                )}
            </div>
        )}
}
export default QuestionOptions;