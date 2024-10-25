// src/components/ExercisesSection.js

import axios from "axios";
import React, { useEffect, useState } from "react";

import ExerciseComprehension from "./ExerciseComprehension";
import ExerciseMatching from "./ExerciseMatching";
import ExerciseFillInTheBlanks from "./ExerciseFillInTheBlanks";

function ExercisesSection() {
	const [exercises, setExercises] = useState([]);
	const [userAnswers, setUserAnswers] = useState({});
	const [score, setScore] = useState(null);

	// Fetch exercises from backend
	useEffect(() => {
		axios
			.get("/api/lesson")
			.then((response) => {
				setExercises(response.data.exercises);
			})
			.catch((error) => console.error(error));
	}, []);

	const handleAnswerChange = (exerciseIndex, questionIndex, answer) => {
		setUserAnswers((prevAnswers) => {
			const updatedAnswers = { ...prevAnswers };
			if (!updatedAnswers[exerciseIndex]) {
				updatedAnswers[exerciseIndex] = {};
			}
			updatedAnswers[exerciseIndex][questionIndex] = answer;
			return updatedAnswers;
		});
	};

	const handleSubmit = () => {
		axios
			.post("/api/validate", { userAnswers })
			.then((response) => {
				setScore(response.data.score);
			})
			.catch((error) => console.error(error));
	};

	return (
		<div>
			<h2>תרגילים</h2>
			{exercises.map((exercise, exerciseIndex) => (
				<div key={exerciseIndex}>
					{exercise.type === "comprehension" && (
						<ExerciseComprehension
							exercise={exercise}
							exerciseIndex={exerciseIndex}
							userAnswers={userAnswers}
							handleAnswerChange={handleAnswerChange}
						/>
					)}
					{exercise.type === "matching" && (
						<ExerciseMatching
							exercise={exercise}
							exerciseIndex={exerciseIndex}
							userAnswers={userAnswers}
							handleAnswerChange={handleAnswerChange}
						/>
					)}
					{exercise.type === "fillInTheBlanks" && (
						<ExerciseFillInTheBlanks
							exercise={exercise}
							exerciseIndex={exerciseIndex}
							userAnswers={userAnswers}
							handleAnswerChange={handleAnswerChange}
						/>
					)}
				</div>
			))}
			<button
				onClick={handleSubmit}
				style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}
			>
				בדוק תשובות
			</button>
			{score !== null && (
				<div style={{ marginTop: "20px" }}>
					<h3>הציון שלך: {score}%</h3>
				</div>
			)}
		</div>
	);
}

export default ExercisesSection;
