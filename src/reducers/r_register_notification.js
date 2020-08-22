import * as types from '../actions/types';

const r_register_notification = (state = { type: "start", block: false, payload: "start" }, action) => {

    if (action.type === types.GET_REG_STATUS) {
        return action.payload

    } else {
        return state
    }
}

export default r_register_notification;