export function createCourse(course) {
	return { type: "CREATE_COURSE", course: course }; //left and right match so course can be removed :
	// return { type: "CREATE_COURSE", course };
}
