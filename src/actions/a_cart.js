import * as types from './types';
import Axios from 'axios';

let oid;
let olist = [];

/***********************add to cart action package*********************************** */

export const addToCart = (element) => {
    const action = {
        type: types.ADD_TO_CART,
        el: element
    }
    console.log("action ADD_TO_CART called : ", action);
    return action;
}
/***********************remove from cart action package*********************************** */

export const removeFromCart = (id) => {
    const action = {
        type: types.REMOVE_FROM_CART,
        id
    }
    console.log("action REMOVE_FROM_CART called : ", action);
    return action;
}
/***********************set quantity action package*********************************** */

export const setQuantity = (id, quantity) => {
    const action = {
        type: types.SET_QUANTITY,
        id,
        quantity
    }
    console.log("action SET_QUANTITY called : ", action);
    return action;
}

/*********************** post order action package*********************************** */
export const sendOrder2 = (order) => {
    console.log("send order 2 called ", order);

    const action = {
        type: types.SEND_ORDER,
        order,
    }
    return action;
}

export function sendOrder(order, user) {

    let valid_order = { delivery_status: "pending", orderDishes: [...order], userInfo: user };
    console.log("send order called", valid_order);

    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5f0475685d4af74b012801aa", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        olist = [...res.data];
        oid = olist.map(e => e.id).reduce(function (a, b) {
            return Math.max(a, b);
        });
        oid += 1;
        console.log("oid : ", oid);
        valid_order = { id: oid, ...valid_order };
        y = [...res.data, valid_order];
        /********************update database with new one*********************** */
        Axios.put("https://api.jsonbin.io/b/5f0475685d4af74b012801aa",
            y,
            {
                headers: {
                    'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                    "versioning": "false",
                    "Content-Type": "application/json"
                }
            });
        dispatch(sendOrder2(valid_order));
    }))
}
