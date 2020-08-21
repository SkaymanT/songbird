import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Ibird } from '../../interface';

type BirdList = {
  birds: Ibird[];
};

function BirdCard(): JSX.Element {
  const name = 'Ворон';
  const nameEnglish = 'Corvus corax';
  const srcAudio =
    'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3';
  const srcImage =
    'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg';
  return (
    <div className="body-card">
      <img className="image-card" src={srcImage} alt={name} />
      <ul className="group-quiz">
        <li className="group-quiz-item">
          <h4>{name}</h4>
        </li>
        <li className="group-quiz-item">
          <span>{nameEnglish}</span>
        </li>
        <li className="group-quiz-item">
          <AudioPlayer
            src={srcAudio}
            layout="horizontal-reverse"
            showJumpControls={false}
            customAdditionalControls={[]}
          />
        </li>
      </ul>
    </div>
  );
}

export default BirdCard;
