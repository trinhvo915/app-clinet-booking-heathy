export const GET_JOB_LIST = "[JOB_LIST] GET_JOB_LIST";
export const GET_JOB_LIST_SUCCESS =
  "[JOB_LIST] GET_JOB_LIST_SUCCESS";
export const GET_JOB_LIST_FAILED =
  "[JOB_LIST] GET_JOB_LIST_FAILED";

export const getJobList = params => {
  return {
    type: GET_JOB_LIST,
    payload: {
      params
    }
  };
};

export const getJobListSuccess = payload => {
  return {
    type: GET_JOB_LIST_SUCCESS,
    payload
  };
};

export const getJobListFailed = () => {
  return {
    type: GET_JOB_LIST_FAILED
  };
};
