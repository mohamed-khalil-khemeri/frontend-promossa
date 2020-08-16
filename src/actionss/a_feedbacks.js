import * as types from './types';
import Axios from 'axios';

let ffeedbacks =[];
let fid ;

export const getFeedbacks2 = (payload) => {
    
    const action = {
        type: types.GET_FEEDBACKS,
        payload
    }
    return action;
}

export function getFeedbacks() {
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee7de98ccc9877ac37c43ad", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        dispatch(getFeedbacks2(res.data));
    }))
}

/*---------------------------------------add feedback--------------------------------------------------- */
export const addFeedbacks2 = (payload) => {
    
    const action = {
        type: types.ADD_FEEDBACKS,
        payload,
    }
    return action;
}

export function addFeedbacks(feedback) {


    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee7de98ccc9877ac37c43ad", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {

        ffeedbacks =[...res.data];
        fid= ffeedbacks.map(e=>e.id).reduce(function(a, b) {
            return Math.max(a, b);
        });
        fid+=1;
        console.log("fid : ",fid);
        let z= {id : fid,read_status : "unread",...feedback};

        y = [...res.data,z ];
        /********************update database with new one*********************** */
        Axios.put("https://api.jsonbin.io/b/5ee7de98ccc9877ac37c43ad",
            y,
            {
                headers: {
                    'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                    "versioning": "false",
                    "Content-Type": "application/json"
                }
            });
        dispatch(addFeedbacks2(y));
    }))
}
/*--------------------------------------- update_read_status--------------------------------------------------- */
export const update_read_status2 = (payload) => {
    
    const action = {
        type: types.UPDATE_FEEDBACKS,
        payload,
    }
    return action;
}

export function update_read_status(feedback_id) {


    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee7de98ccc9877ac37c43ad", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {

        y = [...res.data];
        y = y.map(e=>{
            if (e.id === feedback_id) {
                e.read_status = "read";
                return e
            }else { return e}}
        )
        /********************update database with new one*********************** */
        Axios.put("https://api.jsonbin.io/b/5ee7de98ccc9877ac37c43ad",
            y,
            {
                headers: {
                    'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                    "versioning": "false",
                    "Content-Type": "application/json"
                }
            });
        dispatch(update_read_status2(y));
    }))
}