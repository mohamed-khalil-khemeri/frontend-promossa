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

/***********************  addArticleToCatalogue  *********************************** */
export function addArticleToCatalogue(payload) {
    console.log("addArticleToCatalogue   called ! ",payload);

    let updated_catalogue = {...payload.catalogue};
    updated_catalogue.promoList = [...updated_catalogue.promoList,{"article" : {...payload.article},"promo" : {...payload.promo}, "pricing" : {...payload.pricing}}]

    return ((dispatch) => Axios.put("http://localhost:3001/catalogue/"+payload.cataid, updated_catalogue, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getCatalogue());
    }))
}

