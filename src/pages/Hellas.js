import React from 'react';
import './Hellas.css';

const DiaryEntry = ({ title, date, text, images }) => {
  return (
    <div className="diary-entry">
      <h2>{title}</h2>
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

const Hellas = () => {
  const entries = [
    {
      title: 'Rhodos, Hellas',
      date: '19.04.2024',
      text: `Siden Svein og eg pleie å komma hjem fra cruise med covid, tenkte me å prøva på nytt, og denne gangen ikkje så langt vekke!
             Så nå e me i Middelhavet og ankra opp i morges på Rhodos, og eg tenke jo på aksjonen for å få vekk skipene fra havnen i Stavanger,
             samtidig så me syns det e jysla deilig når me sjøl kan rusla någen minutter og vera midt i sentrum!\n\n
             Skipet e Celebrity Infinity, og det e faktisk 5. gangen me reise med henne, passe stor, mest amerikanere og engelske,
             me treffe nye folk nesten kver middag, og adle e trivelige, men me føle oss nok mest hjemma med de engelske! Sama lynne, sama humor!\n\n
             Der e enormt mange aktiviteter ombord, folk gallopere rundt med «dagens program», og Svein og eg var plutselig med på ein kunstauksjon
             med utrolig stygge bilder og entusiastiske folk, les amerikanere, ropte og klappte og sjampagnen blei raust delt ut!\n\n
             Ellers e der foredrag, kino, fantastiske show om kvelden, og alt for høge musikk over alt! Me prøve å finna rolige steder,
             men me foretrekke egentlig ro på lugaren! Og siden me har WF inkludert, har eg lokalen på radio om morgenen, og har det akkurat som hjemma!
             Og det e jo vitsen med å reisa!`,
      images: [
        'path/to/image1.jpg',
        'path/to/image2.jpg'
      ]
    },
    {
      title: 'Santorini, Hellas',
      date: '21.04.2024',
      text: `Nå e jo ikkje me de så springe beinå av seg for å gå på konserter, derfor e de jysla kjekt når ein forestilling e verd heile turen!\n\n
             Dette e ei irske gruppa, Shamrock tenors, så synge irske folkesanger og ballader, fantastiske stemmer, og itte jubelen å dømma,
             må halvdelen av passasjerene vera irer! Me lerte og någe heilt nytt, for ein av sangene va ein hymne te det irske rugbylaget,
             og det e den einaste sportsgrenen kor Irland representeres som ett land, og den hymnen va faktisk rørande!\n\n
             Me har hatt sjødag i dag, og det e egentlig ganske deilig, starta dagen med havregrøt, og så va det interessant foredrag om Cykladene,
             Santorini, kor me komme te i mårå tidlig! Der e et drøss med restauranter ombord, me har fått omvisning på det enorme hovedkjøkkenet,
             der lages det 10.000 måltider te dagen! Betjeningen ombord komme hovedsakelig fra Indonesia og Fillipinene,
             og itte å ha servert oss et par ganger, huske de navnene våre! De jobbe ombord i 7 måneder, og så har de fri i 2!\n\n
             I kveld va det såkalt chic antrekk, heilt frivillig, og det e utrolig kor oppstasa mange e, og eg ser jo at kunsten å gå på høge hæler
             ikkje e det sama for ein generasjon så alltid går med joggesko!`,
      images: [
        'path/to/image3.jpg',
        'path/to/image4.jpg'
      ]
    }
  ];

  return (
    <div className="hellas-page">
      <div className="entries">
        {entries.map((entry, index) => (
          <DiaryEntry 
            key={index}
            title={entry.title}
            date={entry.date}
            text={entry.text}
            images={entry.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Hellas;
