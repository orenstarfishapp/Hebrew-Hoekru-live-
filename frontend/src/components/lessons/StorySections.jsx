// src/components/StorySection.js

import React from 'react';

function StorySection({ story }) {
  return (
    <div>
      <h2>סיפור</h2>
      <p>{story.hebrew}</p>
      <h3>תעתיק</h3>
      <p>{story.transliteration}</p>
      <h3>תרגום לאנגלית</h3>
      <p>{story.english}</p>
    </div>
  );
}

export default StorySection;
