export const GET_DOCTOR_LIST = "[DOCTOR_LIST] GET_DOCTOR_LIST";
export const GET_DOCTOR_LIST_SUCCESS = "[DOCTOR_LIST] GET_DOCTOR_LIST_SUCCESS";
export const GET_DOCTOR_LIST_FAILED = "[DOCTOR_LIST] GET_DOCTOR_LIST_FAILED";

export const getDoctorList = params => {
    return {
        type: GET_DOCTOR_LIST,
        payload: {
            params
        }
    };
};

export const getDoctorListSuccess = payload => {
    return {
        type: GET_DOCTOR_LIST_SUCCESS,
        payload
    };
};

export const getDoctorListFailed = () => {
    return {
        type: GET_DOCTOR_LIST_FAILED
    };
};