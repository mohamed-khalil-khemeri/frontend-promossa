import React, { useEffect, useState } from "react";
import "./Catarefill.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

function Categorie(props) {
  return (
    <>
Cata refill
      <div className="categorieContainer">
      <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="txt"
              className=""
              name="catname"
              id="catname"
              placeholder="nom du categorie."
              autofocus="1"
              required
            />
          </div>

          <div>
            <input
              type="txt"
              className=""
              name="parentname"
              id="parentname"
              placeholder="nom du categorie parent, 0 si pas de parent"
              required
            />
          </div>
          <div>
            <input
              type="txt"
              className=""
              name="parentname"
              id="parentname"
              placeholder="nom du categorie parent, 0 si pas de parent"
              required
            />
          </div>
          <div>
            <input
              type="txt"
              className=""
              name="parentname"
              id="parentname"
              placeholder="nom du categorie parent, 0 si pas de parent"
              required
            />
          </div>
          <div>
            <input
              type="txt"
              className=""
              name="parentname"
              id="parentname"
              placeholder="nom du categorie parent, 0 si pas de parent"
              required
            />
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
}, {})(Categorie);
