import { all, fork } from "redux-saga/effects";
import { watchUserAsync } from "./user.saga";
import {watchDoctorListAsync} from "./doctor.list.saga";
import {watchDoctorsOfClinicListAsync} from "./doctorofclinic.list.saga";

export default function* sagas() {
  yield all([
    fork(watchUserAsync),
    fork(watchDoctorListAsync),
    fork(watchDoctorsOfClinicListAsync)
  ]);
}
