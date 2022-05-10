import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import apiCallStatusInProgress from './apiStatusReducer';

const rootReducter = combineReducers({
	// courses: courses          //right and left are the same
	courses,
	authors,
	apiCallStatusInProgress,
});

export default rootReducter;
