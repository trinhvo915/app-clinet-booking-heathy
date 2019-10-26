export const GET_USER = "[USER] GET_USER";
export const GET_USER_SUCCESS = "[USER] GET_USER_SUCCESS";
export const GET_USER_FAILED = "[USER] GET_USER_FAILED";

export const getUser = () => {
    return {
        type: GET_USER
    };
};

export const getUserSuccess = payload => {
    return {
        type: GET_USER_SUCCESS,
        payload
    };
};

export const getUserFailed = () => {
    return {
        type: GET_USER_FAILED
    };
};