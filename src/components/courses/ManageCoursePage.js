import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import propTypes from 'prop-types';
import {} from 'react-router-dom';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';
import Spinner from '../common/Spinner';

/*
class ManageCoursePage extends React.Component {
	componentDidMount() {
		const { courses, authors, actions, loadAuthors, loadCourses } = this.props;
		if (courses.length === 0) {
			loadCourses().catch((error) => {
				alert('Loading courses failed' + error);});}
		if (authors.length === 0) {
			loadAuthors().catch((error) => {
				alert('Loading authors failed' + error);
			});}}
	render() {
		return ( <><h2>Manage Course</h2></> );}}
*/

function ManageCoursePage({
	courses,
	authors,
	loadAuthors,
	loadCourses,
	saveCourse,
	history,
	...props
}) {
	const [course, setCourse] = useState({ ...props.course });
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (courses.length === 0) {
			loadCourses().catch((error) => {
				alert('Loading courses failed' + error);
			});
		} else {
			setCourse({ ...props.course });
		}
		if (authors.length === 0) {
			loadAuthors().catch((error) => {
				alert('Loading authors failed' + error);
			});
		}
	}, [props.course]);

	function handleChange(event) {
		const { name, value } = event.target;
		setCourse((prevCourse) => ({
			...prevCourse,
			[name]: name === 'authorId' ? parseInt(value, 10) : value,
		}));
	}

	function handleSave(event) {
		event.preventDefault();
		saveCourse(course).then(() => {
			history.push('/courses');
		});
	}

	return authors.length === 0 || courses.length === 0 ? (
		<Spinner />
	) : (
		<CourseForm
			course={course}
			errors={errors}
			authors={authors}
			onChange={handleChange}
			onSave={handleSave}
		/>
	);
}

ManageCoursePage.propTypes = {
	course: propTypes.object.isRequired,
	authors: propTypes.array.isRequired,
	courses: propTypes.array.isRequired,
	loadCourses: propTypes.func.isRequired,
	loadAuthors: propTypes.func.isRequired,
	saveCourse: propTypes.func.isRequired,
	history: propTypes.object.isRequired,
};

export function getCourseBySlug(courses, slug) {
	return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
	const slug = ownProps.match.params.slug;

	const course =
		slug && state.courses.length > 0
			? getCourseBySlug(state.courses, slug)
			: newCourse;
	return {
		course: course,
		//if != authors, return empty array, else courses.map
		courses: state.courses,
		authors: state.authors,
	};
}

const mapDispatchToProps = {
	loadCourses,
	loadAuthors,
	saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
