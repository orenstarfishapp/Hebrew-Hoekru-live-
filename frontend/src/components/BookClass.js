import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const BookClass = ({ session }) => {
    const history = useHistory();

    const handleBooking = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/book_class/${session.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Your booking has been confirmed!');
                history.push('/classes'); // Redirect to classes page or another page
            } else {
                alert('Failed to confirm booking. Please try again.');
            }
        } catch (error) {
            console.error('Error booking class:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold mb-6">הזמנת שיעור</h1>
            <h2 className="text-2xl font-bold mb-4">{session.course.title_he}</h2>
            <h3 className="text-xl font-bold mb-4 text-blue-600">{session.course.title_en}</h3>
            <p className="mb-2"><strong>תאריך:</strong> {new Date(session.date).toLocaleString('he-IL')}</p>
            <p className="mb-2"><strong>רמה:</strong> {session.course.level_he} / {session.course.level_en}</p>
            <p className="mb-4"><strong>מקומות פנויים:</strong> {session.max_students - session.bookings.length} / {session.max_students}</p>
            
            <button onClick={handleBooking} className="btn btn-primary">
                אשר הזמנה
            </button>
        </div>
    );
};

export default BookClass;
