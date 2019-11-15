import { all, fork } from "redux-saga/effects";
import { watchUserAsync } from "./user.saga";
import {watchDoctorListAsync} from "./doctor.list.saga";
import {watchDoctorsOfClinicListAsync} from "./doctorofclinic.list.saga";
import {watchgetCommentDoctorListAsync} from "./comment.list.saga";

import {watchgetListPostTypeListAsync} from "./post.type.list.saga";
export default function* sagas() {
  yield all([
    fork(watchUserAsync),
    fork(watchDoctorListAsync),
    fork(watchDoctorsOfClinicListAsync),
    fork(watchgetCommentDoctorListAsync),
    fork(watchgetListPostTypeListAsync),
  ]);
}
