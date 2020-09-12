import React, { useEffect, useState } from "react";
import "./Login.css";
import { passReset2 } from "../actions/a_users";
//import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink, useParams } from "react-router-dom";
import logo from "../bou9.webp";

import { connect } from "react-redux";

function PassReset2(props) {
  let logInputs = {};
  let { token,_id } = useParams();

  const [password, setpassword] = useState("");

  /*--------------------------------control Email with regex------------------------------------------- */


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
        <div
          className={
            props.notification.type == "error" ? "register_notification" : ""
          }
        >
          {props.notification.type == "error" ? props.notification.payload : ""}
        </div>
        {/* <div className={props.notification.type == "success" ? "verifyEmail": ""} >{props.notification.type == "success" ? "Congratulations ! you are logged in  !" : ""}</div> */}

        <form onSubmit={(e) => e.preventDefault()}>

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
                  controlP(logInputs.password) == true
                ) {
             
                  props.passReset2(password, token ,_id);
                }
              }}
              disabled={props.notification.block}
              className="submitbtn"
              name="login"
              type="submit"
            >
              Connexion{" "}
              <div
                className={props.notification.block == true ? "loader" : ""}
              ></div>
            </button>
          </div>
        </form>

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
  { passReset2 }
)(PassReset2);
