export const GET_PRICES_CLINIC_LIST = "[GET_PRICES_CLINIC_LIST] GET_PRICES_CLINIC_LIST";
export const GET_PRICES_CLINIC_LIST_SUCCESS = "[GET_PRICES_CLINIC_LIST] GET_PRICES_CLINIC_LIST_SUCCESS";
export const GET_PRICES_CLINIC_LIST_FAILED = "[GET_PRICES_CLINIC_LIST] GET_PRICES_CLINIC_LIST_FAILED";

export const getPricesClinicList = params => {
    return {
        type: GET_PRICES_CLINIC_LIST,
        payload: {
            params
        }
    };
};

export const getPricesClinicListSuccess = payload => {
    return {
        type: GET_PRICES_CLINIC_LIST_SUCCESS,
        payload
    };
};

export const getPricesClinicListFailed = () => {
    return {
        type: GET_PRICES_CLINIC_LIST_FAILED
    };
};