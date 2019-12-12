import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_DISTRIST_LIST,
    getDistristListSuccess,
    getDistristListFailed
} from "../actions/distrits.list.action";
import { getDistritsApi } from '../util/api/call-api';

function* getDistrits(action) {
    try {
        const payload = yield call(getDistritsApi, action.payload.params);
        yield put(getDistristListSuccess(payload));
    } catch(err) {
        yield put(getDistristListFailed());
    }
}

export function* watchDistristListSagaAsync() {
    yield takeLatest(GET_DISTRIST_LIST, getDistrits);
}
