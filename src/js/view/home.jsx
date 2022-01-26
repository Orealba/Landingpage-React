import React from "react";

import Footer from "../component/Footer.jsx";
import Contact from "../component/Contact.jsx";
import Seccion2 from "../component/Seccion2.jsx";
import Header from "../component/Header.jsx";
import Navbar from "../component/Navbar.jsx";
import Seccion1 from "../component/Seccion1.jsx";


const Home = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Seccion1 />
     		<Seccion2 />
			<Contact />
			<Footer />
		</>
	);


  
};

export default Home;
