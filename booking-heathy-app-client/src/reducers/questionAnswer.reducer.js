import {
  GET_QUESTIONANSWER_LIST,
  GET_QUESTIONANSWER_LIST_SUCCESS,
  GET_QUESTIONANSWER_LIST_FAILED
} from "../actions/questionanswer.list.action";

const initialState = {
  questionAnswerList: {},
  loading: false,
  failed: false
};
export function questionAnswerListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONANSWER_LIST:
      return Object.assign({}, state, {
        loading: true,
        failed: false
      });
    case GET_QUESTIONANSWER_LIST_SUCCESS:
      return Object.assign({}, state, {
        questionAnswerList: action.payload,
        loading: false,
        failed: false
      });
    case GET_QUESTIONANSWER_LIST_FAILED:
      return Object.assign({}, state, {
        loading: false,
        failed: true
      });
    default:
      return state;
  }
}
