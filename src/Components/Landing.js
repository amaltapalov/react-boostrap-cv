import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Landing = props => (
	<section
		class="resume-section p-3 p-lg-5 d-flex align-items-center"
		id="about"
	>
		<div class="w-100">
			<h1 class="mb-0">
				{props.landingData.firstName}
				<span class="text-primary">{props.landingData.lastName}</span>
			</h1>
			<div class="subheading mb-5">
				Phone: {props.landingData.phoneNumber}
				<br />
				<a href="mailto:name@email.com">
					Email: {props.landingData.email}
				</a>
			</div>
			<p class="lead mb-5">{props.landingData.bio}</p>
			<div class="social-icons">
				<a href={props.landingData.linkedin}>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href={props.landingData.github}>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
		</div>
	</section>
);

export default Landing;
