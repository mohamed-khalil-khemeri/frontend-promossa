import React, { useEffect, useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

function Catalogue(props) {
  return (
    <>
      catalogue
      <div className="categorieContainer">
        <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <select className="myregselect" name="dosage" id="dosage" required>
              <option value="">nom du magasin:</option>
              <option value="gramme">aziza</option>
              <option value="litre">mg</option>
              <option value="piece">mpx</option>
            </select>
          </div>
          <div>
            <input
              type="txt"
              className=""
              name="magname"
              id="articlename"
              placeholder="nom du magasin."
              autofocus="1"
            />
          </div>
          <div>
            <input
              type="txt"
              className=""
              name="articlename"
              id="articlename"
              placeholder="nom du catalogue."
              required  
            />
          </div>
          <div>
            <input
              type="date"
              className=""
              name="date1"
              id="birthday"
              placeholder="Date de debut"
              aria-label="Date de naissance"
              required
            />
          </div>
          <div>
            <input
              type="date"
              className=""
              name="date2"
              id="birthday"
              placeholder="Date de fin"
              aria-label="Date de naissance"
              required
            />
          </div>

          <div>
            <select className="myregselect" name="dosage" id="dosage" required>
              <option value="">Dosage:</option>
              <option value="gramme">Gramme</option>
              <option value="litre">Litre</option>
              <option value="piece">piece</option>
            </select>
          </div>
          <div>
            <input
              type="txt"
              className=""
              name="image"
              id="image"
              placeholder="lien du l'image."
            />
          </div>
          <div>
            <button className="" name="Inserer" type="submit">
              Inserer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default connect((state) => {
  return {
    dishesList: state.r_dishes,
    carted: state.r_cart,
    user: state.r_users,
  };
}, {})(Catalogue);
