import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const UserProfile = () => {
    const { currentUser } = useUser();
    const navigate = useNavigate(); // Initialize useNavigate

    if (!currentUser) {
        navigate('/login');
    }

    useEffect(() => {
        // Redirect to login page if currentUser is null
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser, navigate]); // Dependency array includes currentUser and navigate

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6" dir="rtl">
            <h1 className="text-3xl font-bold mb-6">הפרופיל שלי</h1>
            <div className="mb-4">
                <p className="text-gray-700"><strong>שם משתמש:</strong> {currentUser?.username}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-700"><strong>אימייל:</strong> {currentUser?.email}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-700">
                    <strong>תאריך הרשמה:</strong> {new Date(currentUser?.date_registered).toLocaleDateString('he-IL')}
                </p>
            </div>
            {/* Add more user details or functionality as needed */}
        </div>
    );
};

export default UserProfile;
