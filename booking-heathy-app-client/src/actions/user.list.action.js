export const GET_USER_LIST = "[USER_LIST] GET_USER_LIST";
export const GET_USER_LIST_SUCCESS = "[USER_LIST] GET_USER_LIST_SUCCESS";
export const GET_USER_LIST_FAILED = "[USER_LIST] GET_USER_LIST_FAILED";

export const getUserList = params => {
    return {
        type: GET_USER_LIST,
        payload: {
            params
        }
    };
};

export const getUserListSuccess = payload => {
    return {
        type: GET_USER_LIST_SUCCESS,
        payload
    };
};

export const getUserListFailed = () => {
    return {
        type: GET_USER_LIST_FAILED
    };
};