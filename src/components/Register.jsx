import React, { useEffect, useState } from "react";
import "./Register.css";
import { getDishes } from "../actions/a_dishes";
import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink } from "react-router-dom";
import logo from "../bou9.webp";

import { connect } from "react-redux";

function Dishes(props) {
  useEffect(() => {
    props.getDishes();
  }, []);

  const [filter_key, set_filter_key] = useState("active");

  let menu = [...props.dishesList];
  return (
    <>
      <div className="regContainer">
        <div className="mylogo">
          <h1>PROMOSSA</h1>
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input
            type="email"
            className=""
            name="email"
            id="email"
            placeholder="Adresse e-mail ou numéro de tél."
            autofocus="1"
            aria-label="Adresse e-mail ou numéro de tél."
            required
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
            required
          />
        </div>
        <div>
          <input
            type="date"
            className=""
            name="birthday"
            id="birthday"
            placeholder="Date de naissance"
            aria-label="Date de naissance"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className=""
            name="adress"
            id="adress"
            placeholder="Adresse"
            aria-label="Adresse"
            required
          />
        </div>
        <div>
          <select className="myregselect" name="gender" id="gender" required>
            <option value="">Quel est votre genre:</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
        </div>
        <div>
        {/* onClick={(e)=>e.preventDefault()} */}
          <button className="" name="login" type="submit" >
            S’inscrire
          </button>
        </div>
        </form>
        <div>
          <NavLink to="/login">Login ici</NavLink>
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
)(Dishes);
