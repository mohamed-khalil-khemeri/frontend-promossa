import * as types from '../actions/types';

const r_magasin = (state = [], action) => {

    if (action.type === types.GET_MAGASIN) { 
        return action.payload

    } else {
        return state
    }
}

export default r_magasin;