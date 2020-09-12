import React, { useEffect, useState } from "react";
import "./Login.css";
import { passReset1 } from "../actions/a_users";
//import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink } from "react-router-dom";
import logo from "../bou9.webp";

import { connect } from "react-redux";

function PassReset1(props) {
  let logInputs = {};
  const [email, setemail] = useState("");

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



  return (
    <>
      <div className="logContainer">
        <div className="mylogo">
          <h1>PROMOSSA</h1>
          <img src={logo} alt="logo" />
        </div>

        {/* <div className={props.notification.type == "success" ? "verifyEmail": ""} >{props.notification.type == "success" ? "Congratulations ! you are logged in  !" : ""}</div> */}

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
            <button
              onClick={() => {
                if (
                  controlM(logInputs.email) == true
                  
                ) {
                  props.passReset1(email);
                  window.location = "/";
                }
              }}
              className="submitbtn"
              name="login"
              type="submit"
            >Envoyer mon mot de passe</button>
          </div>
        </form>
        <div>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </>
  );
}

export default connect(
  (state) => {
    return {
      notification: state.r_login_notification,
      carted: state.r_cart,
      user: state.r_users,
    };
  },
  { passReset1 }
)(PassReset1);
