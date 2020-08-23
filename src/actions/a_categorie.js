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

    return ((dispatch) => Axios.get("/categories", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getCategorie2(res.data));
    }))
}
/***********************  addCategorie  *********************************** */
export function addCategorie(payload) {

    return ((dispatch) => {
        const formData = new FormData();
        formData.append("logo", payload.logo);
        formData.set("name", payload.name);
        formData.set("parent_id", payload.parent_id);


        Axios
            .post("/categories/", formData, {
                headers: {
                    "content-type": "multipart/form-data",
                }
            })
            .then(res => {
                dispatch(getCategorie());
            })
    })
}

