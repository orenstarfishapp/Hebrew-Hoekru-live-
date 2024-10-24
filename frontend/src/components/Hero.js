import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content fade-in">
        <h1 className="text-4xl font-bold mb-4">ברוכים הבאים ללימוד עברית</h1>
        <p className="text-xl mb-8">גלו את יופייה של השפה העברית עם הקורסים המעמיקים שלנו</p>
        <a href="/courses" className="btn btn-primary">התחל ללמוד עכשיו</a>
      </div>
    </section>
  );
};

export default Hero;
