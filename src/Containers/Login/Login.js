import React, { Component } from "react";
import "./Login.css";
import { Link, Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "@/Store/actions";
import { BASEURL } from "@/Constants/baseURL";
import LoginFacebook from "./LoginFacebook";

const initialState = {
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  incorrectData: "",
};

const emailFormat = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  validateEmail = () => {
    let email = this.state.email;
    let emailError = "";
    let proceedemail = true;
    if (email.length === 0) {
      emailError = "Please enter your Spotify username or email address.";
      this.setState({ emailError });
      if (document.querySelector("#email-input")) {
        document.querySelector("#email-input").classList.add("red-border");
      }
      proceedemail = false;
    } else {
      emailError = "";
      this.setState({ email, emailError });
      if (document.querySelector("#email-input")) {
        document.querySelector("#email-input").classList.remove("red-border");
      }
      proceedemail = true;
    }
    return proceedemail;
  };

  validatePassword = () => {
    let password = this.state.password;
    let passwordError = "";
    let proceedpassword = true;
    if (password.length === 0) {
      passwordError = "Please enter your password.";
      this.setState({ passwordError });
      if (document.querySelector("#password-input")) {
        document.querySelector("#password-input").classList.add("red-border");
      }
      proceedpassword = false;
    } else {
      passwordError = "";
      this.setState({ password, passwordError });
      if (document.querySelector("#password-input")) {
        document
          .querySelector("#password-input")
          .classList.remove("red-border");
      }

      proceedpassword = true;
    }
    return proceedpassword;
  };

  handleEmail = (event) => {
    let email = this.state.email;
    email = event.target.value;
    this.state.email = email;
    this.validateEmail();
  };
  handlePassword = (event) => {
    let pass = this.state.password;
    pass = event.target.value;
    this.state.password = pass;
    this.validatePassword();
  };

  facebook = (event) => <LoginFacebook />;

  clickSubmit = (event) => {
    let incorrectData = "";
    let email = this.state.email;
    let emailError = this.state.emailError;
    let password = this.state.password;
    if (event) {
      event.preventDefault();
    }
    // console.log(email.length);
    this.validateEmail();
    this.validatePassword();
    if (!emailFormat.test(email) && email.length !== 0) {
      emailError = "The email address is invalid.";
      if (document.querySelector("#email-input")) {
        document.querySelector("#email-input").classList.add("red-border");
      }
      this.setState({ emailError });
    } else if (this.validateEmail() && this.validatePassword()) {
      this.setState({ initialState });
      //  console.log(email.length);
      //  var clr= document.querySelector("#Login-form");
      //  clr.reset();
      //  let returnedData={
      //   id: 1,
      //   token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjOTk1MDE0NGQ5NDA0MzliNDU4NTkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2Mjc4MjQ3fQ.oC1SvSyACTq3GxB-GNOgXOCvsBKY-VzDZErnyDROgsE"
      // }

      // const requestOptions = {
      //       method:"POST",
      //       headers: { 'x-auth' : 'eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s',
      //     'email': this.state.email, 'password':this.state.password }
      //     }
      //     console.log(this.state.email + this.state.password)
      //     const url = BASEURL + "users/Login";

      // headers: { 'Access-Control-Expose-Headers': 'x-auth','Content-Type': 'application/json','x-auth' : 'eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s'},
      // body: JSON.stringify({ email: "ayaelsackaan.1999@gmail.com" ,password: "111" })
      //  ******** const requestOptions = {
      //     method:"POST",
      //     headers: { 'Content-Type': 'application/json','x-auth' : 'eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s'},
      //     body: JSON.stringify({ email: this.state.email ,password: this.state.password })
      //   }
      //   // console.log(this.state.email + this.state.password)
      //   const url = BASEURL + "users/Login"
      //     fetch(url,requestOptions)
      //       .then((response) => {
      //         console.log(response.status)
      //         if(response.status===401){
      //           console.log("incorrect username or password")
      //           return "icorrect";
      //         }
      //         else if(response.status===200){
      //           console.log("response is ok")
      //           return response.headers.get("x-auth")
      //         }
      //       })
      //       .then((data) => {
      //         console.log(data);

      //         if(data==="icorrect"){

      //           document.querySelector(".incorrect").classList.remove("d-none");
      //           incorrectData= "Incorrect username or password.";
      //           this.setState({incorrectData});
      //           console.log("incorrect username or password")

      //         }
      //         else{
      //           this.props.onSignIn(data);
      //           this.props.history.replace('/account/');
      //         }

      //       })
      //       .catch((error)=>{
      //         console.log(error);
      //       })
    }
  };

  render() {
    return (
      <div className="login">
        <div id="logo"></div>

        <div className="container">
          <p className="first-line">To continue, log in to Spotify.</p>
          <p className="incorrect d-none">{this.state.incorrectData}</p>
          <a
            id="facebook-button"
            className=" buttons btn btn-block btn-facebook"
            href="#"
            role="button"
            onClick={this.facebook}
          >
            <i className="fab fa-facebook logo" aria-hidden="true"></i> Continue
            With Facebook
          </a>

          <div className="horizontal">
            <span className="horizontal-span">OR</span>
          </div>

          <form id="login-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control "
                id="email-input"
                aria-describedby="emailHelp"
                placeholder="Email adrress or username"
                onChange={this.handleEmail}
                name="email"
              />
              <p id="missing-email">{this.state.emailError}</p>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control "
                id="password-input"
                placeholder="Password"
                onChange={this.handlePassword}
                name="password"
              />
              <p id="missing-password">{this.state.passwordError}</p>
            </div>

            <div className="form-group form-check">
              <div className="custom-control custom-checkbox">
                <button
                  id="login-button"
                  type="submit"
                  className="buttons btn btn-success"
                  onClick={this.clickSubmit}
                >
                  LOG IN
                </button>
              </div>
            </div>
          </form>

          <br />

          <Link to="/Login/forgotpassword" className="password-forgot">
            Forgot your password?
          </Link>

          <br />

          <hr className="horizontal-line-bottom1" />

          <h4 className="dont-have-account">Don't have an account?</h4>
          <a
            id="signup-button"
            className="buttons btn btn-block btn-apple"
            href="/signup"
            role="button"
          >
            Sign up for spotify
          </a>

          <br />

          <hr className="horizontal-line-bottom2" />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (userToken) =>
      dispatch({ type: actionTypes.ON_SIGNIN, payload: { token: userToken } }),
  };
};

export default connect(null, mapDispatchToProps)(Login);
