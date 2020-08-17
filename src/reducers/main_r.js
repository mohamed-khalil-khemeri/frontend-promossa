import { combineReducers } from 'redux';
import r_magasin from './r_magasin';
import r_categorie from "./r_categorie";
import r_article from "./r_article";
import r_catalogue from "./r_catalogue";


const main_r = combineReducers({
    r_magasin,
    r_categorie,
    r_article,
    r_catalogue,


});

export default main_r;
