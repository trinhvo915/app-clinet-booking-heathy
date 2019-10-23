export const GET_CALENDAR_TYPE_LIST = "[CALENDAR_TYPE_LIST] GET_CALENDAR_TYPE_LIST";
export const GET_CALENDAR_TYPE_LIST_SUCCESS =
  "[CALENDAR_TYPE_LIST] GET_CALENDAR_TYPE_LIST_SUCCESS";
export const GET_CALENDAR_TYPE_LIST_FAILED =
  "[CALENDAR_TYPE_LIST] GET_CALENDAR_TYPE_LIST_FAILED";

export const getCalendarTypeList = (params) =>{
    return {
        type : GET_CALENDAR_TYPE_LIST,
        payload : {
            params
        }
    }
}

export const getCalendarTypeListSuccess = params =>{
    return {
        type : GET_CALENDAR_TYPE_LIST_SUCCESS,
        payload : params
    }
}

export const getCalendarTypeListFailed = () =>{
    return {
        type : GET_CALENDAR_TYPE_LIST_FAILED
    }
}
