// Use to combine reducers
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import contactReducer from "./contactReducer";
import { createNamedWrapperReducer } from "./contactReducer";

const reducers = combineReducers({
  account: accountReducer,
  contact: contactReducer,
  sender: createNamedWrapperReducer(contactReducer, "sender"),
  recipient: createNamedWrapperReducer(contactReducer, "recipient"),
});

export default reducers;















// Use to combine reducers

