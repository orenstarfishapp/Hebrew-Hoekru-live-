import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const MainLayout = ({ children }) => {
  return (
    <div className="font-sans">
      <Header />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <FAQ />
      <Footer />
    </div>
  );
};

export default MainLayout;
