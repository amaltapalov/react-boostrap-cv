import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Landing = props => (
	<section
		className="resume-section p-3 p-lg-5 d-flex align-items-center"
		id="about"
	>
		<div className="w-100">
			<h1 className="mb-0">
				{props.landingData.firstName}
				<span className="text-primary">{props.landingData.lastName}</span>
			</h1>
			<div className="subheading mb-5">
				Phone: {props.landingData.phoneNumber}
				<br />
				<a href="mailto:name@email.com">
					Email: {props.landingData.email}
				</a>
			</div>
			<p className="lead mb-5">{props.landingData.bio}</p>
			<div className="social-icons">
				<a href={props.landingData.linkedin}>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href={props.landingData.github}>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href={props.landingData.twitter}>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</div>
		</div>
	</section>
);

export default Landing;
