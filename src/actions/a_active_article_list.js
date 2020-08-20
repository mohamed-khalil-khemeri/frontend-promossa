import * as types from './types';



/***********************  getCategorie  *********************************** */
export const set_active_article_list = (payload) => {
    console.log("set_active_article_list called ! ", payload);
    
    const action = {
        type: types.SET_ACTIVE_ARICLE_LIST,
        payload,
    }
    return action;
}
