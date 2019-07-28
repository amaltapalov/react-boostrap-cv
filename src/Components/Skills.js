import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ skills }) => (
	<section
		className="resume-section p-3 p-lg-5 d-flex align-items-center"
		id="skills"
	>
		<div className="w-100">
			<h2 className="mb-5">Skills</h2>
			<div className="subheading mb-3">
				Programming Languages &amp; Tools
			</div>
			<div className="row">
				{skills.map((skill, i) => (
					<div key={i} className="col-6">
						<p className="list-item">
							<FontAwesomeIcon
								icon={faCheckCircle}
								color="green"
							/>
							<span className="ml-3">{skill.name}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Skills;
