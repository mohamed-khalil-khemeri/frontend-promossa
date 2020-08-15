import * as types from './types';
import Axios from 'axios';


/*********************** get Orders*********************************** */
export const getOrders2 = (payload) => {
    console.log("GET_ORDERS called ", payload);
    
    const action = {
        type: types.GET_ORDERS,
        payload,
    }
    return action;
}

export function getOrders() {

    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee665d20e966a7aa3694954", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        y = [...res.data ];
        dispatch(getOrders2(y));
    }))
}
/*********************** cancel Orders*********************************** */
export const denyOrders2 = (payload) => {
    console.log("CANCEL_ORDERS called ", payload);
    
    const action = {
        type: types.DENY_ORDERS,
        payload,
    }
    return action;
}

export function denyOrders(id) {

    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee665d20e966a7aa3694954", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {

        y = [...res.data ];
        y = [...y.map(e=>{if(e.id===id) {e.delivery_status = "denied";return e} else {return e} })];
        console.log("new",y);
        
        Axios.put("https://api.jsonbin.io/b/5ee665d20e966a7aa3694954",
        y,
        {
            headers: {
                'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                "versioning": "false",
                "Content-Type": "application/json"
            }
        });
        dispatch(denyOrders2(y));
    }))
}

/*********************** accept Orders*********************************** */
export const acceptOrders2 = (payload) => {
    console.log("ACCEPT_ORDERS called ", payload);
    
    const action = {
        type: types.ACCEPT_ORDERS,
        payload,
    }
    return action;
}

export function acceptOrders(id) {

    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee665d20e966a7aa3694954", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {

        y = [...res.data ];
        y = [...y.map(e=>{if(e.id===id) {e.delivery_status = "delivred";return e} else {return e} })];

        Axios.put("https://api.jsonbin.io/b/5ee665d20e966a7aa3694954",
        y,
        {
            headers: {
                'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                "versioning": "false",
                "Content-Type": "application/json"
            }
        });
        dispatch(acceptOrders2(y));
    }))
}

