import * as types from '../actions/types';

const r_users = (state = "none", action) => {

    if (action.type === types.REGISTER_USER) {
        return "none"

    } else if (action.type === types.LOGIN_USER) {
        return action.user

    } else if (action.type === types.LOGOUT_USER) {
        return action.user

    } else {
        return state
    }
}

export default r_users;





























// let firstTemporaryUsersList = [
//     {
//         personal_info: { name: "mohamed", email: "email@gmail.com", tel: "23369685", adress: "mourouj" },
//         commandes_list: 
//         [
//             { id = "0", adress: "mourouj", delivred: "delivred", commande: [{ id: "0", quantity: "2", price_unit: "20" }] },
//             { "second_command"}, { "third_command"}
//         ]
//     },
//     {'second user object'}
// ]