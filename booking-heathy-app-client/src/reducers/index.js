import { combineReducers } from "redux";
import { facultyListReducer } from "./faculty.list.reducer";
import { userReducer } from "./user.reducer";
import { doctorsReducer} from "./doctor.list.reducer";
import {clinicReducer} from "./doctorsOfClinic.list.reducer";
import {commentReducer} from "./comment.list.reducer";
import {postTypeReducer} from "./post.type.list.reducer";
import {postClinicReducer} from "./post.list.reducer";
import {postInforReducer} from "./post.infor.list.reducer";
import {postProcessReducer} from "./post.process.list.reducer";
import {postDeviceReducer} from "./post.device.list.reducer";
import {pricesReducer} from "./price.list.reducer";
import {bookedsDoctorReducer} from "./bookeds.doctor.list.reducer";
import {historyBookedDoctorReducer} from "./history.booked.doctor.reducer";
import {profileReducer} from "./profile.reducer";
import {provinceReducer} from "./province.reducer";
import {distritsReducer} from "./distrist.reducer";
import {searchDoctorsReducer} from "./search.doctor.list.reducer";

export default combineReducers({
  facultyList : facultyListReducer,
  user : userReducer,
  doctors :doctorsReducer,
  clinic : clinicReducer,
  comments : commentReducer,
  postTypes : postTypeReducer,
  postClinics : postClinicReducer,
  postInfors : postInforReducer,
  postProcess: postProcessReducer,
  postDevices : postDeviceReducer,
  prices : pricesReducer,
  bookedsDoctor : bookedsDoctorReducer,
  historyBookedDoctor : historyBookedDoctorReducer,
  profile : profileReducer,
  province : provinceReducer,
  distrits : distritsReducer,
  searchdoctors : searchDoctorsReducer,
});
