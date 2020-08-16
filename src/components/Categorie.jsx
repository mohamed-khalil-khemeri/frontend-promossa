import React, { useEffect, useState } from "react";
import "./Categorie.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import {addCategorie, getCategorie} from "../actions/a_categorie"

function Categorie(props) {
  useEffect(() => {
    props.getCategorie();
  }, []);
  const [catname, setcatname] = useState("");
  const [parent, setparent] = useState("");
  const [logo, setlogo] = useState("");
  return (
    <>
Categorie
      <div className="categorieContainer">
      <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
            onChange={(e) => setcatname(e.target.value)}
              type="txt"
              className=""
              name="catname"
              id="catname"
              placeholder="nom du categorie."
              autoFocus="1"
              required
            />
          </div>

          <div>
            <input
            onChange={(e) => setparent(e.target.value)}

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
            onChange={(e) => setlogo(e.target.value)}
              type="txt"
              className=""
              name="image"
              id="image"
              placeholder="lien du l'image."
              required
              
            />
          </div>
          <div>
            <button onClick={() => {if((catname !== "")&&(parent !== "")&&(logo !== "")) { props.addCategorie({ nom: catname,parent : parent, logo: logo })}}}
               className="" name="Inserer" type="submit">
              Inserer
            </button>
          </div>
        </form>

        <table className="order-table">
          <tr>
            <th>logo</th>
            <th>nom</th>
            <th>parent</th>
            <th>lien du logo</th>
          </tr>
          {props.catList ? (
            props.catList.map((e) => (
              <tr key={e.id}>
                <td
                  className="carted-img"
                  style={{ backgroundImage: `url( ${e.logo} )` }}
                  ></td>
                  <td>{e.nom}</td>
                  <td>{e.parent}</td>
                  <td>{e.logo}</td>
              </tr>
            ))
          ) : (
            <div>hi</div>
          )}
        </table>
     
        

      </div>
    </>
  );
}

export default connect((state) => {
  return {
    catList: state.r_categorie,
  };
}, {getCategorie, addCategorie})(Categorie);
