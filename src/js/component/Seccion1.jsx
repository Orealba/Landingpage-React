import React, { useState } from "react";
import "../../styles/Seccion1.css";
import bootstrap from "bootstrap";
import seccionfoto from "../../img/seccion1.jpg";
const Seccion1 = () => {
	return (
		<>
			<div className="card mb-3 m-5 -h">
				<img
					src={seccionfoto}
					className="card-img-top-h"
					alt="tecnologia"
					width="auto"
					height="500px"></img>
				<div className="card-body-h">
					<h5 className="card-title-h">Quiénes somos</h5>
					<p className="card-text-h">
						Somos estudiantes de programación, que hemos decidido
						darnos una oportunidad en este mundo maravilloso para
						crear cosas únicas.
					</p>
				</div>
			</div>
		</>
	);
};
export default Seccion1;
