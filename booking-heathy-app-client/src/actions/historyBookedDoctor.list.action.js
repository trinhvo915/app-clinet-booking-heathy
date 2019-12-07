export const GET_HISTORY_BOOKED_DOCTOR_LIST = "[DOCTOR_LIST] GET_HISTORY_BOOKED_DOCTOR_LIST";
export const GET_HISTORY_BOOKED_DOCTOR_LIST_SUCCESS = "[DOCTOR_LIST] GET_HISTORY_BOOKED_DOCTOR_LIST_SUCCESS";
export const GET_HISTORY_BOOKED_DOCTOR_LIST_FAILED = "[DOCTOR_LIST] GET_HISTORY_BOOKED_DOCTOR_LIST_FAILED";

export const getHistoryBookedDoctorList = () => {
    return {
        type: GET_HISTORY_BOOKED_DOCTOR_LIST,
    };
};

export const getHistoryBookedDoctorListSuccess = payload => {
    return {
        type: GET_HISTORY_BOOKED_DOCTOR_LIST_SUCCESS,
        payload
    };
};

export const getHistoryBookedDoctorListFailed = () => {
    return {
        type: GET_HISTORY_BOOKED_DOCTOR_LIST_FAILED
    };
};