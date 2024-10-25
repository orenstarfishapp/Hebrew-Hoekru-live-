// src/components/ExerciseMatching.js

import React from 'react';

function ExerciseMatching({ exercise, exerciseIndex, userAnswers, handleAnswerChange }) {
  // Shuffle English words
  const shuffledEnglish = [...exercise.pairs.map((p) => p.english)].sort(() => Math.random() - 0.5);

  return (
    <div>
      <h3>2. התאמת מילים</h3>
      <table>
        <thead>
          <tr>
            <th>עברית</th>
            <th>אנגלית</th>
          </tr>
        </thead>
        <tbody>
          {exercise.pairs.map((pair, index) => (
            <tr key={index}>
              <td>{pair.hebrew}</td>
              <td>
                <select
                  value={userAnswers[exerciseIndex]?.[index] || ''}
                  onChange={(e) => handleAnswerChange(exerciseIndex, index, e.target.value)}
                >
                  <option value="">בחר תרגום</option>
                  {shuffledEnglish.map((englishWord, idx) => (
                    <option key={idx} value={englishWord}>
                      {englishWord}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseMatching;
