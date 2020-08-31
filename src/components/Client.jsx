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
  console.log("categorieId : ", categorieId);

  //   const getCategorieName = () => {
  //     return props.categorie.filter(e=> e.id == categorieId).nom
  //   }

  //const [filter_key, set_filter_key] = useState("active");

  let active_article_list = [...props.active_article_list];

  const cartAddBtn = (e) => {
    if (props.carted.map((a) => a._id).includes(e._id) === true) {
      return (
        <button
          className="carted"
          onClick={(a) => {
            props.removeFromCart(e._id);
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
            console.log("e : ", e);
          }}
        >
          {" "}
          ajouter au cart{" "}
        </button>
      );
    }
  };

  return (
    <div className="card-container">
      {props.categorie
        .filter((e) => e.parent_id === categorieId) //categorie by parent
        .map((e) => (
          <div key={e._id} className="card">
            <NavLink  style={{ textDecoration: "none",color:"black"}} exact to={"/shop/" + e._id}>
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

      {/* {active_article_list
        .filter((e) => e.article.parent_id == categorieId) //article by parent
        .map((e) => {
          e.article.unity = (e.pricing.newprice * 1) / (e.article.quantity * 1);
          return e;
        })
        .sort(function (a, b) {
          return a.article.unity - b.article.unity;
        })
        .map((e) => (
          <div key={e._id} className="card">
            <div
              className="image"
              style={{
                backgroundImage: `url( http://localhost:3002/${e.article.logo} )`,
              }}
            ></div>
            <div className="card-text">
              <h4>{e.article.name}</h4>
              <h4>{` ${e.pricing.newprice} tnd`}</h4>
            </div>
            {cartAddBtn(e)}
          </div>
        ))} */}

      {/* ancien article affichage */}
      {/* {active_article_list.filter((e) => e.article.parent_id == categorieId)
        .length !== 0 ? (
        <table className="order-table">
          <tr>
            <th>prix du 1 g</th>
            <th>logo</th>
            <th>nom article</th>
            <th>prix</th>
            <th>fin promo</th>
          </tr>
          {active_article_list
            .filter((e) => e.article.parent_id == categorieId) //article by parent
            .map((e) => {
              e.article.unity =
                (e.pricing.newprice * 1) / (e.article.quantity * 1);
              return e;
            })
            .sort(function (a, b) {
              return a.article.unity - b.article.unity;
            })
            .map((e) => (
              <tr>
                <td>{e.article.unity}</td>
                <td>
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url( http://localhost:3002/${e.article.logo} )`,
                    }}
                  ></div>
                </td>
                <td>
                  <div key={e._id} className="card special">
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url( http://localhost:3002/${e.article.logo} )`,
                      }}
                    ></div>
                    <div className="card-text">
                      <h4>{`Magasin : ${e.magasin.name}`}</h4>
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url( http://localhost:3002/${e.magasin.logo} )`,
                        }}
                      ></div>
                      <h4>{`fin promo : ${e.period.fin}`}</h4>
                    </div>
                    {cartAddBtn(e)}
                  </div>
                </td>
                <td>
                  <p>{e.article.name}</p>
                </td>
                <td>
                  <p>{`${e.pricing.newprice} `}</p>
                </td>
                <td>
                  <p>{e.period.fin}</p>
                </td>
              </tr>
            ))}
        </table>
      ) : null} */}

      {/* new table from carted section */}
      {active_article_list.filter((e) => e.article.parent_id == categorieId)
        .length !== 0 ? (
        <table className="carted-table">
          <tr>
            <th>prix du 1 g</th>
            <th>صورة الطبق</th>
            <th>الطبق</th>
            <th>سعر الطبق الواحد</th>
            <th>ثمن أطباق</th>
            <th>حذف الطبق</th>
          </tr>
          {active_article_list
            .filter((e) => e.article.parent_id == categorieId) //article by parent
            .map((e) => {
              e.article.unity =
                (e.pricing.newprice * 1) / (e.article.quantity * 1);
              return e;
            })
            .sort(function (a, b) {
              return a.article.unity - b.article.unity;
            })
            .map((e) => (
              <tr key={e._id}>
                <td>{e.article.unity.toFixed(2)}</td>
                <td className="white-back"> 
                  <div className="carted-img"
                  style={{
                    backgroundImage: `url( http://localhost:3002/${e.article.logo} )`,
                  }}>
                  <span className="promo-span">{e.promo.type == "SIMPLE_PERCENTAGE" ?
                  e.promo.pourcentage + "%" : e.promo.type == "BUY_X_GET_Y_FREE" ?
                   e.promo.buy_x + "+" + e.promo.y_free + "gratuit":e.promo.type == "EXTRA_QUANTITY" ?
                  "extra " + e.promo.extra : null }</span>
                  <img
                    className="magasin-img"
                    src= {`http://localhost:3002/${e.magasin.logo}`}
                    alt="magasin"
                  />
                  </div>
                   
                </td>
                <td>{e.article.name}</td>
                <td>
                  {e.pricing.newprice.replace(/(\d)(?=(\d{3})+$)/g, "$1 ")}
                </td>
                <td>{e.period.fin}</td>
                <td>{cartAddBtn(e)}</td>
              </tr>
            ))}
        </table>
      ) : null}
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
