import * as types from './types';
import Axios from 'axios';


/***********************  getCategorie  *********************************** */
export const getCategorie2 = (payload) => {
    console.log("getCategorie called ", payload);
    
    const action = {
        type: types.GET_CATEGORIE,
        payload,
    }
    return action;
}

export function getCategorie() {

    return ((dispatch) => Axios.get("/categorie", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getCategorie2(res.data));
    }))
}
/***********************  addCategorie  *********************************** */
export function addCategorie(payload) {
    
    return ((dispatch) => Axios.post("/categorie", payload, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getCategorie());
    }))
}

