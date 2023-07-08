import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
				<Link to="/">
					<span class="navbar-brand mb-0 h1">Navbar</span>
				</Link>
			</div>
		</nav>
	);
};
