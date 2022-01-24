import React from "react";
import "../../styles/Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar-h">
			<ul className={open ? "nav-links-h active" : "nav-links-h"}>
				<li className="nav-item-h">
					<a
						href="/"
						className="nav-link-h"
						onClick={() => setOpen(false)}>
						Home
					</a>
				</li>
				<li className="nav-item-h">
					<a
						href="/about"
						className="nav-link-h"
						onClick={() => setOpen(false)}>
						About
					</a>
				</li>
				<li className="nav-item-h">
					<a
						href="/contact"
						className="nav-link-h"
						onClick={() => setOpen(false)}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
