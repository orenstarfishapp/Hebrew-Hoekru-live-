import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useUser } from '../context/UserContext'; // Adjust the import path

const Header = () => {
  const { currentUser, setCurrentUser } = useUser();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/login'); 
  };

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">לימוד עברית</Link>
        </div>
        <div className="hidden md:flex space-x-4 rtl-menu">
          <NavLink to="/">דף הבית</NavLink>
          <NavLink to="/courses">קורסים</NavLink>
          <NavLink to="/class_sessions">שיעורים זמינים</NavLink>
          <NavLink to="/quiz">חידון</NavLink>
          <NavLink to="/about">אודות</NavLink>
          <NavLink to="/contact">צור קשר</NavLink>
          <NavLink to="/blog">בלוג</NavLink>
          {currentUser ? (
            <>
              <NavLink to="/my_bookings">השיעורים שלי</NavLink>
              <NavLink to="/profile">הפרופיל שלי</NavLink>
              <span onClick={handleLogout} className="cursor-pointer hover:text-blue-200 transition duration-300">התנתק</span>
            </>
          ) : (
            <>
              <NavLink to="/login">התחבר</NavLink>
              <NavLink to="/register">הרשם</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="hover:text-blue-200 transition duration-300">{children}</Link>
);

export default Header;
