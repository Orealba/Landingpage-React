import React from "react";
import "../../styles/Seccion2.css";

const Seccion2 = () => {
	return (
		<>
			<div className="card mb-3 m-5">
				<img
					src="https://c.pxhere.com/images/47/2a/e7c67294be044b9374d0fc78f096-1455461.jpg!d"
					width="auto"
					height="500"
					className="card-img-top"
					alt="Reunion"></img>
				<div className="card-body">
					<h5 className="card-title">A donde vamos ....</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
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
