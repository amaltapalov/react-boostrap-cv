import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Awards = props => (
	<section
		class="resume-section p-3 p-lg-5 d-flex align-items-center"
		id="awards"
	>
		<div class="w-100">
			<h2 class="mb-5">Awards &amp; Certifications</h2>
			<ul class="fa-ul mb-0">
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
