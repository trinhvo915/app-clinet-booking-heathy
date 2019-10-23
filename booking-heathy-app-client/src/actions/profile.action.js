export const GET_PROFILE = "[PROFILE] GET_PROFILE";
export const GET_PROFILE_SUCCESS = "[PROFILE] GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILED = "[PROFILE] GET_PROFILE_FAILED";

export const getProfile = () => {
  return {
    type: GET_PROFILE
  };
};

export const getProfileSuccess = payload => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload
  };
};

export const getProfileFailed = () => {
  return {
    type: GET_PROFILE_FAILED
  };
};
