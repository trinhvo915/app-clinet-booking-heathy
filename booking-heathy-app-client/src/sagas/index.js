import { all, fork } from "redux-saga/effects";
import { watchUserAsync } from "./user.saga";
import {watchDoctorListAsync} from "./doctor.list.saga";
export default function* sagas() {
  yield all([
    fork(watchUserAsync),
    fork(watchDoctorListAsync)
  ]);
}
