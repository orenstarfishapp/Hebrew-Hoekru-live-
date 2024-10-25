// src/components/Lesson.js

import React, { useEffect, useState } from "react";
import StorySection from "../components/lessons/StorySections";
import GrammarSection from "../components/lessons/GrammarSection";
import ExercisesSection from "../components/lessons/ExercisesSection";
import axios from "axios";

function Lesson() {
	const [lesson, setLesson] = useState(null);
	useEffect(() => {
		axios
			.get("/api/lesson")
			.then((response) => {
				setLesson(response.data);
			})
			.catch((error) => console.error(error));
	}, []);

	if (!lesson) {
		return <p>טוען שיעור...</p>;
	}
	return (
		<div
			style={{
				direction: "rtl",
				textAlign: "right",
				fontFamily: "Arial, sans-serif",
				margin: "20px",
			}}
		>
			<h1>שיעור עברית</h1>
			<StorySection story={lesson.story} />
			<GrammarSection grammar={lesson.grammar} />
			<h1
				style={{
					fontSize: "2rem",
				}}
			>
				Exrecises
			</h1>
			<ExercisesSection exercises={lesson.exercises} />
		</div>
	);
}

export default Lesson;
