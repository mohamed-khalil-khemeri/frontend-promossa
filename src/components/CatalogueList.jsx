import React, { useEffect, useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCatalogue } from "../actions/a_catalogue";

function CatalogueList(props) {
  useEffect(() => {
    props.getCatalogue();
  }, []);

  const { cataid } = useParams();
  let products = "";

  if (props.cataList) {
    if (props.cataList.filter((el) => el.id == cataid)[0]) {
      console.log("catalist : ", props.cataList);
        console.log("cataid : ", cataid);
        products = props.cataList.filter((el) => el.id == cataid)[0]
          .promoList;
        console.log("products : ", products);
    }
  }

  return (
    <>
      catalogue List
      <table className="order-table">
        <tr>
          <th>logo</th>
          <th>nom</th>
          <th>vol/poid</th>
          <th>promo type</th>
          <th>parameters</th>
          <th>ancient price</th>
          <th>new price</th>
        </tr>
        {products ? (
          products.map((e) => (
            <tr>
              <td
                className="carted-img"
                style={{
                  backgroundImage: `url( ${e.article.logo} )`,
                }}
              ></td>
              <td>{e.article.nom}</td>
              <td>{e.article.volume}</td>
              <td>{e.promo.type}</td>
              <td>{JSON.stringify(e.promo)}</td>
              <td>{e.pricing.ancientprice}</td>
              <td>{e.pricing.newprice}</td>
            </tr>
          ))
        ) : (
          <div>hi1</div>
        )}
      </table>
    </>
  );
}

export default connect(
  (state) => {
    return {
      cataList: state.r_catalogue,
    };
  },
  { getCatalogue }
)(CatalogueList);
