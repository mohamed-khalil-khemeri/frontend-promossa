import * as types from './types';
import Axios from 'axios';



/*--------------------------------get all users----------------------------------- */
export const getAllUsers2 = (payload) => {
    const action = {
        type: types.GET_ALL_USERS,
        payload,
    }
    console.log("action getAllUsers2 called : ", action);
    return action;
}

export function getAllUsers(x) {

    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee5e5fd0e966a7aa3690b21", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        let z = [...res.data]

        dispatch(getAllUsers2(z));
    }))
}