import * as types from '../actions/types';
import JwtDecode from "jwt-decode";


const getRole = () => {
    let token = localStorage.getItem('token');
    if (token == null) {return "none"}
    if (token !== null){
        const payload = JwtDecode(token);
        return payload.role
    }
}

const r_current_user = (state = getRole(), action) => {
    console.log("reducer r_current_user");

    if (action.type === types.LOGIN_USER) {
        return action.payload

    } else if (action.type === types.LOGOUT_USER) {
        return action.payload

    } else {
        return state
    }
}

export default r_current_user;