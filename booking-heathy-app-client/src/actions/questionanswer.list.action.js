export const GET_QUESTIONANSWER_LIST = "GET_QUESTIONANSWER_LIST";
export const GET_QUESTIONANSWER_LIST_SUCCESS =
  "GET_QUESTIONANSWER_LIST_SUCCESS";
export const GET_QUESTIONANSWER_LIST_FAILED = "GET_QUESTIONANSWER_LIST_FAILED";

export const getQuestionAnswerList = params => {
  return {
    type: GET_QUESTIONANSWER_LIST,
    payload: {
      params
    }
  };
};
export const getQuestionAnswerListSuccess = payload => {
  return {
    type: GET_QUESTIONANSWER_LIST_SUCCESS,
    payload
  };
};
export const getQuestionAnswerListFailed = () => {
  return {
    type: GET_QUESTIONANSWER_LIST_FAILED
  };
};
