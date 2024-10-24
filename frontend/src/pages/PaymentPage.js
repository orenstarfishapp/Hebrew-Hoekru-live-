import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PaymentWrapper from '../components/PaymentComponent'; // Adjust the import based on your structure

const PaymentPage = () => {
    const { course_id } = useParams(); // Use useParams to get the course_id from the URL
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/courses/${course_id}`); // Adjust the API endpoint
                if (!response.ok) {
                    throw new Error('Course not found');
                }
                const data = await response.json();
                setCourse(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [course_id]);

    if (loading) {
        return <div>Loading...</div>; // Display a loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Display an error message
    }

    if (!course) {
        return <div>No course data available</div>; // Fallback if no course data is found
    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold mb-6">תשלום עבור קורס</h1>
            <h2 className="text-2xl font-bold mb-4">{course.title_he}</h2>
            <h3 className="text-xl font-bold mb-4 text-blue-600">{course.title_en}</h3>
            <p className="mb-4"><strong>מחיר:</strong> ${course.price.toFixed(2)}</p>
            <PaymentWrapper course={course} />
        </div>
    );
};

export default PaymentPage;
