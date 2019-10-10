import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_FACULTY,
    getFacultySuccess,
    getFacultyFailed
} from "../actions/faculty.list.action";
import { getFaculties } from "../util/APIUtils";
// import (getFaculties}  from "../util/APIUtils";

function* getFacultyListss() {
  try {
    // var faculties ;
    // getFaculties().then(response =>{
    //   faculties = response.data.object;
    // })
    const genderData = [
      {   
          VN : "NAM",
          EN : 'MALE'
      },
      {   
          VN : "NŨ",
          EN : 'FAMALE'
      },
      {   
          VN : "KHÁC",
          EN : "OTHER"
      }
  ] 
    // const payload = yield call(faculties);
    // console.log("kakaka"+payload)
    yield put(getFacultySuccess(genderData));
  } catch (error) {
    yield put(getFacultyFailed());
  }
}

export function* watchFacultySagasAsync() {
  yield takeLatest(GET_FACULTY, getFacultyListss);
}
