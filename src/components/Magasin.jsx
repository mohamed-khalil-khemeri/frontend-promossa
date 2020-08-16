import React, { useEffect, useState } from "react";
import "./Magasin.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addMagasin, getMagasin } from "../actions/a_magasin";

function Magasin(props) {
  useEffect(() => {
    props.getMagasin();
  }, []);
  const [magname, setmagname] = useState("");
  const [logo, setlogo] = useState("");
  return (
    <>
      Magasin
      <div className="categorieContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="txt"
              className=""
              name="magname"
              id="magname"
              placeholder="nom du magasin."
              onChange={(e) => setmagname(e.target.value)}
              autoFocus="1"
              required
            />
          </div>
          <div>
            <input
              type="txt"
              className=""
              name="logo"
              id="logo"
              placeholder="lien du logo."
              onChange={(e) => setlogo(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              onClick={() => props.addMagasin({ nom: magname, logo: logo })}
              className=""
              name="Inserer"
              type="submit"
            >
              Inserer
            </button>
          </div>
        </form>
        <table className="order-table">
          <tr>
            <th>logo</th>
            <th>nom</th>
            <th>lien du logo</th>
          </tr>
          {props.magList ? (
            props.magList.map((e) => (
              <tr key={e.id}>
                <td
                  className="carted-img"
                  style={{ backgroundImage: `url( ${e.logo} )` }}
                  ></td>
                  <td>{e.nom}</td>
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

export default connect(
  (state) => {
    return {
      magList: state.r_magasin,
    };
  },
  { addMagasin, getMagasin }
)(Magasin);
