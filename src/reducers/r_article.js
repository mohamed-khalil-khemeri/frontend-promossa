import * as types from '../actions/types';

const r_categorie = (state = [], action) => {

    if (action.type === types.GET_ARTICLE) { 
        return action.payload

    } else {
        return state
    }
}

export default r_categorie;