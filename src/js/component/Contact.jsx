import React from "react";
import "../../styles/Contact.css";

const Contact = () => {
	return (
		<div className="container-form">
			<form id="myform">
				<div className="mb-3">
					<label
						for="exampleFormControlInput1"
						className="form-label">
						Dinos tu email para contactar
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
						required></input>
				</div>
				<div class="mb-3">
					<label
						for="exampleFormControlTextarea1"
						className="form-label">
						Cuéntanos que deseas saber...
					</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						required></textarea>
				</div>
				<div>
					<button type="submit" className="btn btn-primary">
						Contáctanos
					</button>
				</div>
			</form>
		</div>
	);
};
export default Contact;
