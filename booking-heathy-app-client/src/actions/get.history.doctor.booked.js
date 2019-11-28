export const GET_DOCTOR_BOOKER_FOR_USER = "[GET_DOCTOR_BOOKER_FOR_USER] GET_DOCTOR_BOOKER_FOR_USER";
export const GET_DOCTOR_BOOKER_FOR_USER_SUCCESS = "[GET_DOCTOR_BOOKER_FOR_USER] GET_DOCTOR_BOOKER_FOR_USER_SUCCESS";
export const GET_DOCTOR_BOOKER_FOR_USER_FAILED = "[GET_DOCTOR_BOOKER_FOR_USER] GET_DOCTOR_BOOKER_FOR_USER_FAILED";

export const getHistoryDoctor = () => {
    return {
        type: GET_DOCTOR_BOOKER_FOR_USER
    };
};

export const getHistoryDoctorSuccess = payload => {
    return {
        type: GET_DOCTOR_BOOKER_FOR_USER_SUCCESS,
        payload
    };
};

export const getHistoryDoctorFailed = () => {
    return {
        type: GET_DOCTOR_BOOKER_FOR_USER_FAILED
    };
};