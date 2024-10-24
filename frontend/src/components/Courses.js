import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses from the API
        const fetchCourses = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/courses`); // Adjust the API endpoint as necessary
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Our Hebrew Courses</h1>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">הקורסים שלנו</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                        <h3 className="text-xl font-bold mb-2 text-blue-600">{course.hebrew_title}</h3>
                        <p className="text-gray-600 mb-4">Level: {course.level}</p>
                        <p className="mb-4">{course.description}</p>
                        <p className="text-xl font-bold mb-4">${course.price}</p>
                        <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Enroll Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
