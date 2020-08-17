import * as types from './types';
import Axios from 'axios';


/***********************  getCategorie  *********************************** */
export const getCatalogue2 = (payload) => {
    console.log("GET_CATALOGUE called ", payload);
    
    const action = {
        type: types.GET_CATALOGUE,
        payload,
    }
    return action;
}

export function getCatalogue() {

    return ((dispatch) => Axios.get("http://localhost:3001/catalogue", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getCatalogue2(res.data));
    }))
}
/***********************  addCategorie  *********************************** */
export function addCatalogue(payload) {
    
    return ((dispatch) => Axios.post("http://localhost:3001/catalogue", payload, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getCatalogue());
    }))
}

