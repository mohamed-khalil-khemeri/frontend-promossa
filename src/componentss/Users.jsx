import React, { useEffect, useState } from "react";
import "./Users.css";

import {getAllUsers} from "../actions/a_allusers";

import { connect } from "react-redux";

function Orders(props) {
  useEffect(() => {
    props.getAllUsers();
  }, []);

  const [filter_key, set_filter_key] = useState("showAll");

  if (props.user.role) {
    if (props.user.role === "admin") {
      if (props.users) {
        return (
          <div className="dishes-component-container">
            <div className="filtered-results">
              <select
                onChange={(e) => {
                  set_filter_key(e.target.value);
                }}
              >
                <option value="showAll">إظهار جميع النتائج</option>
                <option value="admin">مشرف</option>
                <option value="user">زبون</option>
              </select>
            </div>
            <div className="list-container">
              <table id="list-table">
                <tr>
                  <th>معرف العميل</th>
                  <th>اسم العميل</th>
                  <th>البريد الإلكتروني</th>
                  <th>الهاتف</th>
                  <th>العنوان</th>
                  <th>الصفة</th>
                </tr>
                {props.users
                  .filter((e) => {
                    if (filter_key === "showAll") {
                      return e === e;
                    } else return e.role === filter_key;
                  })
                  .map((e) => (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.tel}</td>
                      <td>{e.adress}</td>

                      <td>
                        {e.role === "admin"
                          ? "مشرف"
                          : e.role === "user"
                          ? "زبون"
                          : "contact dev"}
                      </td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        );
      }
    }
  }
}

export default connect(
  (state) => {
    return {
      users: state.r_allusers,
      user : state.r_users
    };
  },
  { getAllUsers }
)(Orders);
