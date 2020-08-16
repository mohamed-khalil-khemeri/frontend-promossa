import * as types from './types';
import Axios from 'axios';


/***********************  GET_MAGASIN  *********************************** */
export const getMagasin2 = (payload) => {
    console.log("GET_MAGASIN called ", payload);
    
    const action = {
        type: types.GET_MAGASIN,
        payload,
    }
    return action;
}

export function getMagasin() {

    return ((dispatch) => Axios.get("http://localhost:3001/magasin", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getMagasin2(res.data));
    }))
}
/***********************  ADD_MAGASIN  *********************************** */
export function addMagasin(payload) {
    
    return ((dispatch) => Axios.post("http://localhost:3001/magasin", payload, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getMagasin());
    }))
}

