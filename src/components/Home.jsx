import React, { useEffect, useState } from "react";
import "./Home.css";
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
    <div className="home-page">
      <div className="home-page-inner">
        <div className="home-page-section ">
          <div className="home-logo">
            <img
              src="https://cdn.worldvectorlogo.com/logos/netto-marken-discount-2018.svg"
              alt="logo"
              width="200px"
            />
          </div>
        </div>
        <div className="home-page-search">
          <div className="search-inputs">
            <input type="text" placeholder="search in different categorie" />
            <ul>
              <li>result 1</li>
              <li>result 2</li>
              <li>result 2</li>
            </ul>
          </div>
          <button type="submit">Search</button>
        </div>
        <div className="home-page-featured-categories">
            {props.catList ? props.catList.filter(e=>e.parent_id == "0").map(e=>
          <div>
            <h3>{e.name}</h3>
  <div>{props.catList.filter(el=>el.parent_id == e._id).map(el=>el.name)}</div>
          </div>
          ) : null}
        </div>
      </div>
    </div>
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
