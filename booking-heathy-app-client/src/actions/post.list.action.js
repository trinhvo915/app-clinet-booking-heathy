export const GET_POST_CLINIC_LIST = "[GET_POST_CLINIC_LIST] GET_POST_CLINIC_LIST";
export const GET_POST_CLINIC_LIST_SUCCESS = "[GET_POST_CLINIC_LIST] GET_POST_CLINIC_LIST_SUCCESS";
export const GET_POST_CLINIC_LIST_SUCCESS_FAILED = "[GET_POST_CLINIC_LIST] GET_POST_CLINIC_LIST_SUCCESS_FAILED";

export const getPostClinicList = params => {
    return {
        type: GET_POST_CLINIC_LIST,
        payload: {
            params
        }
    };
};

export const getPostClinicListSuccess = payload => {
    return {
        type: GET_POST_CLINIC_LIST_SUCCESS,
        payload
    };
};

export const getPostClinicListFailed = () => {
    return {
        type: GET_POST_CLINIC_LIST_SUCCESS_FAILED
    };
};