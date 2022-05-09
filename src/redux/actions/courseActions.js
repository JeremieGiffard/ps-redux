import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
	return { type: types.CREATE_COURSE, course: course }; //left and right match so course can be removed :
	// return { type: "CREATE_COURSE", course };
}

export function loadCourseSucces(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
	return function (dispatch) {
		return courseApi
			.getCourses()
			.then((courses) => {
				dispatch(loadCourseSucces(courses));
			})
			.catch((error) => {
				throw error;
			});
	};
}
