import React, { Component } from "react";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {};
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
