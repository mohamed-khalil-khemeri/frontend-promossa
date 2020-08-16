import * as types from './types';
import Axios from 'axios';


/***********************  getCategorie  *********************************** */
export const getArticle2 = (payload) => {
    console.log("GET_ARTICLE called ", payload);
    
    const action = {
        type: types.GET_ARTICLE,
        payload,
    }
    return action;
}

export function getArticle() {

    return ((dispatch) => Axios.get("http://localhost:3001/article", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getArticle2(res.data));
    }))
}
/***********************  addCategorie  *********************************** */
export function addArticle(payload) {
    
    return ((dispatch) => Axios.post("http://localhost:3001/article", payload, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getArticle());
    }))
}

