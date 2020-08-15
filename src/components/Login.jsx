import React, { useEffect, useState } from "react";
import "./Login.css";
import { getDishes } from "../actions/a_dishes";
import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink } from "react-router-dom";
import logo from "../bou9.webp";

import { connect } from "react-redux";

function Login(props) {

  return (
    <>
      <div className="logContainer">
        <div className="mylogo">
          <h1>PROMOSSA</h1>
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="email"
              className=""
              name="email"
              id="email"
              placeholder="Adresse e-mail ou numéro de tél."
              autofocus="1"
              aria-label="Adresse e-mail ou numéro de tél."
            />
          </div>

          <div>
            <input
              type="password"
              className=""
              name="pass"
              id="pass"
              placeholder="Mot de passe"
              aria-label="Mot de passe"
            />
          </div>
          <div>
            <button className="" name="login" type="submit">
              Connexion
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

export default connect(
  (state) => {
    return {
      dishesList: state.r_dishes,
      carted: state.r_cart,
      user: state.r_users,
    };
  },
  { getDishes, addToCart, removeFromCart }
)(Login);
