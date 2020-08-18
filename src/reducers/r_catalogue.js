import * as types from '../actions/types';

const r_catalogue = (state = [], action) => {

    if (action.type === types.GET_CATALOGUE) { 
        return action.payload

    } else {
        return state
    }
}

export default r_catalogue;