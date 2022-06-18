import React from "react";
import ReactDOM from 'react-dom';
import Button from './Button';
import { Link } from 'react-router-dom';

const Login = () => {
    function login(){
        console.log('logging in')
    }
  return (
    <div>
      <form>
          <input type="email" placeholder="email" id="login_email" />
          <input type="password" placeholder="password" id="login_password" autoComplete="on"/>
          <Button text={'Login'} className={'login-btn'} onClick = {() => {
              login()
          }}/>
          <p className="goto-link">
            <Link to={'/signup'}>Create Account</Link>
          </p>
      </form>
    </div>
  );
};
export default Login;
