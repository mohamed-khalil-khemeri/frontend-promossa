import React, { useEffect, useState } from "react";
import "./Orders.css";

import { getOrders, acceptOrders, denyOrders } from "../actions/a_orders";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

function Orders(props) {
  useEffect(() => {
    props.getOrders();
  }, []);
  const [filter_key, set_filter_key] = useState("pending");
  const [orderModalDisplay, setOrderModalDisplay] = useState("none");
  const [speceficOrder, setspeceficOrder] = useState({});
  let orderModalOverlay;
  let cancelOrderButton;

  const Odescription = (e) => {
    setspeceficOrder({ ...e });

    setOrderModalDisplay("block");
  };
  const cancel = (e) => {
    if (e.target === orderModalOverlay || e.target === cancelOrderButton) {
      setOrderModalDisplay("none");
    }
  };
  let total = (x) => {
    if (x) {
      if (x.length != 0) {
        return x.map((e) => e.price * e.quantity).reduce((t, e) => t + e);
      } else {
        return 0;
      }
    }
  };

  const order_modal = () => {
    return (
      <div
        className="order-modal"
        ref={(e) => (orderModalOverlay = e)}
        onClick={(e) => cancel(e)}
        style={{ display: orderModalDisplay }}
      >
        <div className="order-modal-inner">
          <div className="total">
            <div>
              <h4>معرف الطلب</h4>
              <p>{speceficOrder.id ? speceficOrder.id : "contact dev"}</p>
            </div>
            <div>
              <h4>حالة الطلب</h4>
              <p>
                {speceficOrder.delivery_status
                  ? speceficOrder.delivery_status === "pending"
                    ? "قيد التحقق"
                    : speceficOrder.delivery_status === "denied"
                    ? "رفضت"
                    : speceficOrder.delivery_status === "delivred"
                    ? "مقبول"
                    : "contact dev"
                  : "contact dev"}
              </p>
            </div>
          </div>
          <div className="modal-order">
          <div className="order-invoice">
            <table className="order-table">
              <tr>
                <th>صورة الطبق</th>
                <th>الطبق</th>
                <th>سعر الطبق الواحد</th>
                <th> كمية الأطباق</th>
                <th>ثمن أطباق</th>
              </tr>
              {speceficOrder.orderDishes ? (
                speceficOrder.orderDishes.map((e) => (
                  <tr key={e.id}>
                    <td
                      className="carted-img"
                      style={{ backgroundImage: `url( ${e.img} )` }}
                    ></td>
                    <td>{e.title}</td>
                    <td>{e.price}</td>
                    <td> {e.quantity}</td>
                    <td>{e.quantity * e.price}</td>
                  </tr>
                ))
              ) : (
                <div>hi</div>
              )}
            </table>

            <div className="total">
              <h4>الثمن الجملي :</h4>
              <p>{total(speceficOrder.orderDishes)}</p>
              <p>دينار </p>
            </div>
          </div>
          {speceficOrder.userInfo ? (
            [{ ...speceficOrder.userInfo }].map((e) => (
              <div className="order-user">
                <table className="order-table">
                  <tr>
                    <th>معرف العميل </th>
                    <td>{e.id}</td>
                  </tr>
                  <tr>
                    <th>اسم العميل</th>
                    <td>{e.name}</td>
                  </tr>
                  <tr>
                    <th>هاتف العميل</th>
                    <td>{e.tel}</td>
                  </tr>
                  <tr>
                    <th>عنوان العميل</th>
                    <td>{e.adress}</td>
                  </tr>
                </table>
              </div>
            ))
          ) : (
            <div>hi 2</div>
          )}
          </div>

          <div>
            <button
              ref={(e) => (cancelOrderButton = e)}
              className="cancel-btn"
              onClick={(e) => cancel(e)}
            >
              إخفاء
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (props.user.role) {
    if (props.user.role === "admin") {
      if (props.orders) {
        return (
          <div className="dishes-component-container">
          <div className="filtered-results">
          <select onChange={(e)=>{set_filter_key(e.target.value)}} >
                  <option value="pending">قيد التحقق</option>
                  <option value="denied">رفضت</option>
                  <option value="delivred">مقبول</option>
                  <option value="showAll">إظهار جميع النتائج</option>
          </select>
          </div>
          <div className="list-container">
            <table id="list-table">
              <tr>
                <th>معرف الطلب</th>
                <th>اسم العميل</th>
                <th>العنوان</th>
                <th>المبلغ</th>
                <th>العمليات</th>
                <th>رفض الطلب</th>
                <th>قبول الطلب</th>
                <th>عرض تفاصيل الطلب</th>
              </tr>
              {props.orders.filter(e=>{
            if (filter_key === "showAll"){
              console.log("filter key",filter_key)
              return (e===e)
            }else return (e.delivery_status === filter_key)
          }).map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.userInfo.name}</td>
                  <td>{e.userInfo.adress}</td>
                  <td>
                    {e.orderDishes
                      .map((e) => e.price * e.quantity)
                      .reduce((t, e) => t + e)}
                  </td>
                  <td>
                    {e.delivery_status === "pending"
                      ? "قيد التحقق"
                      : e.delivery_status === "denied"
                      ? "رفضت"
                      : e.delivery_status === "delivred"
                      ? "مقبول"
                      : "contact dev"}
                  </td>
                  <td>
                    <button
                      className="deny"
                      onClick={() => {
                        props.denyOrders(e.id);
                      }}
                    >
                      رفض
                    </button>
                  </td>
                  <td>
                    <button
                      className="deliver"
                      onClick={() => {
                        props.acceptOrders(e.id);
                      }}
                    >
                      قبول
                    </button>
                  </td>
                  <td>
                    <button
                      className="cancel-btn"
                      onClick={() => {
                        Odescription(e);
                      }}
                    >
                      عرض
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            {order_modal()}
          </div>
          </div>
        );
      }
    } else if (props.user.role === "user") {
      if (props.orders) {
        return (
          <div className="dishes-component-container">
          <div className="filtered-results">
          <select onChange={(e)=>{set_filter_key(e.target.value)}} >
                  <option value="pending">قيد التحقق</option>
                  <option value="denied">رفضت</option>
                  <option value="delivred">مقبول</option>
                  <option value="showAll">إظهار جميع النتائج</option>
          </select>
          </div>
          <div className="list-container">
            <table id="list-table">
              <tr>
                <th>معرف الطلب</th>
                <th>العنوان</th>
                <th>المبلغ</th>
                <th>حالة الطلب</th>
                <th>عرض تفاصيل الطلب</th>
              </tr>
              {props.orders.filter(e=>{
            if (filter_key === "showAll"){
              console.log("filter key",filter_key)
              return (e===e)
            }else return (e.delivery_status === filter_key)
          }).map((e) => {
                if (e.userInfo.id === props.user.id) {
                  return (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.userInfo.adress}</td>
                      <td>
                        {e.orderDishes
                          .map((e) => e.price * e.quantity)
                          .reduce((t, e) => t + e)}
                      </td>
                      <td>
                        {e.delivery_status === "pending"
                          ? "قيد التحقق"
                          : e.delivery_status === "denied"
                          ? "رفضت"
                          : e.delivery_status === "delivred"
                          ? "مقبول"
                          : "contact dev"}
                      </td>
                      <td>
                        <button
                          className="cancel-btn"
                          onClick={() => {
                            Odescription(e);
                          }}
                        >
                          عرض
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </table>
            {order_modal()}
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
      dishesList: state.r_dishes,
      orders: state.r_orders,
      user: state.r_users,
    };
  },
  { getOrders, acceptOrders, denyOrders }
)(Orders);
