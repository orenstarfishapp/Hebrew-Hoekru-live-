import React, { Profiler, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import featuredCourses from './data/featuredCourses.json';
import testimonials from './data/testimonials.json';
import posts from './data/posts.json';
import Register from './components/Register';
import Login from './components/Login';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';
import Quiz from './components/Quiz';
import ClassSessions from './components/ClassSessions';
import Courses from './components/Courses';
import { UserProvider } from './context/UserContext';
import UserProfile from './components/UserProfile';
import Accessibility from './components/Accessibility';
import AccessibilityMenu from './components/AccessibilityMenu';
import PaymentPage from './pages/PaymentPage';

const App = () => {

  return (
    <div dir="rtl" className="font-sans">
      <UserProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route
                path="/"
                element={<Home featuredCourses={featuredCourses} testimonials={testimonials} posts={posts} />}
              />
              <Route
                path="/payment"
                element={<PaymentPage />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/class_sessions" element={<ClassSessions />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/accessibility" element={<Accessibility />} />

            </Routes>
          </MainLayout>
        </Router>
      </UserProvider>
      <AccessibilityMenu />
    </div>
  );
};

export default App;
