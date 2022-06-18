import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { Link } from "react-router-dom";

const Login = () => {
  function login() {
    const login_email = document.getElementById("login_email");
    const login_password = document.getElementById("login_password");
    console.log(login_email.value);
    fetch("http://127.0.0.1:8000/api/v1/auth/login", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text-plain, /",
        "X-Requested-With": "XMLHttpRequest",
      },

      method: "post",
      credentials: "same-origin",
      body: JSON.stringify({
        email: login_email.value,
        password: login_password.value,
      }),
    }).then((response) =>
      response
        .json()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then((res) => console.log(res.data))
    );
  }

  return (
    <div>
      <div>
        <input type="email" placeholder="email" id="login_email" />
        <input
          type="password"
          placeholder="password"
          id="login_password"
          autoComplete="on"
        />
        <Button
          text={"Login"}
          className={"login-btn"}
          onClick={() => {
            login();
          }}
        />
        <p className="goto-link">
          <Link to={"/signup"}>Create Account</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
