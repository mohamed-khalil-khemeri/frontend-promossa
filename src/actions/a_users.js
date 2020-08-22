import { ADD_USER } from "./types";
import Axios from "axios";
import { json } from "body-parser";

// let token = localStorage.getItem('token');
// console.log("tooooooooken : ", token);
// Axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');



// export const getAllUsers = (payload) => ({
//   type: GET_USER,
//   payload,
// });

// export function getUsersFromApi() {
//   // const toktok = async () => {
//   let tok = localStorage.getItem('token');
//   console.log("users list action called: ", tok);
//   // }
//   return (dispatch) =>
//     Axios.get("http://localhost:3001/users", {
//       headers: { 'Content-Type': 'application/json' }
//     })
//       .then((res) => {
//         console.log("users list action : ", res.data);
//         dispatch(getAllUsers(res.data));
//       });
// }

/* add  user */

export const addUser = (payload) => ({
    type: ADD_USER,
    payload,
});

export function register_user(payload) {
    console.log("add user");

    return (dispatch) =>
        Axios.post(`/users/`, payload, {
            headers: { 'Content-Type': 'application/json' }
        })
            //   .then((res) => dispatch(getUsersFromApi()))
            // .then((res) => (res.data.keyValue ? ))
            .then((res) => console.log("response : ",Object.keys(res.data.keyValue) !== undefined ? Object.keys(res.data.keyValue) : res ))
            .catch((err) => console.log("error received : ", err));
}

// /* delete user */

// export const deleteUser = (payload) => ({
//   type: DELETE_USER,
//   payload,
// });

// export function deleteUsersFromApi(id) {
//   return (dispatch) =>
//     Axios.delete("http://localhost:3001/users/" + id).then((res) =>
//       dispatch(getUsersFromApi())
//     );
// }

// /* edite user */

// export const editeUser = (payload) => ({
//   type: EDIT_USER,
//   payload,
// });

// export function editeUserFromApi(el) {
//   console.log("user edited", el._id);
//   return (dispatch) =>
//     Axios.put("http://localhost:3001/users/" + el._id, el).then((res) =>
//       dispatch(getUsersFromApi())
//     );
// }
