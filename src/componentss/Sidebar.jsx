import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { getDishes } from "../actions/a_dishes";
import { addToCart, removeFromCart } from "../actions/a_cart";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  useEffect(() => {
    // props.getDishes();
  }, []);

  return (
    <React.Fragment>
      {props.user.role === "admin" ? (
        <div className="sidebar-container">
          <NavLink exact to="/" className="normal-sidebar" activeClassName="active-sidebar" >لائحة الأطباق</NavLink>
          <NavLink exact to="/orders" className="normal-sidebar" activeClassName="active-sidebar" >متابعة الطلبات</NavLink>
          <NavLink exact to="/users" className="normal-sidebar" activeClassName="active-sidebar" >المستخدمين</NavLink>
          <NavLink exact to="/feedback" className="normal-sidebar" activeClassName="active-sidebar" >الرسائل الواردة</NavLink>
          {/* <NavLink exact to="/2" className="normal-sidebar" activeClassName="active-sidebar" >testimonials</NavLink>
          <NavLink exact to="/3" className="normal-sidebar" activeClassName="active-sidebar" >contact</NavLink> */}
        </div>
      ) : props.user.role === "user" ? (
        <div className="sidebar-container">
          <NavLink exact to="/" className="normal-sidebar" activeClassName="active-sidebar" >لائحة الأطباق</NavLink>
          <NavLink exact to="/orders" className="normal-sidebar" activeClassName="active-sidebar" >متابعة الطلبات</NavLink>
          <NavLink exact to="/feedback" className="normal-sidebar" activeClassName="active-sidebar" >راسلنا</NavLink>
          {/* <NavLink exact to="/2" className="normal-sidebar" activeClassName="active-sidebar" >notification</NavLink>
          <NavLink exact to="/3" className="normal-sidebar" activeClassName="active-sidebar" >contact</NavLink> */}
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
}

export default connect((state) => {
  return { user: state.r_users };
}, {})(Sidebar);
