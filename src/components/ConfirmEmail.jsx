import React, { useEffect, useState } from "react";
import "./Magasin.css";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { confirmEmails } from "../actions/a_users";

function ConfirmEmail(props) {
    let { id } = useParams();

    useEffect(() => {
        props.confirmEmails(id);
      }, []);

  return (
    <>
      <div className="vContainer">
        <div className="verifyEmail">
          Congratulations ! Your E-mail is confirmed successfully , You my now
          Login !
          <NavLink
            exact
            to="/login"
            className="normal-sidebar"
            activeClassName="active-sidebar"
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default connect(
  (state) => {
    return {
      user: state.r_users,
    };
  },
  { confirmEmails }
)(ConfirmEmail);
