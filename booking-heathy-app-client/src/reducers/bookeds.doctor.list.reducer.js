import {
    GET_BOOKEDS_DOCTOR_CLINIC_LIST,
    GET_BOOKEDS_DOCTOR_CLINIC_LIST_SUCCESS,
    GET_BOOKEDS_DOCTOR_CLINIC_LIST_FAILED
} from "../actions/booked.doctor.list.action";
  
const initialState = {
    bookedsDoctor: {},
    loading: false,
    failed: false
};

export function bookedsDoctorReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BOOKEDS_DOCTOR_CLINIC_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_BOOKEDS_DOCTOR_CLINIC_LIST_SUCCESS:
        return Object.assign({}, state, {
            bookedsDoctor: action.payload,
          loading: false,
          failed: false
        });
      case GET_BOOKEDS_DOCTOR_CLINIC_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
}
  