import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_PROVINCE,
  getProvincesSuccess,
  getProvincesFailed
} from "../actions/province.list.action";
import { getProvincesApi } from '../util/api/call-api';

function* getProvince() {
  try {
    const payload = yield call(getProvincesApi);
    yield put(getProvincesSuccess(payload));
  } catch (error) {
    yield put(getProvincesFailed());
  }
}

export function* watchProvinceSagasAsync() {
  yield takeLatest(GET_PROVINCE, getProvince);
}
