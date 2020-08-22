import { combineReducers } from 'redux';
import r_magasin from './r_magasin';
import r_categorie from "./r_categorie";
import r_article from "./r_article";
import r_catalogue from "./r_catalogue";
import r_cart from "./r_cart";
import r_current_user from "./r_current_user";
import r_active_article_list from "./r_active_article_list";
import r_register_notification from "./r_register_notification";


const main_r = combineReducers({
    r_magasin,
    r_categorie,
    r_article,
    r_catalogue,
    r_cart,
    r_current_user,
    r_active_article_list,
    r_register_notification


});

export default main_r;
