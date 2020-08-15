import React, { Component, useEffect, useState } from "react";
import "./Editor.css";
import { NavLink, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getFeedbacks,
  addFeedbacks,
  update_read_status,
} from "../actions/a_feedbacks";

function Feedback(props) {
  let xtitle;

  let xdescription;

  useEffect(() => {
    props.getFeedbacks();
  }, []);
  const [filter_key, set_filter_key] = useState("unread");

  const getDataAdder = () => {
    return {
      user: props.user,
      title: xtitle.value,
      description: xdescription.value,
    };
  };

  if (props.user.role) {
    if (props.user.role === "user") {
      if (props.feedbacks) {
        return (
          <div id="list-container">
            <table id="list-table">
              <tr>
                <th>عنوان الرسالة</th>
                <td>
                  <input ref={(e) => (xtitle = e)} type="text" />
                </td>
              </tr>
              <tr>
                <th>نص الرسالة</th>
                <td>
                  <textarea
                    ref={(e) => (xdescription = e)}
                    rows="5"
                    cols="100"
                  />
                </td>
              </tr>
            </table>
            <div className="cancel-submit">
              <NavLink exact to="/">
                <button id="cancel">إلغاء</button>
              </NavLink>
              <NavLink exact to="/">
                <button
                  id="submit"
                  onClick={() => {
                    props.addFeedbacks(getDataAdder());
                  }}
                >
                  إرسال
                </button>
              </NavLink>
            </div>
          </div>
        );
      }
    } else if (props.user.role === "admin") {
      if (props.feedbacks) {
        return (
          <div className="dishes-component-container">
            <div className="filtered-results">
              <select
                onChange={(e) => {
                  set_filter_key(e.target.value);
                }}
              >
                <option value="unread">غير مقروء</option>
                <option value="read">مقروء</option>
                <option value="showAll">إظهار جميع النتائج</option>
              </select>
            </div>
            <div className="list-container">
              <table id="list-table">
                <tr>
                  <th>معرف الرسالة</th>
                  <th>معرف العميل</th>
                  <th>اسم العميل</th>
                  <th>العنوان</th>
                  <th>الهاتف</th>
                  <th>حالة الرسالة</th>
                  <th>عنوان الرسالة</th>
                  <th>نص الرسالة</th>
                  <th>وضع علامة مقروء</th>
                </tr>
                {props.feedbacks
                  .filter((e) => {
                    if (filter_key === "showAll") {
                      console.log("filter key", filter_key);
                      return e === e;
                    } else return e.read_status === filter_key;
                  })
                  .map((e) => (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.user.id}</td>
                      <td>{e.user.name}</td>
                      <td>{e.user.adress}</td>
                      <td>{e.user.tel}</td>
                      <td>
                        {e.read_status === "unread"
                          ? "غير مقروء"
                          : e.read_status === "read"
                          ? "مقروء"
                          : "contact dev"}
                      </td>
                      <td>{e.title}</td>
                      <td>{e.description}</td>

                      <td>
                        <button
                          className="deliver"
                          onClick={() => {
                            props.update_read_status(e.id);
                          }}
                        >
                          تمت قراءته
                        </button>
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
      user: state.r_users,
      feedbacks: state.r_feedbacks,
    };
  },
  { getFeedbacks, addFeedbacks, update_read_status }
)(Feedback);
