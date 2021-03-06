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

  const favHome = ["5f42ce5118c5ea5b19c9c181"];

  const [searchcat, setsearchcat] = useState("");
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
              src="http://localhost:3002/public_img/promossanew.png"
              alt="logo"
              width="350px"
            />
          </div>
        </div>
        <div className="home-page-search">
          <div className="search-inputs">
            <input
              onChange={(e) => 
                {setsearchcat(e.target.value)}}
              type="text"
              placeholder="trouver la categorie du votre article exp : thon , hrissa"
            />
            <ul>
              {searchcat !== ""
                ? props.catList
                    .filter((e) => {let patt = new RegExp(searchcat, 'gi'); return e.name.match(patt)})
                    // .filter((e) => (e.name).toLocaleLowerCase() == (searchcat).toLocaleLowerCase())
                    .map((e) => <NavLink to={"/shop/"+e._id}><li key={e._id}>{e.name}</li></NavLink>    )
                : null}
            </ul>
          </div>
        </div>
        <div className="home-page-featured-categories">
          {props.catList
            ? props.catList
                .filter((el) => favHome.includes(el._id))
                .map((el) => (
                  <div>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      exact
                      to={"/shop/" + el._id}
                    >
                      <h3>{el.name}</h3>
                    </NavLink>
                    <div className="cards-carousel">
                      {props.catList
                        .filter((ell) => ell.parent_id == el._id)
                        .map((e) => (
                          <div key={e._id} className="card">
                            <NavLink
                              style={{ textDecoration: "none", color: "black" }}
                              exact
                              to={"/shop/" + e._id}
                            >
                              <div
                                className="image"
                                style={{
                                  backgroundImage: `url( http://localhost:3002/${e.logo} )`,
                                }}
                              ></div>
                              <div className="card-text">
                                <h4>{e.name}</h4>
                              </div>
                            </NavLink>
                          </div>
                        ))}
                    </div>
                  </div>
                ))
            : null}
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
