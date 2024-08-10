import React, { useState } from 'react';
import './DiaryEntry.css';

const DiaryEntry = ({ title, date, text, images, category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="diary-entry">
      <h2>{title}</h2>
      {category && <h3 className="cruise-program">category: {category}</h3>}
      <p><strong>{date}</strong></p>
      {text.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className="images">
        <button onClick={handlePrevious}>Prev</button>
        <img src={images[currentImageIndex]} alt={`Travel pic ${currentImageIndex + 1}`} />
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default DiaryEntry;
