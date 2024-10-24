import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">About Hebrew Learning</h1>
      <h2 className="text-3xl font-bold mb-6 text-blue-600">על לימוד עברית</h2>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <h3 className="text-xl font-bold mb-2 text-blue-600">הסיפור שלנו</h3>
        <p className="mb-6">
          Hebrew Learning was founded with a passion for sharing the beauty and depth of the Hebrew language with learners from all over the world. Inspired by the success of Citizen Cafe TLV, we aim to bring the same immersive and effective learning experience to our online platform.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Methodology</h2>
        <h3 className="text-xl font-bold mb-2 text-blue-600">השיטה שלנו</h3>
        <p className="mb-6">
          We believe in a practical, communicative approach to language learning. Our courses focus on real-life situations and everyday conversations, helping you to quickly gain confidence in speaking Hebrew. We use a combination of interactive exercises, cultural insights, and personalized feedback to ensure rapid progress.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Teachers</h2>
        <h3 className="text-xl font-bold mb-2 text-blue-600">המורים שלנו</h3>
        <p className="mb-6">
          Our team of experienced and passionate Hebrew teachers comes from diverse backgrounds, bringing a wealth of knowledge and expertise to our courses. Each instructor is dedicated to providing a supportive and engaging learning environment.
        </p>

        <h2 className="text-2xl font-bold mb-4">Join Us</h2>
        <h3 className="text-xl font-bold mb-2 text-blue-600">הצטרפו אלינו</h3>
        <p className="mb-6">
          Whether you're a complete beginner or looking to improve your existing Hebrew skills, we have a course that's right for you. Start your Hebrew learning journey with us today!
        </p>
      </div>
    </div>
  );
};

export default About;
