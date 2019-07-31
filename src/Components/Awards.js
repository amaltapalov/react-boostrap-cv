import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Awards = props => (
	<section
		className="resume-section p-3 p-lg-5 d-flex align-items-center"
		id="awards"
	>
		<div className="w-100">
			<h2 className="mb-5">Awards &amp; Certifications</h2>
			<ul className="fa-ul mb-0 ml-0">
				{props.awards.map((award, i) => (
					<li key={i}>
						<FontAwesomeIcon icon={faAward} color="#ffc107" />
						<span className="ml-2"> {award.awardDetail} </span>
					</li>
				))}
			</ul>
		</div>
	</section>
);

export default Awards;
