import * as types from '../actions/types';

const r_current_user = (state = "none", action) => {
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