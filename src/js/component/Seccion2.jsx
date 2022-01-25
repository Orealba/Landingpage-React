import React from "react";
import "../../styles/Seccion2.css";
import imagen1 from "../../img/imagen1.jpg";

const Seccion2 = () => {
	return (
		<>
			<div className="card m-5">
				<img
					src={imagen1}
					width="auto"
					height="500"
					className="card-img-top"
					alt="Reunion"></img>
				<div className="card-body">
					<h5 className="card-title">El Equipo...</h5>
					<p className="card-text"></p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
				</div>
			</div>
		</>
	);
};
export default Seccion2;
