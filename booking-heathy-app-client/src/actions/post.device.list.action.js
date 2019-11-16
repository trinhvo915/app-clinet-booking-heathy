export const GET_POST_DEVICE_CLINIC_LIST = "[GET_POST_CLINIC_LIST] GET_POST_DEVICE_CLINIC_LIST";
export const GET_POST_DEVICE_CLINIC_LIST_SUCCESS = "[GET_POST_CLINIC_LIST] GET_POST_DEVICE_CLINIC_LIST_SUCCESS";
export const GET_POST_DEVICE_CLINIC_LIST_FAILED = "[GET_POST_CLINIC_LIST] GET_POST_DEVICE_CLINIC_LIST_FAILED";

export const getPostDeviceClinicList = params => {
    return {
        type: GET_POST_DEVICE_CLINIC_LIST,
        payload: {
            params
        }
    };
};

export const getPostDeviceClinicListSuccess = payload => {
    return {
        type: GET_POST_DEVICE_CLINIC_LIST_SUCCESS,
        payload
    };
};

export const getPostDeviceClinicListFailed = () => {
    return {
        type: GET_POST_DEVICE_CLINIC_LIST_FAILED
    };
};