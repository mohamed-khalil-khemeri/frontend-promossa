import * as types from "./types";
import Axios from "axios";
import JwtDecode from "jwt-decode";


/***********************login user action package*********************************** */

export const loginUser3 = (payload) => {
  console.log("user : ", payload);
  const action = {
    type: types.LOGIN_USER,
    payload,
  };
  return action;
};


export function loginUser2(payload) {

  return (dispatch) =>
    Axios.post("/users/log", payload, {
      headers: {
        "content-type": "application/json",
      }
    })
      .then((res) => {
        console.log("res : ",res)
        const token = res.headers["x-auth-token"];
        localStorage.setItem("token", token);
        Axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        const payload = JwtDecode(token);
        dispatch(sendNotification({ type: "success", block: false, payload:  "success"}));
        dispatch(loginUser3(payload));
      })
      .catch((err) => {console.log("c err : ",err.response.data);dispatch(sendNotification({ type: "error", block: false, payload:  err.response.data}));});
}


export const sendNotification = (payload) => ({
  type: types.GET_LOG_STATUS,
  payload,
});


export function loginUser(payload) {
  return (dispatch) => {
    dispatch(sendNotification({ type: "wait", block: true, payload: "wait" }));
    dispatch(loginUser2(payload))
  }

}

/***********************logout user action package*********************************** */

export const logoutUser = () => {
  localStorage.removeItem("token");

  const action = {
    type: types.LOGOUT_USER,
    payload: "none",
  };
  return action;
};

/***********************get_current_user action package*********************************** */

export function get_current_user() {
  return async (dispatch) => {
    const token = await localStorage.getItem("token");
    if (token) {
      const payload = await JwtDecode(token);
      dispatch(loginUser3(payload))
    }

  }
};

