import React from 'react';
import './DiaryEntry.css'; // Add your styles here if needed

const DiaryEntry = ({ title, date, text, images, cruiseProgram }) => {
  return (
    <div className="diary-entry">
      <h2>{title}</h2>
      {cruiseProgram && <h3 className="cruise-program">Cruise Program: {cruiseProgram}</h3>}
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
