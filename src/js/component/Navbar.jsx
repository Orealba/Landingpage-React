import React, { useState } from "react";
import "../../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="navbar-h">
			<a
				href="/"
				className="nav-logo-h"
				onClick={() => setOpen(false)}></a>
			<div onClick={() => setOpen(!open)} className="nav-icon-h">
				{open ? <FiX /> : <FiMenu />}
			</div>
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
