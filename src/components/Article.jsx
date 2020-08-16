import React, { useEffect, useState } from "react";
import "./Article.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

function Article(props) {
  return (
    <>
Article
      <div className="categorieContainer">
      <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="txt"
              className=""
              name="articlename"
              id="articlename"
              placeholder="nom du l'article."
              autofocus="1"
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
            <input
              type="txt"
              className=""
              name="categorie"
              id="categorie"
              placeholder="categorie."
              
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
}, {})(Article);
