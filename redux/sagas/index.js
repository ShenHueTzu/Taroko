import { all } from "redux-saga/effects";
import list from "./list";

function* rootSage() {
  yield all([
    ...list,
  ]);
}

export default rootSage;
