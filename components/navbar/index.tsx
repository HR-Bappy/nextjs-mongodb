import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<nav className="navbar navbar-dark bg-dark px-2">
						<Link className="navbar-brand" href="/">
							Home
						</Link>
						<Link className="navbar-brand" href="/add">
							Add
						</Link>
					</nav>
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	);
}

export default Navbar;
