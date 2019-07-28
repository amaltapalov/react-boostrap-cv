import React from "react";

const Education = props => (
	<section
		class="resume-section p-3 p-lg-5 d-flex align-items-center"
		id="education"
	>
		<div class="w-100">
			<h2 class="mb-5">Education</h2>
			{props.education.map((edu, i) => (
				<div
					key={i}
					class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
				>
					<div class="resume-content">
						<h3 class="mb-0">{edu.university}</h3>
						<div class="subheading mb-3">{edu.degree}</div>
						<div>{edu.faculty}</div>
						<p>GPA: {edu.gpa}</p>
					</div>
					<div class="resume-date text-md-right">
						<span class="text-primary">
							{edu.fromDate} - {edu.toDate}
						</span>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Education;
