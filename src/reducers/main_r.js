import { combineReducers } from 'redux';
import r_magasin from './r_magasin';
import r_categorie from "./r_categorie";


const main_r = combineReducers({
    r_magasin,
    r_categorie


});

export default main_r;
