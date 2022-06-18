import React from "react";
import ReactDOM from 'react-dom';
import Button from './Button';
import { Link } from 'react-router-dom';

const Signup = () => {
    function signup(){
        console.log('Signing Up')
    }
  return (
    <div>
      <div>
          <input type="email" placeholder="email" id="signup_email" />
          <input type="password" placeholder="password" id="signup_password" />
          <Button text={'Signup'} className={'signup-btn'} onClick = {() => {
              signup()
          }}/>
          <p className="goto-link">
          <Link to={'/'}>Have an Account?</Link>
          </p>
      </div>
    </div>
  );
};
export default Signup;