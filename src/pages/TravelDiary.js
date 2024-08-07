// src/pages/TravelDiary.js
import React from 'react';
import './TravelDiary.css';

const diaryEntries = [
  {
    date: '2023-06-01',
    title: 'Trip to New York',
    content: 'Had an amazing time visiting the Statue of Liberty and Central Park.',
    images: ['url_to_image_1', 'url_to_image_2'],
  },
  {
    date: '2023-05-15',
    title: 'Exploring Paris',
    content: 'Enjoyed the view from the Eiffel Tower and the art at the Louvre.',
    images: ['url_to_image_3', 'url_to_image_4'],
  },
  // Add more entries as needed
{
    date: '19-04-2024',
    title: 'Trip to New York',
    content: 'Siden Sveihvhvhvn og eg pleie å komma hjem fra cruise med covid, tenkte me å prøva på nytt, og denne gangen ikkje så langt vekke! Så nå e me i Middelhavet og ankra opp i morges på Rhodos, og eg tenke jo på aksjonen for å få vekk skipene fra havnen i Stavanger, samtidig så me syns det e jysla deilig når me sjøl kan rusla någen minutter og vera midt i sentrum! Skipet e Celebrity Infinity, og det e faktisk 5. gangen me reise med henne, passe stor, mest amerikanere og engelske, me treffe nye folk nesten kver middag, og adle e trivelige, men me føle oss nok mest hjemma med de engelske! Sama lynne, sama humor! Der e enormt mange aktiviteter ombord, folk gallopere rundt med «dagens program», og Svein og eg var plutselig med på ein kunstauksjon med utrolig stygge bilder og entusiastiske folk, les amerikanere, ropte og klappte og sjampagnen blei raust delt ut! Ellers e der foredrag, kino, fantastiske show om kvelden, og alt for høge musikk over alt! Me prøve å finna rolige steder, men me foretrekke egentlig ro på lugaren! Og siden me har WF inkludert, har eg lokalen på radio om morgenen, og har det akkurat som hjemma! Og det e jo vitsen med å reisa!',
    images: ['url_to_image_1', 'url_to_image_2'],
},
  {
    date: '2023-05-15',
    title: 'Exploring Paris',
    content: 'Nå e jo vhvvhikkhhhje me de så springe beinå av seg for å gå på konserter, derfor e de jysla kjekt når ein forestilling e verd heile turen! Dette e ei irske gruppa, Shamrock tenors, så synge irske folkesanger og ballader, fantastiske stemmer, og itte jubelen å dømma, må halvdelen av passasjerene vera irer!  Me lerte og någe heilt nytt, for ein av sangene va ein hymne te det irske rugbylaget, og det e den einaste sportsgrenen kor Irland representeres som ett land, og den hymnen va faktisk rørande! Me har hatt sjødag i dag, og det e egentlig ganske deilig, starta dagen med havregrøt, og så va det interessant foredrag om Cykladene, Santorini, kor me komme te i mårå tidlig! Der e et drøss med restauranter ombord, me har fått omvisning på det enorme hovedkjøkkenet, der lages det 10.000 måltider te dagen! Betjeningen ombord komme hovedsakelig fra Indonesia og Fillipinene, og itte å ha servert oss et par ganger, huske de navnene våre! De jobbe ombord i 7 måneder, og så har de fri i 2! I kveld va det såkalt chic antrekk, heilt frivillig, og det e utrolig kor oppstasa mange e, og eg ser jo at kunsten å gå på høge hæler ikkje e det sama for ein generasjon så alltid går med joggesko!',
    images: ['url_to_image_3', 'url_to_image_4'],
  },
];

const TravelDiary = () => {
  return (
    <div className="travel-diary">
      {diaryEntries.map((entry, index) => (
        <div key={index} className="diary-entry">
          <h2>{entry.title}</h2>
          <p className="entry-date">{entry.date}</p>
          <p>{entry.content}</p>
          <div className="entry-images">
            {entry.images.map((image, idx) => (
              <img key={idx} src={image} alt={`Diary entry ${index} image ${idx}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelDiary;
