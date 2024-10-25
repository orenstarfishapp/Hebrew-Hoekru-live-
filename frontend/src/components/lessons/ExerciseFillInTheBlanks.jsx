// src/components/ExerciseFillInTheBlanks.js

import React from 'react';

function ExerciseFillInTheBlanks({ exercise, exerciseIndex, userAnswers, handleAnswerChange }) {
  return (
    <div>
      <h3>3. השלמת משפטים</h3>
      {exercise.sentences.map((sentenceObj, questionIndex) => {
        const parts = sentenceObj.sentence.split('_______');
        return (
          <div key={questionIndex} style={{ marginBottom: '15px' }}>
            <p>
              {parts[0]}
              <select
                value={userAnswers[exerciseIndex]?.[questionIndex]?.blank1 || ''}
                onChange={(e) =>
                  handleAnswerChange(exerciseIndex, questionIndex, {
                    ...userAnswers[exerciseIndex]?.[questionIndex],
                    blank1: e.target.value,
                  })
                }
              >
                <option value="">בחר מילה</option>
                {sentenceObj.options.blank1.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {parts[1]}
              <select
                value={userAnswers[exerciseIndex]?.[questionIndex]?.blank2 || ''}
                onChange={(e) =>
                  handleAnswerChange(exerciseIndex, questionIndex, {
                    ...userAnswers[exerciseIndex]?.[questionIndex],
                    blank2: e.target.value,
                  })
                }
              >
                <option value="">בחר מילה</option>
                {sentenceObj.options.blank2.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {parts[2] || ''}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ExerciseFillInTheBlanks;
