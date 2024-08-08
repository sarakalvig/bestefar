import React from 'react';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';
import './page.css';

const GangaVilasBangladesh = () => {
  const GangaVilasBangladeshEntries = entries.filter(entry => entry.category === 'GangaVilasBangladesh');

  return (
    <div className="page">
      <div className="entries">
        {GangaVilasBangladeshEntries.map((entry, index) => (
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

export default GangaVilasBangladesh;