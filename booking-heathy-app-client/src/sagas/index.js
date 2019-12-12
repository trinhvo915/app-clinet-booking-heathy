import { all, fork } from "redux-saga/effects";
import { watchUserAsync } from "./user.saga";
import {watchDoctorListAsync} from "./doctor.list.saga";
import {watchDoctorsOfClinicListAsync} from "./doctorofclinic.list.saga";
import {watchgetCommentDoctorListAsync} from "./comment.list.saga";
import {watchgetPostClinicListAsync} from "./post.list.saga";

import {watchgetListPostTypeListAsync} from "./post.type.list.saga";
import {watchgetgetPostDeviceListAsync} from "./post.device.list.saga";
import {watchgetgetPostInforListAsync} from "./post.infor.list.saga";
import {watchgetPostProcessListAsync} from "./post.process.list.saga";
import {watchGetPricesListAsync} from "./price.list.saga";
import {watchGetBookedsDoctorListAsync} from "./bookeds.doctor.list.saga";
import {watchHistoryBookedDoctorListAsync} from "./history.booked.list.saga";
import {watchProfileSagasAsync} from "./profile.saga";
import {watchProvinceSagasAsync} from "./province.list.saga";
import {watchDistristListSagaAsync} from "./distrits.list.saga";
import {watchDoctorSearchListAsync} from "./search.doctor.list.saga";

export default function* sagas() {
  yield all([
    fork(watchUserAsync),
    fork(watchDoctorListAsync),
    fork(watchDoctorsOfClinicListAsync),
    fork(watchgetCommentDoctorListAsync),
    fork(watchgetListPostTypeListAsync),
    fork(watchgetPostClinicListAsync),

    fork(watchgetgetPostDeviceListAsync),
    fork(watchgetgetPostInforListAsync),
    fork(watchgetPostProcessListAsync),
    fork(watchGetPricesListAsync),
    fork(watchGetBookedsDoctorListAsync),
    fork(watchHistoryBookedDoctorListAsync),
    fork(watchProfileSagasAsync),
    fork(watchProvinceSagasAsync),
    fork(watchDistristListSagaAsync),
    fork(watchDoctorSearchListAsync),
  ]);
}
