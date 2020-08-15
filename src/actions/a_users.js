import * as types from './types';
import Axios from 'axios';

let uid;
let ulist = [];
/***********************register user action package*********************************** */

export const registerUser2 = (user) => {
    const action = {
        type: types.REGISTER_USER,
        user,
    }
    console.log("action addUser2 called : ", action);
    return action;
}
export function registerUser(x) {
    let z = { ...x };
    Object.keys(z).map(e => { z[e] = z[e].value });
    

    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee5e5fd0e966a7aa3690b21", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        ulist = [...res.data];
        uid= ulist.map(e=>e.id).reduce(function(a, b) {
            return Math.max(a, b);
        });
        uid+=1;
        console.log("uid : ",uid);
        z = { id:uid,...z, role: "user"};
        y = [...res.data, z];
        /********************update database with new one*********************** */
        Axios.put("https://api.jsonbin.io/b/5ee5e5fd0e966a7aa3690b21",
            y,
            {
                headers: {
                    'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                    "versioning": "false",
                    "Content-Type": "application/json"
                }
            });
        dispatch(registerUser2(z));
    }))
}
/***********************login user action package*********************************** */
export const loginUser2 = (user) => {
    const action = {
        type: types.LOGIN_USER,
        user,
    }
    console.log("action loginUser2 called : ", action);
    return action;
}

export function loginUser(x, y) {
    let a;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee5e5fd0e966a7aa3690b21", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        let z = [...res.data]
        a = z.find(e => ((e.email === x) && (e.password === y)));
        console.log("email: ", x, " password : ", y);

        dispatch(loginUser2(a));
    }))
}
/***********************logout user action package*********************************** */

export const logoutUser = () => {
    const action = {
        type: types.LOGOUT_USER,
        user: "none"
    }
    console.log("action LOGOUT_USER called : ", action);
    return action;
}