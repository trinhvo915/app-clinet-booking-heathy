export const GET_DISTRIST_LIST = "[GET_DISTRIST_LIST] GET_DISTRIST_LIST";
export const GET_DISTRIST_LIST_SUCCESS = "[GET_DISTRIST_LIST] GET_DISTRIST_LIST_SUCCESS";
export const GET_DISTRIST_LIST_FAILED = "[GET_DISTRIST_LIST] GET_DISTRIST_LIST_FAILED";

export const getDistristList = params => {
    return {
        type: GET_DISTRIST_LIST,
        payload: {
            params
        }
    };
};

export const getDistristListSuccess = payload => {
    return {
        type: GET_DISTRIST_LIST_SUCCESS,
        payload
    };
};

export const getDistristListFailed = () => {
    return {
        type: GET_DISTRIST_LIST_FAILED
    };
};