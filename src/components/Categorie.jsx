import React, { useEffect, useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

function Categorie(props) {
  return (
    <>
Categorie
      <div className="">
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
}, {})(Categorie);
