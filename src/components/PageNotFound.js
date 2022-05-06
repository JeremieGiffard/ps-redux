import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<>
			<h1>404 page</h1>
			<Link to="/" className="btn btn-primary btn-lg">
				Return to Home
			</Link>
		</>
	);
};

export default PageNotFound;
