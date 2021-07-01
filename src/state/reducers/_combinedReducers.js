// Use to combine reducers
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import contactReducer from "./contactReducer";

const reducers = combineReducers({
  account: accountReducer,
  contact: contactReducer,
  sender: contactReducer
  //another account
});

export default reducers;















// Use to combine reducers

