import { combineReducers } from "redux";
import { facultyListReducer } from "./faculty.list.reducer";
import { userReducer } from "./user.reducer";
export default combineReducers({
  facultyList : facultyListReducer,
  user : userReducer,
});
