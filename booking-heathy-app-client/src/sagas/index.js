import { all, fork } from "redux-saga/effects";
import { watchFacultySagasAsync } from "./faculty.saga";

export default function* sagas() {
  yield all([
    fork(watchFacultySagasAsync)

  ]);
}
