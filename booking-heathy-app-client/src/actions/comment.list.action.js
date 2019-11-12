export const GET_COMMENT_DOCTOR_CLINIC_LIST = "[DOCTOR_LIST] GET_COMMENT_DOCTOR_CLINIC_LIST";
export const GET_COMMENT_DOCTOR_CLINIC_LIST_SUCCESS = "[DOCTOR_LIST] GET_COMMENT_DOCTOR_CLINIC_LIST_SUCCESS";
export const GET_COMMENT_DOCTOR_CLINIC_LIST_LIST_FAILED = "[DOCTOR_LIST] GET_COMMENT_DOCTOR_CLINIC_LIST_LIST_FAILED";

export const getCommentDoctorClinicList = params => {
    return {
        type: GET_COMMENT_DOCTOR_CLINIC_LIST,
        payload: {
            params
        }
    };
};

export const getCommentDoctorClinicListSuccess = payload => {
    return {
        type: GET_COMMENT_DOCTOR_CLINIC_LIST_SUCCESS,
        payload
    };
};

export const getCommentDoctorClinicListFailed = () => {
    return {
        type: GET_COMMENT_DOCTOR_CLINIC_LIST_LIST_FAILED
    };
};