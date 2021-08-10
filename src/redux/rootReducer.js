import { combineReducers } from "redux";
import userReducer from "./userRedux/userReducer";
import cartReducer from "./cartRedux/cartReducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});