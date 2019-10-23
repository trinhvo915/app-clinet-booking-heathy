import { all, fork } from "redux-saga/effects";
// import { watchProfileSagasAsync } from "./profile.saga";

export default function* sagas() {
  yield all([
    // fork(watchProfileSagasAsync)
  ]);
}
