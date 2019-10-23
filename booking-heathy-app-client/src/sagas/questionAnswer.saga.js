import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_QUESTIONANSWER_LIST,
  getQuestionAnswerListSuccess,
  getQuestionAnswerListFailed
} from "../actions/questionanswer.list.action";
import Api from "../api/api.questionanswer";

function* getQuestionAnswerList(action) {
  try {
    const payload = yield call(
      Api.getQuestionAnswerList,
      action.payload.params
    );
    yield put(getQuestionAnswerListSuccess(payload));
  } catch (error) {
    yield put(getQuestionAnswerListFailed());
  }
}
export function* watchQuestionAnswerSagasAsync() {
  yield takeLatest(GET_QUESTIONANSWER_LIST, getQuestionAnswerList);
}
