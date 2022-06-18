import React from 'react'
import Button from './Button';

const AddSurveyName = () => {
    function addSurveyName(){
        console.log('Signing Up')
    }
  return (
    <div>
      <form>
          <input type="text" placeholder="Survey Name" id="survey_name" />
          <Button text={'Submit'} className={'survey-name-btn'} onClick = {() => {
              addSurveyName()
          }}/>
          <p className="goto-link">
          
          </p>
      </form>
    </div>
  );
};
export default AddSurveyName;