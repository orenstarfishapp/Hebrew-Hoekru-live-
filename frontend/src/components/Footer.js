import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="social-links mb-4">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-200 mx-2" 
            aria-label="פייסבוק"
          >
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a 
            href="https://www.twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-200 mx-2" 
            aria-label="טוויטר"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-200 mx-2" 
            aria-label="אינסטגרם"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-200 mx-2" 
            aria-label="לינקדאין"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
        </div>
        <p>&copy; 2023 לימוד עברית. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;
