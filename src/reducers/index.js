import hobbyReducer from "./hobby";
import { combineReducer } from "redux";
import userReducer from "./user";

export default rootReducer = combineReducer({
  hobby: hobbyReducer,
  user: userReducer,
});
