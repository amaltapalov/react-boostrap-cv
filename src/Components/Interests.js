import React from "react";

const Interests = props => (
	<section
		className="resume-section p-3 p-lg-5 d-flex align-items-center"
		id="interests"
	>
		<div className="w-100">
			<h2 className="mb-5">Interests</h2>
			<p>{props.interests.paragraphOne}</p>
			<p className="mb-0">{props.interests.paragraphTwo}</p>
		</div>
	</section>
);

export default Interests;
