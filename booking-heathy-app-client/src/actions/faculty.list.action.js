export const GET_FACULTY = "[GET_FACULTY] GET_FACULTY";
export const GET_FACULTY_SUCCESS =
  "[GET_FACULTY] GET_FACULTYSUCCESS";
export const GET_FACULTY_FAILED =
  "[GET_FACULTY] GET_FACULTY_FAILED";

export const getFaculty = () => {
  return {
    type: GET_FACULTY
  };
};

export const getFacultySuccess = payload => {
  return {
    type: GET_FACULTY_SUCCESS,
    payload
  };
};

export const getFacultyFailed = () => {
  return {
    type: GET_FACULTY_FAILED
  };
};
