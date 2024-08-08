import React from 'react';
import './DiaryEntry.css'; // Add your styles here if needed

const DiaryEntry = ({ title, date, text, images, category }) => {
  return (
    <div className="diary-entry">
      <h2>{title}</h2>
      {category && <h3 className="cruise-program">category: {category}</h3>}
      <p><strong>{date}</strong></p>
      {text.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Travel pic ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default DiaryEntry;
