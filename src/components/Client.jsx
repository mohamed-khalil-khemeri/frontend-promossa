import React, { useEffect, useState } from "react";
import "./Client.css";
import { getCategorie } from "../actions/a_categorie";
import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink, useParams } from "react-router-dom";

import { connect } from "react-redux";

function Client(props) {
  useEffect(() => {
    props.getCategorie();
  }, []);

  let { categorieId } = useParams();
  console.log("categorieId : ",categorieId);

//   const getCategorieName = () => {
//     return props.categorie.filter(e=> e.id == categorieId).nom  
//   }


  //const [filter_key, set_filter_key] = useState("active");

  let active_article_list = [...props.active_article_list];

  const cartAddBtn = (e) => {
    if (props.carted.map((a) => a.id).includes(e.id) === true) {
      return (
        <button
          className="carted"
          onClick={(a) => {
            props.removeFromCart(e.id);
          }}
        >
          إحذف من السلة
        </button>
      );
    } else {
      return (
        <button
          className="notCarted"
          onClick={(a) => {
            props.addToCart(e);
          }}
        >
          {" "}
          أضف إلى سلة المشتريات{" "}
        </button>
      );
    }
  };

  return (
    <div className="card-container">

        {props.categorie
        .filter((e) => e.parent === categorieId)//categorie by parent
        .map((e) => (
          <div key={e.id} className="card">
              <NavLink exact to={"/shop/"+e.nom}  >
            <div
              className="image"
              style={{ backgroundImage: `url( ${e.logo} )` }}
            ></div></NavLink>
            <div className="card-text">
              <h4>{e.nom}</h4>
              <h4>{` ${e.parent} دينار`}</h4>
            </div>
            {cartAddBtn(e)}
          </div>
        ))}
        
      {active_article_list
        .filter((e) => e.article.cat === categorieId)//article by parent
        .map((e) => (
          <div key={e.id} className="card">
            <div
              className="image"
              style={{ backgroundImage: `url( ${e.article.logo} )` }}
            ></div>
            <div className="card-text">
              <h4>{e.article.nom}</h4>
              <h4>{` ${e.pricing.newprice} دينار`}</h4>
            </div>
            {cartAddBtn(e)}
          </div>
        ))}
    </div>
  );
}

export default connect(
  (state) => {
    return {
      categorie: state.r_categorie,
      active_article_list: state.r_active_article_list,

      carted: state.r_cart,
      user: state.r_users,

    };
  },
  { getCategorie, addToCart, removeFromCart }
)(Client);
