import React from "react";

const Experience = props => (
	<section
		class="resume-section p-3 p-lg-5 d-flex justify-content-center"
		id="experience"
	>
		<div class="w-100">
			<h2 class="mb-5">Experience</h2>

			{props.experience.map((exp, i) => (
				<div
					key={i}
					class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
				>
					<div class="resume-content">
						<h3 className="mb-0">{exp.position}</h3>
						<div class="subheading mb-3">{exp.organization}</div>
						<p>{exp.aboutWork}</p>
					</div>
					<div class="resume-date text-md-right">
						<span class="text-primary">
							{exp.fromDate} - {exp.toDate}
						</span>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Experience;
