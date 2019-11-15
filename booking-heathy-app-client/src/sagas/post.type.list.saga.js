import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_POST_TYPE,
    getPostTypeSuccess,
    getPostTypeFailed
} from "../actions/post.type.list.action";
import { getListPostTypeApi } from '../util/api/call-api';

function* getListPostTypeList() {
  try {
    const payload = yield call(
        getListPostTypeApi
    );
    yield put(getPostTypeSuccess(payload));
  } catch (error) {
    yield put(getPostTypeFailed());
  }
}
export function* watchgetListPostTypeListAsync() {
  yield takeLatest(GET_POST_TYPE, getListPostTypeList);
}