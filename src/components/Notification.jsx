import React, { useEffect, useState } from "react";
import "./Notification.css";
//import { getDishes } from "../actions/a_dishes";
//import { addToCart, removeFromCart } from "../actions/a_cart";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Notification(props) {
  useEffect(() => {
    // props.getDishes();
  }, []);
if (props.status == "error"){
return <div className="notification danger" >{props.children}</div>;}

else if (props.status == "success"){
  return <div className="notification success" >{props.children}</div>;}

  else if (props.status == "start"){
    return <div className="notification success" >{props.children}</div>;}}

// else if (props.status == "start"){
//   return <div ></div>;}
// }

export default connect((state) => {
  return { user: state.r_users };
}, {})(Notification);
