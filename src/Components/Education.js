import React from "react";

const Education = props => (
	<section
		className="resume-section p-3 p-lg-5 d-flex align-items-center"
		id="education"
	>
		<div className="w-100">
			<h2 className="mb-5">Education</h2>
			{props.education.map((edu, i) => (
				<div
					key={i}
					className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
				>
					<div className="resume-content">
						<h3 className="mb-0">{edu.university}</h3>
						<div className="subheading mb-3">{edu.degree}</div>
						<div>{edu.faculty}</div>
						<p>GPA: {edu.gpa}</p>
					</div>
					<div className="resume-date text-md-right">
						<span className="text-primary">
							{edu.fromDate} - {edu.toDate}
						</span>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Education;
