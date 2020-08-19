import React, { useEffect, useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getMagasin } from "../actions/a_magasin";
import { addArticleToCatalogue, getCatalogue } from "../actions/a_catalogue";
import { getCategorie } from "../actions/a_categorie";
import { getArticle } from "../actions/a_article";

function Catarefill(props) {
  useEffect(() => {
    props.getCatalogue();
    props.getCategorie();
    props.getArticle();
  }, []);

  let promoTypes = [
    { id: 1, type: "SIMPLE_PERCENTAGE", parameter: ["pourcentage"] },
    { id: 2, type: "EXTRA_QUANTITY", parameter: ["extra"] },
    { id: 3, type: "BUY_X_GET_Y_FREE", parameter: ["buy_x", "y_free"] },
  ];
  const [pourcentage, setpourcentage] = useState("");
  const [extra, setextra] = useState("");
  const [buy_x, setbuy_x] = useState("");
  const [y_free, sety_free] = useState("");

  const get_promo = () => {
    switch (promotype) {
      case "SIMPLE_PERCENTAGE":
        return { type: "SIMPLE_PERCENTAGE", pourcentage: pourcentage };
        break;
      case "EXTRA_QUANTITY":
        return { type: "EXTRA_QUANTITY", extra: extra };
        break;
      case "BUY_X_GET_Y_FREE":
        return { type: "BUY_X_GET_Y_FREE", buy_x: buy_x, y_free: y_free };
        break;

      default:
        break;
    }
  };

  const handleChange = (x, y) => {
    switch (y) {
      case "pourcentage":
        return setpourcentage(x), console.log("state : ", pourcentage);
        break;
      case "extra":
        return setextra(x);
        break;
      case "buy_x":
        return setbuy_x(x);
        break;
      case "y_free":
        return sety_free(x);
        break;

      default:
        break;
    }
  };

  const handleExistence = (x) => {
    switch (x) {
      case "SIMPLE_PERCENTAGE":
        return pourcentage !== "";
        break;
      case "EXTRA_QUANTITY":
        return extra !== "";
        break;
      case "BUY_X_GET_Y_FREE":
        return buy_x !== "" && y_free !== "";
        break;

      default:
        break;
    }
  };

  let { cataid } = useParams();
  // console.log("id catalogue : ",cataid);
  const [parent, setparent] = useState("");
  const [catname, setcatname] = useState("");
  const [percentage, setpercentage] = useState("");
  const [ancientprice, setancientprice] = useState("");
  const [newprice, setnewprice] = useState("");
  const [article, setarticle] = useState("");
  const [articleid, setarticleid] = useState("");
  const [promotype, setpromotype] = useState("");
  const [cataname, setcataname] = useState("");
  const [debut, setdebut] = useState("");
  const [fin, setfin] = useState("");

  const get_article = () => {
    if (props.articleList && article.arId) {
      return props.articleList.filter((e) => e.id == article.arId)[0];
    }
  };

  const get_catalogue = () => {
    if (props.cataList && cataid) {
      return props.cataList.filter((e) => e.id == cataid)[0];
    }
  };

  return (
    <>
      Insertion articles
      <div className="categorieContainer">
        <form autocomplete="off" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              onChange={(e) => setcatname(e.target.value)}
              list="catalists"
              name="catalist"
              id="catalist"
              className="myregselect"
              placeholder="select categorie"
              required
            />

            <datalist id="catalists">
              {props.catList ? (
                props.catList.map((e) => (
                  <option key={e.id} value={e.nom}>
                    {e.nom}
                  </option>
                ))
              ) : (
                <div>hi</div>
              )}
            </datalist>
          </div>

          <div>
            <select
              onChange={(e) => {
                {
                  setarticle(JSON.parse(e.target.value));
                }
              }}
              className="myregselect"
              name="dosage"
              required
            >
              <option value="">select Magasin:</option>
              {props.articleList ? (
                props.articleList.map((e) => {
                  if (e.cat === catname) {
                    return (
                      <option
                        key={e.id}
                        value={JSON.stringify({
                          arId: `${e.id}`,
                          nom: `${e.nom}`,
                        })}
                      >
                        {e.nom}
                      </option>
                    );
                  }
                })
              ) : (
                <div>hi</div>
              )}
            </select>
          </div>

          {/* <div>
            <input
              onChange={(e) => {
                setarticle(e.target.value);
              }}
              type="text"
              list="articleLists"
              name="articleList"
              id="articleList"
              className="myregselect"
              placeholder="select article"
              required
            />

            <datalist id="articleLists">
              {props.articleList ? (
                props.articleList.map((e) => {
                  if (e.cat === catname) {
                    return <option key={e.id} value={e.nom} />;
                  }
                })
              ) : (
                <div>hi</div>
              )}
            </datalist>
          </div> */}

          <div>
            <input
              onChange={(e) => {
                setpromotype(e.target.value);
              }}
              list="promotypes"
              name="promotype"
              id="promotype"
              className="myregselect"
              placeholder="select promo type"
              required
            />

            <datalist id="promotypes">
              {promoTypes.map((e) => (
                <option key={e.id} value={e.type} />
              ))}
            </datalist>
          </div>
          <div>
            {promoTypes.filter((q) => q.type === promotype)[0]
              ? promoTypes
                  .filter((q) => q.type === promotype)[0]
                  .parameter.map((k) => (
                    <input
                      onChange={(e) => {
                        handleChange(e.target.value, k);
                      }}
                      type="number"
                      className=""
                      name={k}
                      id={k}
                      placeholder={k}
                      required
                    />
                  ))
              : null}
          </div>

          <div>
            <input
              onChange={(e) => setancientprice(e.target.value)}
              type="number"
              className=""
              name="articlename"
              id="articlename"
              placeholder="ancient prix."
              required
            />
          </div>

          <div>
            <input
              onChange={(e) => setnewprice(e.target.value)}
              type="number"
              className=""
              name="articlename"
              id="articlename"
              placeholder="nouveau prix."
              required
            />
          </div>

          <div>
            <button
              onClick={() => {
                if (
                  catname !== "" &&
                  article !== "" &&
                  promotype !== "" &&
                  handleExistence(promotype) &&
                  ancientprice !== "" &&
                  newprice !== ""
                ) {
                  props.addArticleToCatalogue({
                    catalogue : get_catalogue(),
                    cataid: cataid,
                    article: get_article(),
                    promo: get_promo(),
                    pricing: { ancientprice: ancientprice, newprice: newprice },
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
            <th>nom</th>
            <th>categorie</th>
          </tr>
          {props.articleList ? (
            props.articleList
              .filter((e) => e.id == article.arId)
              .map((e) => (
                <tr key={e.id}>
                  <td
                    className="carted-img"
                    style={{ backgroundImage: `url( ${e.logo} )` }}
                  ></td>
                  <td>{e.nom}</td>
                  <td>{e.cat}</td>
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
      cataList: state.r_catalogue,
    };
  },
  { getCategorie, addArticleToCatalogue, getCatalogue, getArticle }
)(Catarefill);
