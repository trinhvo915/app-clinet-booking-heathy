import {
    GET_FACULTY,
    GET_FACULTY_SUCCESS,
    GET_FACULTY_FAILED
} from "./../actions/faculty.list.action";

const initialState = {
    facultyList: [],
    loading: false,
    failed: false
};

export function facultyListReducer(state = initialState, { type,data}) {
    console.log("kakakakas"+type);

    switch (type) {
        
        case GET_FACULTY:
                console.log("GET_FACULTY");
            return Object.assign({}, state, {
                loading: true,
                failed: false
            });
        case GET_FACULTY_SUCCESS:
                console.log("GET_FACULTY_SUCCESS");
            return Object.assign({}, state, {
                facultyList: data.payload,
                loading: false,
                failed: false
            });
        case GET_FACULTY_FAILED:
                console.log("GET_FACULTY_FAILED");
            return Object.assign({}, state, {
                loading: false,
                failed: true
            });
        default:
                console.log("default");
            return state;
    }
}
