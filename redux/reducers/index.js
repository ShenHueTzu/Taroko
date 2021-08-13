import { combineReducers } from "redux";
import list from "./list";
import common from "./common";

const rootReducer = combineReducers({
  list,
  common,
});

export default rootReducer;
