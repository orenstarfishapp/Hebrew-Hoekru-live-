import React from 'react';

const FAQ = () => {
  const questions = [
    {
      question: 'כמה זמן לוקח להיות שוטף בעברית?',
      answer: 'With our intensive program, most students achieve conversational fluency within 6-12 months, depending on their dedication and prior language learning experience.'
    },
    {
      question: 'Do I need any prior knowledge of Hebrew to start?',
      answer: 'Not at all! Our beginner course is designed for absolute beginners. We\'ll start with the basics and guide you every step of the way.'
    },
    // Add more questions as needed
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">שאלות נפוצות</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
