import React, { useState } from "react";
import "../../styles/Seccion1.css";
import bootstrap from "bootstrap";
import seccionfoto from "../../img/seccion1.jpg";
const Seccion1 = () => {
	return (
		<>
			<div className="card m-5" id="S1">
				<img
					src={seccionfoto}
					className="card-img-top"
					id="fotito"
					alt="tecnologia"
					width="auto"
					height="500"></img>
				<div className="card-body" id="animado">
					<h5 className="card-title">Quiénes somos</h5>
					<p className="card-text">
						Somos estudiantes de programación, que hemos decidido
						darnos una oportunidad en este mundo maravilloso para
						crear cosas únicas.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 5 mins ago
						</small>
					</p>
				</div>
			</div>
		</>
	);
};
export default Seccion1;
