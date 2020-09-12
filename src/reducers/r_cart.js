import * as types from '../actions/types';

const readls=()=>{
let x = "[]";
    localStorage.getItem("cart")== null ?
    localStorage.setItem("cart",x) :
    x=  localStorage.getItem("cart") ;
    return JSON.parse(x)
}

const r_cart = (state = readls(), action) => {
    

    if (action.type === types.ADD_TO_CART) {
        action.el.quantity = 1;
        console.log("carted : ", [...state, action.el]);

        localStorage.setItem("cart",JSON.stringify([...state, action.el])) ;
        return [...state, action.el]

    } else if (action.type === types.REMOVE_FROM_CART) {
        let y = state.filter(e => e._id !== action._id) ;
        localStorage.setItem("cart",JSON.stringify(y)) ;
        return y ;

    } else if (action.type === types.SET_QUANTITY) {
        let z = state.map(e => {
            if (e._id === action._id) {
                e.quantity = action.quantity; return e
            } else { return e }
        });
        
        localStorage.setItem("cart",JSON.stringify(z)) ;
        return z
    } else if (action.type === types.SEND_ORDER) {
        localStorage.setItem("cart",JSON.stringify([])) ;
        return []
    } else {
        return state
    }
}

export default r_cart;

// [{
//     userInfo: {
//         userId: "0",
//         userName: "khalil",
//         adress: "mourouj",
//         tel: "27145229"
//     },
//     orderInfo: {
//         orderId = "0",
//         order_send_date : "06/06/2006 17:25:36",
//         order_response : "to_deliver",
//         order_response_date : "06/06/2006 17:26:36",
//         order_delivred : "delivred",
//         order_delivery_date : "06/06/2006 17:45:36",

//     },
//     orderProducts: [
//         {originalProductID="1",title:"couscous",price:"25",quantity:"2"},
//         {originalProductID="1",title:"couscous",price:"25",quantity:"2"},
//         {originalProductID="1",title:"couscous",price:"25",quantity:"2"}
//     ]   
// }]