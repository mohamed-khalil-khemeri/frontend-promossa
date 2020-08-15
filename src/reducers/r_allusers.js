import * as types from '../actions/types';

const r_allusers = (state = [], action) => {

    if (action.type === types.GET_ALL_USERS) {

        return [...action.payload]

    } else {
        return state
        }
}

export default r_allusers;