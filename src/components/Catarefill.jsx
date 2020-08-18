import React, { useEffect, useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getMagasin } from "../actions/a_magasin";
import { addCatalogue, getCatalogue } from "../actions/a_catalogue";
import { getCategorie } from "../actions/a_categorie";
import { getArticle } from "../actions/a_article";

function Catarefill(props) {
  useEffect(() => {
    props.getCatalogue();
    props.getCategorie();
    props.getArticle();
  }, []);

  let { cataid } = useParams();
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

  return (
    <>
      Insertion articles
      <div className="categorieContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
          <input
          onChange={e=>setcatname(e.target.value)}
            list="catalists"
            name="catalist"
            id="catalist"
            className="myregselect"
            placeholder="select categorie"
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
          <input
            onChange={e=>setarticle(e.target.value)}
            onChange={e=>setarticleid(e.target.key)}
            list="articleLists"
            name="articleList"
            id="articleList"
            className="myregselect"
            placeholder="select article"
          />

          <datalist id="articleLists">
            {props.articleList ? (
              props.articleList.map((e) => {if (e.cat === catname){ return(
                <option key={e.id} value={e.nom}>
                  {e.nom}
                </option>
              )}})
            ) : (
              <div>hi</div>
            )}
          </datalist>
          </div> 
          {/* <div>
            <select
              onChange={(e) => setparent(e.target.value)}
              className="myregselect"
              name="dosage"
              id="dosage"
              required
            >
              <option value="">select Categorie:</option>
              {props.catList ? (
                props.catList.map((e) => (
                  <option key={e.id} value={e.nom}>
                    {e.nom}
                  </option>
                ))
              ) : (
                <div>hi</div>
              )}
            </select>
          </div> */}
          <div>
          <input
            onChange={(e) => setpromotype(e.target.value)}
            list="promotypes"
            name="promotype"
            id="promotype"
            className="myregselect"
            placeholder="select promo type"
          />

          <datalist id="promotypes">
          <option  value="pourcentage simple" />
            {/* {props.articleList ? (
              props.articleList.map((e) => {if (e.cat === catname){ return(
                <option key={e.id} value={e.nom}>
                  {e.nom}
                </option>
              )}})
            ) : (
              <div>hi</div>
            )} */}
          </datalist>
          </div> 
          <div>
          <input
              onChange={(e) => setpercentage(e.target.value)}
              type="number"
              className=""
              name="articlename"
              id="articlename"
              placeholder="pourcentage du reduction."
              
              required
            />
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
                  parent !== "" &&
                  cataname !== "" &&
                  debut !== "" &&
                  fin !== ""
                ) {
                  props.addCatalogue({
                    nom: cataname,
                    magasin: parent,
                    debut: debut,
                    fin: fin,
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
            props.articleList.filter(e=>e.id === articleid).map((e) => (
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
  { getCategorie, addCatalogue, getCatalogue, getArticle }
)(Catarefill);
