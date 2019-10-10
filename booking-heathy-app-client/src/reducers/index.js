import { combineReducers } from "redux";
import { facultyListReducer } from "./faculty.list.reducer";

export default combineReducers({
  facultyList : facultyListReducer
  
});
