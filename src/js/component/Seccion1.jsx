import React, { useState } from "react";
import "../../styles/Seccion1.css";
import bootstrap from "bootstrap";

const Seccion1 = () => {
	return (
		<>
			<div className="card mb-3 m-5 -h">
				<img
					src="https://images.unsplash.com/photo-1608560610603-c7ebd7b0fc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					className="card-img-top-h"
					alt="tecnologia"
					width="auto"
					height="500px"></img>
				<div className="card-body-h">
					<h5 className="card-title-h">Quiénes somos</h5>
					<p className="card-text-h">
						Somos estudiantes de programación, que hemos decidido
						darnos una oportunidad en este mundo maravilloso para
						crear cosas únicas
					</p>
				</div>
			</div>
		</>
	);
};
export default Seccion1;
