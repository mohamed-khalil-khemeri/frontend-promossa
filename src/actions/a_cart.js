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

export const removeFromCart = (_id) => {
    const action = {
        type: types.REMOVE_FROM_CART,
        _id
    }
    console.log("action REMOVE_FROM_CART called : ", action);
    return action;
}
/***********************set quantity action package*********************************** */

export const setQuantity = (_id, quantity) => {
    const action = {
        type: types.SET_QUANTITY,
        _id,
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


export function sendOrder(mags,carted, user) {
    console.log("mail_body", carted);
    let valid_order = { magasins : mags,carted : carted, userInfo: user };
    // console.log("send order called", valid_order);



    /********************update database with new one*********************** */
    return ((dispatch) => Axios.post("/users/mailcarted",
        valid_order,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(dispatch(sendOrder2(valid_order)))
        .catch(err => console.log("error : ", err))
    )

}



