import * as types from './types';
import Axios from 'axios';


/***********************  getCatalogue  *********************************** */
export const getCatalogue2 = (payload) => {
    console.log("GET_CATALOGUE called ", payload);

    const action = {
        type: types.GET_CATALOGUE,
        payload,
    }
    return action;
}

export function getCatalogue() {

    return ((dispatch) => Axios.get("/catalogues", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getCatalogue2(res.data));
    }))
}
/***********************  addCatalogue  *********************************** */
export function addCatalogue(payload) {
    console.log("adddddddddd       called ! ", payload);

    return ((dispatch) => Axios.post("/catalogues", payload, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getCatalogue());
    }))
}

/***********************  addArticleToCatalogue  *********************************** */
export function addArticleToCatalogue(_id, payload) {
    console.log("payload   called ! ", payload);
    console.log("_id   called ! ", _id);

    return ((dispatch) =>
        Axios
            .post("/catalogues/promolist/" + _id, payload, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                dispatch(getCatalogue());
            })
            .catch(err => console.log("error : ", err))
    )
}

