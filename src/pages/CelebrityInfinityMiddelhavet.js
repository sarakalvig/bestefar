import React from 'react';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';
import './page.css';

const CelebrityInfinityMiddelhavet = () => {
  const CelebrityInfinityMiddelhavetEntries = entries.filter(entry => entry.category === 'CelebrityInfinityMiddelhavet');

  return (
    <div className="page">
      <div className="entries">
        {CelebrityInfinityMiddelhavetEntries.map((entry, index) => (
          <DiaryEntry 
            key={index}
            title={entry.title}
            date={entry.date}
            text={entry.text}
            images={entry.images}
            category={entry.category}
          />
        ))}
      </div>
    </div>
  );
};

export default CelebrityInfinityMiddelhavet;