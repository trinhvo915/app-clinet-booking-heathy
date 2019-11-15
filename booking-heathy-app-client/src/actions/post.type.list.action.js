export const GET_POST_TYPE = "[GET_POST_TYPE] GET_POST_TYPE";
export const GET_POST_TYPE_SUCCESS =
  "[GET_POST_TYPE] GET_POST_TYPE_SUCCESS";
export const GET_POST_TYPE_FAILED =
  "[GET_POST_TYPE] GET_POST_TYPE_FAILED";

export const getPostType = () => {
  return {
    type: GET_POST_TYPE
  };
};

export const getPostTypeSuccess = payload => {
  return {
    type: GET_POST_TYPE_SUCCESS,
    payload
  };
};

export const getPostTypeFailed = () => {
  return {
    type: GET_POST_TYPE_FAILED
  };
};
