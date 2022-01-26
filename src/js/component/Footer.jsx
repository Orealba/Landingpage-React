import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
	return (
		<div className="container-footer ">
			<div className="footer-boxes row align-items-start">
				<h6>Contenido</h6>
				<ul>
					<li>
						<a href="Seccion1">Quiénes Somos</a>
					</li>

					<li>
						<a href="Seccion2">El equipo</a>
					</li>
				</ul>
			</div>

			<div className="footer-boxes row align-items-start">
				<h6>Redes Sociales</h6>

				<i class="fab fa-instagram">
					<span className="icon">Instagram</span>
				</i>

				<i class="fab fa-facebook-square">
					<span className="icon">Facebook</span>
				</i>

				<i class="fab fa-twitter">
					<span className="icon">Twitter</span>
				</i>
			</div>

			<div className="footer-boxes row align-items-start">
				<h6>Contenido legal</h6>
				<ul>
					<li>
						<a href="#">Política de privacidad</a>
					</li>

					<li>
						<a href="#">Aviso Legal</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Footer;
