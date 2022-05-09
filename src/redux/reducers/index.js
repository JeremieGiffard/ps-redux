import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducter = combineReducers({
	// courses: courses          //right and left are the same
	courses,
});

export default rootReducter;
