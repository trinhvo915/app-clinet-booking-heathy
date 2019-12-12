export const GET_DOCTOR_SEARCH_LIST = "[GET_DOCTOR_SEARCH_LIST] GET_DOCTOR_SEARCH_LIST";
export const GET_DOCTOR_SEARCH_LIST_SUCCESS = "[GET_DOCTOR_SEARCH_LIST] GET_DOCTOR_SEARCH_LIST_SUCCESS";
export const GET_DOCTOR_SEARCH_LIST_FAILED = "[GET_DOCTOR_SEARCH_LIST] GET_DOCTOR_SEARCH_LIST_FAILED";

export const getDoctorSearchList = params => {
    return {
        type: GET_DOCTOR_SEARCH_LIST,
        payload: {
            params
        }
    };
};

export const getDoctorSearchListSuccess = payload => {
    return {
        type: GET_DOCTOR_SEARCH_LIST_SUCCESS,
        payload
    };
};

export const getDoctorSearchListFailed = () => {
    return {
        type: GET_DOCTOR_SEARCH_LIST_FAILED
    };
};