import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { loginUser, logoutUser } from "../actions/a_current_user";
import { setQuantity, removeFromCart, sendOrder } from "../actions/a_cart";
import { connect } from "react-redux";
import logo from "../logo.png";
import Login from "./Login";
import Register from "./Register";
import { NavLink, useParams } from "react-router-dom";

function Navbar(props) {
  useEffect(() => {
    displaylogreg();
  }, [props.user]);

  const xxx = () => {
    if (props.user !== "none") {
      return `مرحبا ${props.user.name} !`;
    }
  };
  let MrClient = xxx();
  const [mDisplay1, setmDisplay1] = useState("none");
  const [mDisplay2, setmDisplay2] = useState("none");
  const [mDisplay3, setmDisplay3] = useState("none");
  const [displayLogin, setDisplayLogin] = useState("none");
  const [displayLogout, setDisplayLogout] = useState("block");
  //const [quantity, setQuantity] = useState(1);
  const digit_display = (e) => {
    return (e + "").replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  };

  const displaylogreg = () => {
    console.log("props.user : ", props.user);
    if (props.user !== "none") {
      setDisplayLogin("none");
      setDisplayLogout("block");
    } else if (props.user == "none") {
      setDisplayLogin("block");
      setDisplayLogout("none");
    }
  };

  let regUser = {};
  let logUser = {};
  let modalOverlay1;
  let modalOverlay2;
  let modalOverlay3;
  let submitButton1;
  let submitButton2;
  let submitButton3;
  let cancelButton1;
  let cancelButton2;
  let cancelButton3;
  let cancelButton3Bis;
  let cancelButton4;

  const logout = () => {
    console.log("logout");
    props.logoutUser();
    // setDisplayLogin("block");
    // setDisplayLogout("none");
  };
  const Ologin = () => {
    console.log("Ologin");
    setmDisplay2("block");
  };
  const login = () => {
    console.log("logged in");
    //props.loginUser(logUser.email.value,logUser.password.value);
    setDisplayLogin("none");
    setDisplayLogout("block");
  };
  const Oregister = () => {
    console.log("Oregister");
    setmDisplay1("block");
  };
  const register = () => {
    console.log("register");
    //props.registerUser(regUser)
  };
  const cancel = (e) => {
    if (
      e.target === modalOverlay1 ||
      e.target === cancelButton1 ||
      e.target === submitButton1
    ) {
      setmDisplay1("none");
    } else if (
      e.target === modalOverlay2 ||
      e.target === cancelButton2 ||
      e.target === submitButton2
    ) {
      setmDisplay2("none");
    } else if (
      e.target === modalOverlay3 ||
      e.target === cancelButton3 ||
      e.target === submitButton3 ||
      e.target === cancelButton3Bis ||
      e.target === cancelButton4
    ) {
      setmDisplay3("none");
    }
  };
  let total = (x) => {
    if (x.length != 0) {
      return x
        .map((e) => e.pricing.newprice * e.quantity)
        .reduce((t, e) => t + e);
    } else {
      return 0;
    }
  };

  return (
    <nav className="nav">
      <div className="navbar-container">
        <div className="navbar-inner-container">
          <div className="logo">
            {" "}
            <NavLink style={{ textDecoration: "none" }} to="/shop/0">
              <i className="fa fa-rebel" aria-hidden="true"></i> PROMOSSA
              <i className="fa fa-rebel" aria-hidden="true"></i>
            </NavLink>
          </div>
          <div className="right-side">
            <div className="menu">
              <div><NavLink to="/">Acceuil</NavLink></div>
              <div>contact</div>
            </div>
            <div className="auth">
              <div
                style={{ display: displayLogout }}
                className="auth-logout"
                onClick={logout}
              >
                Logout
              </div>
              <div>{MrClient}</div>
              {/* <div style={{display:displayLogin}} className="auth-login" onClick={Ologin}>دخول</div> */}
              <div style={{ display: displayLogin }} className="auth-login">
                <NavLink style={{ textDecoration: "none" }} exact to={"/login"}>
                  Login
                </NavLink>
              </div>
              {/* <div style={{display:displayLogin}} className="auth-register" onClick={Oregister}>تسجيل</div> */}
              <div style={{ display: displayLogin }} className="auth-register">
                <NavLink
                  style={{ textDecoration: "none" }}
                  exact
                  to={"/register"}
                >
                  Register
                </NavLink>
              </div>
            </div>
            <div
              className="cart"
              onClick={() => {
                console.log("Open carted");
                setmDisplay3("flex");
              }}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true">
                <span>{props.carted.length}</span>
              </i>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        ref={(e) => (modalOverlay1 = e)}
        onClick={(e) => cancel(e)}
        style={{ display: mDisplay1 }}
      >
        <div className="register-m">
          <h3>أنشئ حساباً</h3>
          {/* <label >الإسم و اللقب</label>
          <input ref={e=>regUser.name=e} type="text" defaultValue="محمد خليل خميري " placeholder="" required/>
          <label >البريد الإلكتروني</label>
          <input ref={e=>regUser.email=e} type="email" placeholder="" required/>
          <label >كلمة السر</label>
          <input ref={e=>regUser.password=e} type="password" placeholder="ستة حروف على الأقل" required/>
          <label >رقم الهاتف</label>
          <input ref={e=>regUser.tel=e} type="tel" defaultValue="27 145 229" placeholder="" required/>
          <label >العنوان</label>
          <input ref={e=>regUser.adress=e} type="text" defaultValue="Fouchana centre 2" placeholder="" required/> */}
          <Register />
          <button
            ref={(e) => (submitButton1 = e)}
            className="register-btn"
            onClick={(e) => {
              register();
              cancel(e);
            }}
          >
            أنشئ حساباً
          </button>
          <button
            ref={(e) => (cancelButton1 = e)}
            className="cancel-btn"
            onClick={(e) => cancel(e)}
          >
            {" "}
            إلغاء التسجيل{" "}
          </button>
        </div>
      </div>
      <div
        className="modal"
        ref={(e) => (modalOverlay2 = e)}
        onClick={(e) => cancel(e)}
        style={{ display: mDisplay2 }}
      >
        <div className="register-m">
          <h3>تسجيل الدخول</h3>
          {/* <label >البريد الإلكتروني</label>
          <input ref={e=>logUser.email=e} type="email" defaultValue="kmkhalilo@gmail.com" placeholder="" required/>
          <label >كلمة السر</label>
          <input ref={e=>logUser.password=e} type="password" defaultValue="12345678" placeholder="ستة حروف على الأقل" required/>
          <button ref={e=>submitButton2=e} className="register-btn" onClick={e=>{login();cancel(e)}}>دخول</button> */}
          <Login />
          <button
            ref={(e) => (cancelButton2 = e)}
            className="cancel-btn"
            onClick={(e) => cancel(e)}
          >
            {" "}
            إلغاء الدخول{" "}
          </button>
        </div>
      </div>
      <div
        className="modal"
        ref={(e) => (modalOverlay3 = e)}
        onClick={(e) => cancel(e)}
        style={{ display: mDisplay3 }}
      >
        <div className="carted-m ofx">
          {props.carted.length === 0 ? (
            <div className="empty-cart">
              <p>سلة المشتريات فارغة</p>
              <p>الرجاء إضافة الأطباق المرغوب بها</p>
              <p
                className="link"
                ref={(e) => (cancelButton3Bis = e)}
                onClick={(e) => cancel(e)}
              >
                رجوع إلى صفحة عرض الأطباق
              </p>
            </div>
          ) : (
            <div className="carted-item">
              <h3 className="title">Votre Panier par Magasin</h3>
              <table className="carted-table">
                <tr>
                  <th>logo</th>
                  <th>Nom</th>
                  <th>Prix unitaire</th>
                  <th>Quantité</th>
                  <th>Prix total per article</th>
                  <th>Suppression</th>
                </tr>
                {props.carted.map((e) => (
                  <tr key={e._id}>
                    <td
                      className="carted-img white-back"
                      style={{
                        backgroundImage: `url( http://localhost:3002/${e.article.logo} )`,
                      }}
                    >
                      <span className="promo-span">
                        {e.promo.type == "SIMPLE_PERCENTAGE"
                          ? e.promo.pourcentage + "%"
                          : e.promo.type == "BUY_X_GET_Y_FREE"
                          ? e.promo.buy_x + "+" + e.promo.y_free + "gratuit"
                          : e.promo.type == "EXTRA_QUANTITY"
                          ? "extra " + e.promo.extra
                          : null}
                      </span>
                      <img
                        className="magasin-img"
                        src={`http://localhost:3002/${e.magasin.logo}`}
                        alt="magasin"
                      />
                    </td>
                    <td>{e.article.name}</td>
                    <td>
                      {e.pricing.newprice.replace(/(\d)(?=(\d{3})+$)/g, "$1 ")}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="order-dish-quantity"
                        min="1"
                        onChange={(a) => {
                          props.setQuantity(e._id, a.target.value * 1);
                        }}
                        defaultValue={e.quantity}
                        type="number"
                      ></input>
                    </td>
                    <td>{digit_display(e.quantity * e.pricing.newprice)}</td>
                    <td>
                      <button
                        onClick={(a) => props.removeFromCart(e._id)}
                        className="remove-item"
                      >
                         Supprimer de la liste 
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              <div className="total">
                <h4>Prix total :</h4>
                <p>{digit_display(total(props.carted)/1000)}</p>
                <p>TND</p>
              </div>
              {props.user === "none" ? (
                <div>
                  <p className="notification">
                    عليك بالدخول إلى حسابك أو تسجيل حساب جديد إذا كنت لاتملك
                    واحدا !{" "}
                  </p>
                  <div className="carted-btns">
                    {/* <button
                      ref={(e) => (cancelButton4 = e)}
                      onClick={(e) => {
                        cancel(e);
                        Oregister();
                      }}
                      className="confirm-o"
                    >
                      تسجيل حساب جديد
                    </button> */}

                    <NavLink
                    ref={(e) => (cancelButton4 = e)}
                      onClick={(e) => {
                        cancel(e);
                      }}
                      className="confirm-o"
                      to="/register"
                    >
                      enregistrer
                    </NavLink>

                    <NavLink
                    to="/login"
                      ref={(e) => (submitButton3 = e)}
                      onClick={(e) => {
                        cancel(e);
                        
                      }}
                      className="confirm-o"
                    >
                      الدخول إلى حسابك
                    </NavLink>
                    <button
                      ref={(e) => (cancelButton3 = e)}
                      onClick={(e) => cancel(e)}
                      className="cancel-o"
                    >
                      إخفاء
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="carted-btns">
                    <button
                      ref={(e) => (submitButton3 = e)}
                      onClick={(e) => {
                        props.sendOrder(props.carted, props.user);
                        cancel(e);
                      }}
                      className="confirm-o"
                    >
                      sauvegarder votre liste
                    </button>
                    <button
                      ref={(e) => (cancelButton3 = e)}
                      onClick={(e) => cancel(e)}
                      className="cancel-o"
                    >
                      إخفاء
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default connect(
  (state) => {
    return { user: state.r_current_user, carted: state.r_cart };
  },
  //   { registerUser,loginUser, logoutUser, setQuantity, removeFromCart, sendOrder }
  { logoutUser, setQuantity, removeFromCart, sendOrder }
)(Navbar);
