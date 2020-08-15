import * as types from '../actions/types';

const r_feedbacks = (state = [], action) => {

    if (action.type === types.GET_FEEDBACKS) {
        return action.payload

    } else if (action.type === types.ADD_FEEDBACKS) {
        return action.payload
        
    } else if (action.type === types.UPDATE_FEEDBACKS) {
        return action.payload

    } else {
        return state
    }
}

export default r_feedbacks;