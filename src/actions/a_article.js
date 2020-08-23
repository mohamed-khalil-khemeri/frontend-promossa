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

    return ((dispatch) => Axios.get("/articles", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch(getArticle2(res.data));
    }))
}
/***********************  addCategorie  *********************************** */
export function addArticle(payload) {

    return ((dispatch) => {
        const formData = new FormData();
        formData.append("logo", payload.logo);
        formData.set("name", payload.name);
        formData.set("dosage", payload.dosage);
        formData.set("parent_id", payload.parent_id);
        formData.set("quantity", payload.quantity);


        Axios
            .post("/articles/", formData, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(res =>dispatch(getArticle()))
    })
}


