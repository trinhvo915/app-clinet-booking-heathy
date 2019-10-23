export const GET_CALENDAR_BY_USER = "[CALENDAR_BY_USER] GET_CALENDAR_BY_USER";
export const GET_CALENDAR_BY_USER_SUCCESS =
  "[CALENDAR_BY_USER] GET_CALENDAR_BY_USER_SUCCESS";
export const GET_CALENDAR_BY_USER_FAILED =
  "[CALENDAR_BY_USER] GET_CALENDAR_BY_USER_FAILED";
export const getCalendarByUser = params => {
  return {
    type: GET_CALENDAR_BY_USER,
    payload: {
      params
    }
  };
};

export const getCalendarByUserSuccess = payload => {
  return {
    type: GET_CALENDAR_BY_USER_SUCCESS,
    payload
  };
};

export const getCalendarByUserFailed = () => {
  return {
    type: GET_CALENDAR_BY_USER_FAILED
  };
};
