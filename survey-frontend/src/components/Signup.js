import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { Component } from "react";
import {useNavigate} from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  function signup() {
    
    const signup_name = document.getElementById("signup_name");
    const signup_email = document.getElementById("signup_email");
    const signup_password = document.getElementById("signup_password");
    const signup_password_confirmation = document.getElementById("signup_password_confirmation");
    fetch("http://127.0.0.1:8000/api/v1/auth/register", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text-plain, /",
        "X-Requested-With": "XMLHttpRequest",
      },

      method: "post",
      credentials: "same-origin",
      body: JSON.stringify({
        email: signup_name.value,
        email: signup_email.value,
        password: signup_password.value,
        password_confirmation: signup_password_confirmation.value,
      }),
    }).then((response) =>
      response
        .json()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
    )
        .then((res) => {
        if(res.data["access_token"]){

          localStorage.setItem('access_token', res.data["access_token"]);
          localStorage.setItem('user_type', res.data["user"]["user_type"]);
          localStorage.getItem("user_id", res.data["user"]["user_id"]);

          if(res.data["user"]["user_type"] == 1){
            navigate('/adminpage')
          }else{navigate('/userpage')}
        }else {
            alert("User not Found")
            signup_name.value = "";
            signup_email.value = "";
            signup_password.value = "";
            signup_password_confirmation.value = "";
        }
      })
  
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="Name" id="signup_name" />
        <input type="email" placeholder="Email" id="signup_email" />
        <input type="password" placeholder="Password" id="signup_password" autoComplete="on" />
        <input type="password" placeholder="Confirm password" id="signup_password_confirmation" autoComplete="on" />
        <Button
          text={"Signup"}
          className={"login-btn"}
          onClick={() => {
            signup();
          }}
        />
        <p className="goto-link">
          <Link to={"/login"}>Have an Account?</Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
