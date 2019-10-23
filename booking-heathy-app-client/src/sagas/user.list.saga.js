import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_USER_LIST,
    getUserListSuccess,
    getUserListFailed
} from "../actions/user.list.action";
import Api from "../api/api.user";

function* getAllUser(action) {
    try {
        const payload = yield call(Api.getAllUser, action.payload.params);
        yield put(getUserListSuccess(payload));
    } catch(err) {
        yield put(getUserListFailed());
    }
}

export function* watchUserListSagaAsync() {
    yield takeLatest(GET_USER_LIST, getAllUser);
}
