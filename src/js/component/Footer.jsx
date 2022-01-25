import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
	return (
		<div className="container-footer ">
			<div className="footer-boxes row align-items-start">
				<h6>Contenido</h6>
				<ul>
					<li>
						<a href="">Quines Somos</a>
					</li>

					<li>
						<a href="">El equipo</a>
					</li>
				</ul>
			</div>

			<div className="footer-boxes row align-items-start">
				<h6>Redes Sociales</h6>
				<p>
					<i class="fab fa-instagram">
						<span className="icon">Instagram</span>
					</i>
				</p>
				<p>
					<i class="fab fa-facebook-square">
						<span className="icon">Facebook</span>
					</i>
				</p>
				<p>
					<i class="fab fa-twitter">
						<span className="icon">Twitter</span>
					</i>
				</p>
			</div>

			<div className="footer-boxes row align-items-start">
				<h6>Contenido legal</h6>
			</div>
		</div>
	);
};
export default Footer;
