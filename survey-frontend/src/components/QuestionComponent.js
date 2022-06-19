import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionComponent = () => {
    const [questions, setQuestions]= useState([])

    const user_type = localStorage.getItem('user_type');
    const survey_id = localStorage.getItem('survey_id')
    useEffect(() => {
      axios
      .post("http://127.0.0.1:8000/api/v1/questions/getquestionsofsurveys", {survey_id} )
    
        .then((response) => {
            const s = response.data["question"]
            setQuestions(s)
        });
    }, [])
    
    return (
        <div>
            <ul>
                {questions.map(question => (
                    <li id={question.id} key={question.id} >
                        {question.content}</li>
                ))}
            </ul>
        </div>
    )
    };

export default QuestionComponent;