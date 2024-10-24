import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalQuestions] = useState(10);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timer, setTimer] = useState(null);
  const [question, setQuestion] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [performanceMessage, setPerformanceMessage] = useState('');

  useEffect(() => {
    loadQuestion();
  }, []);

  useEffect(() => {
    if (timer) {
      if (timeLeft <= 0) {
        clearInterval(timer);
        showResult(false);
      }
    }
  }, [timeLeft, timer]);

  const startTimer = () => {
    setTimeLeft(30);
    const newTimer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    setTimer(newTimer);
  };

  const loadQuestion = async () => {
    const response = await fetch('/get_question');
    const data = await response.json();
    setQuestion(data);
    setCorrectAnswer(data.correct_answer);
    setQuestionNumber(prev => prev + 1);
    startTimer();
  };

  const submitAnswer = async (answer) => {
    clearInterval(timer);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/submit_answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer, correct_answer: correctAnswer }),
    });
    const data = await response.json();
    showResult(data.result === 'correct');
  };

  const showResult = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (questionNumber >= totalQuestions) {
      showQuizSummary();
    } else {
      loadQuestion();
    }
  };

  const showQuizSummary = () => {
    setShowSummary(true);
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) {
      setPerformanceMessage('מצוין! אתה שולט בעברית!');
    } else if (percentage >= 70) {
      setPerformanceMessage('כל הכבוד! אתה בדרך הנכונה!');
    } else if (percentage >= 50) {
      setPerformanceMessage('לא רע! המשך להתאמן!');
    } else {
      setPerformanceMessage('יש מקום לשיפור. אל תתייאש!');
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setQuestionNumber(0);
    setShowSummary(false);
    loadQuestion();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">חידון עברית</h1>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Hebrew Quiz</h2>

      {!showSummary ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}></div>
          </div>
          <div className="mb-4 flex justify-between">
            <p>ניקוד: <span>{score}</span></p>
            <p>שאלה: <span>{questionNumber}</span> / <span>{totalQuestions}</span></p>
          </div>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
            </div>
            <p className="text-center mt-2">זמן נותר: <span>{timeLeft}</span> שניות</p>
          </div>
          {question && (
            <>
              <p className="text-xl mb-2 font-bold">{question.question_he}</p>
              <p className="text-lg mb-4 text-gray-600">{question.question_en}</p>
              <div className="space-y-2">
                {question.answers.map(answer => (
                  <button key={answer} onClick={() => submitAnswer(answer)} className="btn btn-secondary w-full mb-2">
                    {answer}
                  </button>
                ))}
              </div>
              <p id="result" className="mt-4 font-bold text-center"></p>
            </>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
          <h3 className="text-2xl font-bold mb-4">סיכום החידון / Quiz Summary</h3>
          <p className="text-lg">ניקוד סופי: <span className="font-bold">{score}</span> / <span>{totalQuestions}</span></p>
          <p className="text-lg mb-4">זמן שנותר: <span className="font-bold">{timeLeft}</span> שניות</p>
          <div className="text-center text-xl font-bold mb-4">{performanceMessage}</div>
          <button onClick={restartQuiz} className="btn btn-primary mt-4 w-full">התחל מחדש / Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
