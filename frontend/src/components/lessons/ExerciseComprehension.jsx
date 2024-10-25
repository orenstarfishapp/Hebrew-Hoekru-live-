// src/components/ExerciseComprehension.js

import React from 'react';

function ExerciseComprehension({ exercise, exerciseIndex, userAnswers, handleAnswerChange }) {
  return (
    <div>
      <h3>1. שאלות הבנת הנקרא</h3>
      {exercise.questions.map((question, questionIndex) => (
        <div key={questionIndex} style={{ marginBottom: '15px' }}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="radio"
                name={`q-${exerciseIndex}-${questionIndex}`}
                value={option}
                checked={userAnswers[exerciseIndex]?.[questionIndex] === option}
                onChange={() => handleAnswerChange(exerciseIndex, questionIndex, option)}
              />
              <label style={{ marginRight: '10px' }}>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ExerciseComprehension;
