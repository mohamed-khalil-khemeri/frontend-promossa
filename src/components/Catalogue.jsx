import React, { useEffect, useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getMagasin } from "../actions/a_magasin";
import { addCatalogue, getCatalogue } from "../actions/a_catalogue";

function Catalogue(props) {
  useEffect(() => {
    props.getCatalogue();
    props.getMagasin();
  }, []);
  const [magname, setmagname] = useState("");
  const [cataname, setcataname] = useState("");
  const [debut, setdebut] = useState("");
  const [fin, setfin] = useState("");

  const period = (x, y) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const a = new Date(x);
    const b = new Date(y);
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY) + 1;
  };

  const period_timout = (x) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const a = new Date();
    const b = new Date(x);

    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    let p = (utc2 - utc1) / _MS_PER_DAY;

    if (p < 0) {
      return "expired";
    } else if (p == 0) {
      return p + 1;
    } else {
      return p + 1;
    }
  };

  return (
    <>
      catalogue
      <div className="categorieContainer">
        <form>
          <div>
            <select
              onChange={(e) => {
                setmagname(JSON.parse(e.target.value))
              }}
              className="myregselect"
              name="dosage"
              id="dosage"
              required
            >
              <option value="">select Magasin:</option>
              {props.magList ? (
                props.magList.map((e) => (
                  <option
                    key={e._id}
                    value={JSON.stringify({
                      e,
                    })}
                  >
                    {e.name}
                  </option>
                ))
              ) : (
                <div>hi</div>
              )}
            </select>
          </div>
          <div>
            <input
              onChange={(e) => setcataname(e.target.value)}
              type="txt"
              className=""
              name="catname"
              id="catname"
              placeholder="nom du catalogue."
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => setdebut(e.target.value)}
              type="date"
              className=""
              name="date1"
              id="birthday"
              placeholder="Date de debut"
              aria-label="Date de naissance"
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => setfin(e.target.value)}
              type="date"
              className=""
              name="date2"
              id="birthday"
              placeholder="Date de fin"
              aria-label="Date de naissance"
              required
            />
          </div>
          <div>
            <button
              onClick={() => {
                if (
                  magname !== "" &&
                  cataname !== "" &&
                  debut !== "" &&
                  fin !== ""
                ) {
                  props.addCatalogue({
                    name: cataname,
                    magasin: {
                      name: magname.e.name,
                      logo: magname.e.logo,
                      _id: magname.e._id,
                    },
                    period: { debut: debut, fin: fin },
                    promoList: [],
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

        <table className="order-table">
          <tr>
            <th>logo</th>
            <th>magasin</th>
            <th>nom</th>
            <th>debut</th>
            <th>fin</th>
            <th>periode</th>
            <th>jours jusqu'à la fin de la promo</th>
            <th>ajout promos</th>
            <th>View promo List</th>
          </tr>
          {props.cataList ? (
            props.cataList.map((e) => (
              <tr key={e._id}>
                {e.magasin ? (
                  <>
                    {" "}
                    <td
                      className="carted-img"
                      style={{
                        backgroundImage: `url(http://localhost:3002/${e.magasin.logo} )`,
                      }}
                    ></td>
                    <td>{e.magasin.name}</td>
                  </>
                ) : null}
                <td>{e.name}</td>
                <td>{e.period.debut}</td>
                <td>{e.period.fin}</td>
                <td>{period(e.period.debut, e.period.fin)} jours</td>
                <td>{period_timout(e.period.fin)}</td>
                <td>
                  <NavLink
                    exact
                    to={{ pathname: `/catarefill/${e._id}` }}
                    className="normal-sidebar"
                    activeClassName="active-sidebar"
                  >
                    ajout promo
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    exact
                    to={{ pathname: `/CatalogueList/${e._id}` }}
                    className="normal-sidebar"
                    activeClassName="active-sidebar"
                  >
                    View promo List
                  </NavLink>
                </td>
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
      cataList: state.r_catalogue,
    };
  },
  { getMagasin, addCatalogue, getCatalogue }
)(Catalogue);
