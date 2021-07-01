// Use to combine reducers
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import senderReducer from "./senderReducer";

const reducers = combineReducers({
  account: accountReducer,
  sender: senderReducer
  //another account
});

export default reducers;















// Use to combine reducers

