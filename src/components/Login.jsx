import React, { useEffect, useState } from "react";
import "./Login.css";
import { loginUser } from "../actions/a_current_user";
//import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink } from "react-router-dom";
import logo from "../bou9.webp";

import { connect } from "react-redux";

function Login(props) {
  let logInputs = {};
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  /*--------------------------------control Email with regex------------------------------------------- */

  function controlM(x) {
    const patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (patt.test(x.value) == false) {
      x.style.color = "red";
      x.value = "please enter a valid Email adress !";
      setTimeout(() => {
        x.value = "";
        x.style.color = "black";
        x.placeholder = "please enter a valid Email adress !";
      }, 1000);
    }
    return patt.test(x.value);
  }

  function controlP(z) {
    const pattx = /^\w{8}$/;
    if (pattx.test(z.value) == false) {
      z.value = "";
      z.type = "email";
      z.style.color = "red";
      z.value = "password must be 8 characters !";
      setTimeout(() => {
        z.value = "";
        z.type = "password";
        z.style.color = "black";
        z.placeholder = "password must be 8 characters !";
      }, 1000);
    }
    return pattx.test(z.value);
  }

  return (
    <>
      <div className="logContainer">
        <div className="mylogo">
          <h1>PROMOSSA</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className={props.notification.type == "error" ? "register_notification": ""} >{props.notification.type == "error" ? props.notification.payload : ""}</div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              ref={(e) => (logInputs.email = e)}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              className=""
              name="email"
              id="email"
              placeholder="Adresse e-mail."
              autofocus="1"
              aria-label="Adresse e-mail ou numéro de tél."
              required
            />
          </div>

          <div>
            <input
              ref={(e) => (logInputs.password = e)}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              className=""
              name="pass"
              id="pass"
              placeholder="Mot de passe"
              aria-label="Mot de passe"
              required
            />
          </div>
          <div>
            <button
              onClick={() => {
                if (
                  // email !== "" &&
                  // password !== "" &&
                  controlM(logInputs.email) == true &&
                  controlP(logInputs.password) == true
                ) {
                  props.loginUser({
                    email: email,
                    password: password,
                  });
                }
              }}
              disabled={props.notification.block}
              className="submitbtn"
              name="login"
              type="submit"
            >
              Connexion  <div
                className={props.notification.block == true ? "loader" : ""}
              ></div>
            </button>
          </div>
        </form>
        <div>
          <NavLink to="/register">S’inscrire ici</NavLink>
        </div>
      </div>
    </>
  );
}

export default connect((state) => {
  return {
    notification: state.r_login_notification,
    carted: state.r_cart,
    user: state.r_users,
  };
}, {loginUser})(Login);
