import React from 'react';

const FeaturedCourses = ({ courses }) => {
  return (
    <section className="featured-section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">הקורסים המובילים שלנו</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="card bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{course.title_he}</h3>
              <p className="mb-4">{course.description_he.slice(0, 100)}...</p>
              <a href="/courses" className="btn btn-primary">למידע נוסף</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
