// Reducers are responsible to manage and
// update the state for our application when
// an action happens.

import { combineReducers } from "redux";
import todos from "./todos";
import user from "./user";

const rootReducer = combineReducers({
  todos,
  user
});

export default rootReducer;
