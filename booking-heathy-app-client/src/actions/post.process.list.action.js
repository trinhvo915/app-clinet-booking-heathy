export const GET_POST_PROCESS_CLINIC_LIST = "[GET_POST_CLINIC_LIST] GET_POST_PROCESS_CLINIC_LIST";
export const GET_POST_PROCESS_CLINIC_LIST_SUCCESS = "[GET_POST_CLINIC_LIST] GET_POST_PROCESS_CLINIC_LIST_SUCCESS";
export const GET_POST_PROCESS_CLINIC_LIST_FAILED = "[GET_POST_CLINIC_LIST] GET_POST_PROCESS_CLINIC_LIST_FAILED";

export const getPostProcessClinicList = params => {
    return {
        type: GET_POST_PROCESS_CLINIC_LIST,
        payload: {
            params
        }
    };
};

export const getPostProcessClinicListSuccess = payload => {
    return {
        type: GET_POST_PROCESS_CLINIC_LIST_SUCCESS,
        payload
    };
};

export const getPostProcessClinicListFailed = () => {
    return {
        type: GET_POST_PROCESS_CLINIC_LIST_FAILED
    };
};