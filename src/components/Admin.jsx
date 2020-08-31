import React, { useEffect, useState } from "react";
import "./Admin.css";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Categorie from "./Categorie";
import Catalogue from "./Catalogue";
import Sidebar from "./Sidebar";
import Magasin from "./Magasin";
import Article from "./Article";
import Catarefill from "./Catarefill";
import CatalogueList from "./CatalogueList";
import Home from "./Home";

function Admin(props) {
  return (
    <>
      <div className="app-container">
        <div className="app-inner-container">
          <div className="app-inner-inner-container">
            <Switch>
            <Route exact path="/" component={Home} />
              <Route
                exact
                path="/admin"
                render={() => (
                  <div className="app-container">
                    <div>
                    <div>
                    <img
                      src="https://i.pinimg.com/originals/59/66/fd/5966fd497b2297270c66959439f33311.gif"
                      alt="hi admin"
                      width="500"
                      height="333"
                    />
                    </div>
                   
                    <div>
                    <img
                      src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/Welcome-multicolour-text.png?fit=944%2C363"
                      alt="hi admin"
                      width="500"
                      height="333"
                    />
                    </div>
                  </div>
                  </div>
                )}
              />
              <Route exact path="/catalogue" component={Catalogue} />
              <Route exact path="/categorie" component={Categorie} />
              <Route exact path="/magasin" component={Magasin} />
              <Route exact path="/article" component={Article} />
              <Route exact path="/catalogueList/:cataid" component={CatalogueList} />
              <Route exact path="/catarefill/:cataid" component={Catarefill} />
              {/* <Route path="/add/:add"  component={() => <Editor />} /> */}
              <Redirect to="/admin" />
            </Switch>
          </div>
          <Sidebar />
        </div>{" "}
      </div>
    </>
  );
}

export default connect((state) => {
  return {
    dishesList: state.r_dishes,
    carted: state.r_cart,
    user: state.r_users,
  };
}, {})(Admin);
