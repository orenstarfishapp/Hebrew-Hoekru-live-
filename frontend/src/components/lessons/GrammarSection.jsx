// src/components/GrammarSection.js

import React from "react";

function GrammarSection({ grammar }) {
	return (
		<div>
			<h2>הסברים דקדוקיים</h2>
			{grammar.map((item, index) => (
				<div key={index}>
					<h3>{item.title}</h3>
					<p
						dangerouslySetInnerHTML={{
							__html: item.content.replace(/\n/g, "<br />"),
						}}
					/>
				</div>
			))}
		</div>
	);
}

export default GrammarSection;
