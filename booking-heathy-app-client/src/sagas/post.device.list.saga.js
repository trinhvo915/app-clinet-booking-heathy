import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_POST_DEVICE_CLINIC_LIST,
    getPostDeviceClinicListSuccess,
    getPostDeviceClinicListFailed
} from "../actions/post.device.list.action";
import { getPostTypeApi } from '../util/api/call-api';

function* getPostDeviceList(action) {
  try {
    const payload = yield call(
        getPostTypeApi, action.payload.params
    );
    yield put(getPostDeviceClinicListSuccess(payload));
  } catch (error) {
    yield put(getPostDeviceClinicListFailed());
  }
}
export function* watchgetgetPostDeviceListAsync() {
  yield takeLatest(GET_POST_DEVICE_CLINIC_LIST, getPostDeviceList);
}