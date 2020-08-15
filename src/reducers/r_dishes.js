import * as types from '../actions/types';

const r_dishes = (state = [], action) => {

    if (action.type === types.GET_DISHES) {
        return action.payload

    } else if (action.type === types.ADD_DISHES) {
        return action.payload
    } else if (action.type === types.UPDATE_DISHES) {
        return action.payload
    } else {
        return state
    }
}

export default r_dishes;


































// let firstTemporaryDishesList = [
//     {
//         "id": 0,
//         "title": "couscous",
//         "img": "https://www.diari.tn/sites/default/files/image/recette/couscous-viande_0.jpg",
//         "unitPrice": 25
//     },
//     {
//         "id": 1,
//         "title": "tajin",
//         "img": "https://www.simpleetgourmand.fr/wp-content/uploads/tajine-tunisien-thon_01.jpg",
//         "unitPrice": 30
//     },
//     {
//         "id": 2,
//         "title": "salade mechwiya",
//         "img": "https://www.cuisinetunisienne.tn/wp-content/uploads/2019/03/Recette-Salade-Mechouia-1080x810.jpg",
//         "unitPrice": 10
//     }
// ]
