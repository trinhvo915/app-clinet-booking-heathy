import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_POST_INFOR_CLINIC_LIST,
    getPostInforClinicListSuccess,
    getPostInforClinicListFailed
} from "../actions/post.infor.list.action";
import { getPostTypeApi } from '../util/api/call-api';

function* getPostInforList(action) {
  try {
    const payload = yield call(
        getPostTypeApi, action.payload.params
    );
    yield put(getPostInforClinicListSuccess(payload));
  } catch (error) {
    yield put(getPostInforClinicListFailed());
  }
}
export function* watchgetgetPostInforListAsync() {
  yield takeLatest(GET_POST_INFOR_CLINIC_LIST, getPostInforList);
}