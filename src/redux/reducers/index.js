import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducter = combineReducers({
	// courses: courses          //right and left are the same
	courses,
	authors,
});

export default rootReducter;
