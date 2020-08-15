import React, { Component, useEffect } from "react";
import "./Editor.css";
import { NavLink, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateDish, addDish } from "../actions/a_dishes";

function Editor(props) {
  let { add, dish, iDish, order, iOrder, iDelete } = useParams();
  let xtitle;
  let xprice;
  let ximg;
  let xmode;
  let xdescription;

  // useEffect(
  //   console.log("the dishes : ",props.xmenu),
  //   console.log("the iDish params : ",iDish),
  //   console.log("the menu : ",props.xmenu[iDish])

  // );

  const getDataAdder = () => {
    return {
      title: xtitle.value,
      price: xprice.value,
      img: ximg.value,
      mode: xmode.value,
      description: xdescription.value,
    };
  };
    const getDataEditor = () => {
      return {
          id: menu.id,
          title: xtitle.value,
          price: xprice.value,
          img: ximg.value,
          mode: xmode.value,
          description: xdescription.value
      }
    };

  // useEffect(() => {
  //   menu = props.xmenu.find((e) => e.id === iDish * 1);
  //   console.log("menu 1 : ", menu);
  // });

  let menu =  props.xmenu.find(e=>(e.id===(iDish*1)));


  if (add === "add") {
    return (
      <div id="list-container">
        <table id="list-table">
          <tr>
            <th>اسم الطبق</th>
            <td>
              <input ref={(e) => (xtitle = e)} type="text" />
            </td>
          </tr>
          <tr>
            <th>الثمن</th>
            <td>
              <input ref={(e) => (xprice = e)} type="number" min="1" max="5" />
            </td>
          </tr>
          <tr>
            <th>صورة</th>
            <td>
              <input ref={(e) => (ximg = e)} type="text" />
            </td>
          </tr>
          <tr>
            <th>الوضع</th>
            <td>
              <select ref={(e) => (xmode = e)} id="cars">
                <option value="active">مفعل</option>
                <option value="onHold">معلق</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>وصف</th>
            <td>
              <textarea ref={(e) => (xdescription = e)} rows="5" cols="100" />
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
                props.addDish(getDataAdder());
              }}
            >
              أضف
            </button>
          </NavLink>
        </div>
      </div>
    );
  } else if (dish === "dish") {
    return (
      <div id="list-container">
        <table id="list-table">
          <tr>
            <th>اسم الطبق</th>
            <td>
              <input
                defaultValue={menu.title}
                ref={(e) => (xtitle = e)}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <th>الثمن</th>
            <td>
              <input
                defaultValue={menu.price}
                ref={(e) => (xprice = e)}
                type="number"
                min="1"
              />
            </td>
          </tr>
          <tr>
            <th>صورة</th>
            <td>
              <input
                defaultValue={menu.img}
                ref={(e) => (ximg = e)}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <th>الوضع</th>
            <td>
              <select
                defaultValue={menu.mode}
                ref={(e) => (xmode = e)}
                id="cars"
              >
                <option value="active">مفعل</option>
                <option value="onHold">معلق</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>وصف</th>
            <td>
              <textarea
                defaultValue={menu.description}
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
            <button id="submit" onClick={() => {props.updateDish(getDataEditor())}}>
            عدل الآن
            </button>
          </NavLink>

        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      xmenu: state.r_dishes,
    };
  },
  { addDish, updateDish }
)(Editor);
