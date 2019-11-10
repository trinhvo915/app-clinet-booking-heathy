import { combineReducers } from "redux";
import { facultyListReducer } from "./faculty.list.reducer";
import { userReducer } from "./user.reducer";
import { doctorsReducer} from "./doctor.list.reducer";
import {clinicReducer} from "./doctorsOfClinic.list.reducer";
  
export default combineReducers({
  facultyList : facultyListReducer,
  user : userReducer,
  doctors :doctorsReducer,
  clinic : clinicReducer,
});
