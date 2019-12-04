import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_PRICES_CLINIC_LIST,
    getPricesClinicListSuccess,
    getPricesClinicListFailed
} from "../actions/price.list.action";
import { getPricesApi } from '../util/api/call-api';

function* getPricesList(action) {
  try {
    const payload = yield call(
        getPricesApi, action.payload.params
    );
    yield put(getPricesClinicListSuccess(payload));
  } catch (error) {
    yield put(getPricesClinicListFailed());
  }
}

export function* watchGetPricesListAsync() {
  yield takeLatest(GET_PRICES_CLINIC_LIST, getPricesList);
}