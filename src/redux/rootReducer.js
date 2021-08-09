import { combineReducers } from "redux";
import userReducer from "./userRedux/userReducer";

export default combineReducers({
    user: userReducer
});