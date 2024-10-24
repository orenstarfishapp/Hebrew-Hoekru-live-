import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

const ClassSessions = () => {
    const [sessions, setSessions] = useState([]);    
    const { currentUser } = useUser();

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/sessions`); // Adjust the API endpoint as necessary
                const data = await response.json();
                setSessions(data);
            } catch (error) {
                console.error('Error fetching sessions:', error);
            }
        };

        fetchSessions();
    }, []);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">שיעורים זמינים</h1>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Available Classes</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sessions.map(session => (
                    <div key={session.id} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-2">{session.course.title_he}</h2>
                        <h3 className="text-xl font-bold mb-2 text-blue-600">{session.course.title_en}</h3>
                        <p className="text-gray-600 mb-2">תאריך: {new Date(session.date).toLocaleString('he-IL')}</p>
                        <p className="text-gray-600 mb-2">רמה: {session.course.level_he} / {session.course.level_en}</p>
                        <p className="text-gray-600 mb-4">מקומות פנויים: {session.max_students - session.bookings.length} / {session.max_students}</p>

                        {currentUser ? (
                            session.max_students - session.bookings.length > 0 ? (
                                <a href={`/book_class/${session.id}`} className="btn btn-primary">הזמן שיעור</a>
                            ) : (
                                <p className="text-red-600 font-bold">השיעור מלא</p>
                            )
                        ) : (
                            <a href="/login" className="btn btn-primary">התחבר כדי להזמין</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassSessions;
