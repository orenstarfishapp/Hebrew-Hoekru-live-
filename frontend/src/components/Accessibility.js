import React from 'react';

const Accessibility = () => {
    return (
        <div id="accessibility" className="sr-only">
            <h2 className="text-xl font-bold mb-4">נגישות</h2>
            <p>אנו מחויבים להבטיח שהאתר שלנו נגיש לכל המשתמשים. להלן כמה אפשרויות נגישות:</p>
            <ul className="list-disc ml-5">
                <li>אנו מציעים טקסטים חלופיים לתמונות.</li>
                <li>קישורים מודגשים לבחירתך.</li>
                <li>אפשרות להתאים את גודל הטקסט.</li>
                <li>תמיכה בדפדפנים מסייעים.</li>
            </ul>
            <p>אם יש לך שאלות או דרישות נוספות בנוגע לנגישות, אנא צור קשר עם צוות התמיכה שלנו.</p>
        </div>
    );
};

export default Accessibility;
