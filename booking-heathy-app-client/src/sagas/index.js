import { all, fork } from "redux-saga/effects";
import { watchUserAsync } from "./user.saga";

export default function* sagas() {
  yield all([
    fork(watchUserAsync)
  ]);
}
