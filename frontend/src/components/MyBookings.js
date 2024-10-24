import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext'; // Adjust the import path as necessary

const MyBookings = () => {
    const { currentUser } = useUser(); // Get the current user from context
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            if (!currentUser) {
                setError('User not logged in');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/my_bookings?user=${currentUser}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentUser.token}` // Include token if needed
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch bookings');
                }

                const data = await response.json();
                setBookings(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [currentUser]); // Run effect when currentUser changes

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="container mx-auto p-6" dir="rtl">
            <h1 className="text-4xl font-bold mb-8">השיעורים שלי</h1>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">My Booked Classes</h2>

            {bookings && bookings.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-2">{booking.class_session.course.title_he}</h2>
                            <h3 className="text-xl font-bold mb-2 text-blue-600">{booking.class_session.course.title_en}</h3>
                            <p className="text-gray-600 mb-2">
                                תאריך: {new Date(booking.class_session.date).toLocaleString('he-IL')}
                            </p>
                            <p className="text-gray-600 mb-2">
                                רמה: {booking.class_session.course.level_he} / {booking.class_session.course.level_en}
                            </p>
                            <p className="text-gray-600 mb-2">
                                תאריך הזמנה: {new Date(booking.booking_date).toLocaleString('he-IL')}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-xl mb-4">עדיין לא הזמנת שיעורים.</p>
            )}
            <a href="/class_sessions" className="btn btn-primary">צפה בשיעורים זמינים</a>
        </div>
    );
};

export default MyBookings;
