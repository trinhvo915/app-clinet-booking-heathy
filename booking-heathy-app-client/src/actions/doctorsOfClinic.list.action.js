export const GET_DOCTOR_OF_CLINIC_LIST = "[DOCTOR_LIST] GET_DOCTOR_OF_CLINIC_LIST";
export const GET_DOCTOR_OF_CLINIC_LIST_SUCCESS = "[DOCTOR_LIST] GET_DOCTOR_OF_CLINIC_LIST_SUCCESS";
export const GET_DOCTOR_OF_CLINIC_LIST_FAILED = "[DOCTOR_LIST] GET_DOCTOR_OF_CLINIC_LIST_FAILED";

export const getDoctorOfClinicList = params => {
    return {
        type: GET_DOCTOR_OF_CLINIC_LIST,
        payload: {
            params
        }
    };
};

export const getDoctorOfClinicListSuccess = payload => {
    return {
        type: GET_DOCTOR_OF_CLINIC_LIST_SUCCESS,
        payload
    };
};

export const getDoctorOfClinicListFailed = () => {
    return {
        type: GET_DOCTOR_OF_CLINIC_LIST_FAILED
    };
};