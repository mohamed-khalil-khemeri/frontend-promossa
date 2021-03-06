import React, { useEffect, useState } from "react";
import "./Article.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getCategorie } from "../actions/a_categorie";
import { getArticle, addArticle } from "../actions/a_article";

function Article(props) {
  useEffect(() => {
    props.getCategorie();
    props.getArticle();
  }, []);

  const [articlename, setarticlename] = useState("");
  const [logo, setlogo] = useState("");
  const [dosage, setdosage] = useState("");
  const [cat, setcat] = useState("");
  const [volume, setVolume] = useState("");
  return (
    <>
      Article
      <div className="categorieContainer">
        <form >
          <div>
            <input
              onChange={(e) => setarticlename(e.target.value)}
              type="txt"
              className=""
              name="articlename"
              id="articlename"
              placeholder="nom du l'article."
              autoFocus="1"
              required
            />
          </div>

          <div>
            <select
              onChange={(e) => setdosage(e.target.value)}
              className="myregselect"
              name="dosage"
              id="dosage"
              required
            >
              <option value="">Dosage:</option>
              <option value="gramme">Gramme</option>
              <option value="litre">Litre</option>
              <option value="piece">piece</option>
            </select>
          </div>
          <div>
            <input
              onChange={(e) => setVolume(e.target.value)}
              type="number"
              className=""
              name="volume"
              id="volume"
              placeholder="volume ou poid."
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => setlogo(e.target.files[0])}
              type="file"
              className=""
              name="image"
              id="image"
              placeholder="upload image."
              required
            />
          </div>
          <div>
            <select
              onChange={(e) => setcat(e.target.value)}
              className="myregselect"
              name="dosage"
              id="dosage"
              required
            >
              <option value="">select Categorie:</option>
              {props.catList ? (
                props.catList.map((e) => (
                  <option key={e._id} value={e._id}>
                    {e.name}
                  </option>
                ))
              ) : (
                <div>hi</div>
              )}
            </select>
          </div>
          <div>
            <button
              onClick={() => {
                if (articlename !== "" && logo !== "" && dosage !=="" && volume !== "" && cat !== "") {
                  props.addArticle({
                    name: articlename,
                    logo: logo,
                    dosage: dosage,
                    parent_id:cat,
                    quantity : volume
                  });
                }
              }}
              className=""
              name="Inserer"
              type="submit"
            >
              Inserer
            </button>
          </div>
        </form>

        <table key="id" className="order-table">
          <tr>
            <th>logo</th>
            <th>name</th>
            <th>quantity</th>
            <th>categorie</th>
            
          </tr>
          {props.articleList ? (
            props.articleList.map((e) => (
              <tr key={e.id}>
                <td
                  className="carted-img"
                  style={{ backgroundImage: `url( http://localhost:3002/${e.logo} )` }}
                ></td>
                <td>{e.name}</td>
                <td>{e.quantity}</td>
                <td>{e.parent_id}</td>
                
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

export default connect(
  (state) => {
    return {
      catList: state.r_categorie,
      articleList: state.r_article,
    };
  },
  { getCategorie, getArticle, addArticle }
)(Article);
