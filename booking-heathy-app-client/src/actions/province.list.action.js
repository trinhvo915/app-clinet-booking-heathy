export const GET_PROVINCE = "[GET_PROVINCE] GET_PROVINCE";
export const GET_PROVINCE_SUCCESS = "[GET_PROVINCE] GET_PROVINCE_SUCCESS";
export const GET_PROVINCE_FAILED = "[GET_PROVINCE] GET_PROVINCE_FAILED";

export const getProvinces = () => {
  return {
    type: GET_PROVINCE
  };
};

export const getProvincesSuccess = payload => {
  return {
    type: GET_PROVINCE_SUCCESS,
    payload
  };
};

export const getProvincesFailed = () => {
  return {
    type: GET_PROVINCE_FAILED
  };
};
