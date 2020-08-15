import * as types from './types';
import Axios from 'axios';

let xxdishes =[];
let xid ;


export const getDishesFromApi = (payload) => {
    xxdishes =[...payload];
    xid= xxdishes.map(e=>e.id).reduce(function(a, b) {
        return Math.max(a, b);
    });
    xid+=1;
    console.log("xid : ",xid);
    
    const action = {
        type: types.GET_DISHES,
        payload
    }
    return action;
}

export function getDishes() {
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ed8b2b52f5fd957fda3933e", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        dispatch(getDishesFromApi(res.data));
    }))
}
/*---------------------------------------add dish---------ADD_DISHES------------------------------------------ */
export const addDish2 = (payload) => {
    
    const action = {
        type: types.ADD_DISHES,
        payload,
    }
    return action;
}

export function addDish(dish) {

    let z= {id:xid,...dish};
    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ed8b2b52f5fd957fda3933e", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        y = [...res.data,z ];
        /********************update database with new one*********************** */
        Axios.put("https://api.jsonbin.io/b/5ed8b2b52f5fd957fda3933e",
            y,
            {
                headers: {
                    'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                    "versioning": "false",
                    "Content-Type": "application/json"
                }
            });
        dispatch(addDish2(y));
    }))
}

/*------------------------------------------------UPDATE_DISHES------------------------------------------ */
export const updateDish2 = (payload) => {
    
    const action = {
        type: types.UPDATE_DISHES,
        payload,
    }
    return action;
}

export function updateDish(dish) {

    let x;
    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ed8b2b52f5fd957fda3933e", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        x = res.data.filter(e=>(e.id !== dish.id)); y = [...x,dish];
        /********************update database with new one*********************** */
        Axios.put("https://api.jsonbin.io/b/5ed8b2b52f5fd957fda3933e",
            y,
            {
                headers: {
                    'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                    "versioning": "false",
                    "Content-Type": "application/json"
                }
            });
        dispatch(updateDish2(y));
    }))
}