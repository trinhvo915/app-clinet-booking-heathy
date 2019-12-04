export const GET_BOOKEDS_DOCTOR_CLINIC_LIST = "[GET_BOOKEDS_DOCTOR_CLINIC_LIST] GET_BOOKEDS_DOCTOR_CLINIC_LIST";
export const GET_BOOKEDS_DOCTOR_CLINIC_LIST_SUCCESS = "[GET_BOOKEDS_DOCTOR_CLINIC_LIST] GET_BOOKEDS_DOCTOR_CLINIC_LIST_SUCCESS";
export const GET_BOOKEDS_DOCTOR_CLINIC_LIST_FAILED = "[GET_BOOKEDS_DOCTOR_CLINIC_LIST] GET_BOOKEDS_DOCTOR_CLINIC_LIST_FAILED";

export const getBookedsDoctorList = params => {
    return {
        type: GET_BOOKEDS_DOCTOR_CLINIC_LIST,
        payload: {
            params
        }
    };
};

export const getBookedsDoctorListSuccess = payload => {
    return {
        type: GET_BOOKEDS_DOCTOR_CLINIC_LIST_SUCCESS,
        payload
    };
};

export const getBookedsDoctorListFailed = () => {
    return {
        type: GET_BOOKEDS_DOCTOR_CLINIC_LIST_FAILED
    };
};