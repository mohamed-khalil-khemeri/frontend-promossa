import { combineReducers } from 'redux';
import r_dishes from './r_dishes';
import r_users from "./r_users";
import r_allusers from "./r_allusers";
import r_cart from './r_cart';
import r_orders from './r_orders';
import r_feedbacks from './r_feedbacks';

const main_r = combineReducers({
  r_dishes,
  r_users,
  r_cart,
  r_orders,
  r_allusers,
  r_feedbacks

});

export default main_r;
