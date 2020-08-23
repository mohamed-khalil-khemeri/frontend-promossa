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
        enlever du cart
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
         ajouter au cart  {" "}
        </button>
      );
    }
  };

  return (
    <div className="card-container">

        {props.categorie
        .filter((e) => e.parent_id === categorieId)//categorie by parent
        .map((e) => (
          <div key={e._id} className="card">
              <NavLink exact to={"/shop/"+e._id}  >
            <div
              className="image"
              style={{ backgroundImage: `url( http://localhost:3002/${e.logo} )` }}
            ></div></NavLink>
            <div className="card-text">
              <h4>{e.name}</h4>
              
            </div>
            
          </div>
        ))}
        
      {active_article_list
        .filter((e) => e.article.parent_id == categorieId)//article by parent
        .map((e) => (
          <div key={e._id} className="card">
            <div
              className="image"
              style={{ backgroundImage: `url( http://localhost:3002/${e.article.logo} )` }}
            ></div>
            <div className="card-text">
              <h4>{e.article.name}</h4>
              <h4>{` ${e.pricing.newprice} tnd`}</h4>
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
