import * as types from '../actions/types';

const r_active_article_list = (state = [], action) => {

    if (action.type === types.SET_ACTIVE_ARICLE_LIST) { 
        return action.payload

    } else {
        return state
    }
}

export default r_active_article_list;