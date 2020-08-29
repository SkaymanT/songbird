import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Ibird } from '../../interface';

type Tbird = {
  bird: Ibird;
};

function BodyCard({ bird }: Tbird): JSX.Element {
  return (
    <div className="body-card">
      <img className="image-card" src={bird.image} alt={bird.name} />
      <ul className="group-quiz">
        <li className="group-quiz-item">
          <h4>{bird.name}</h4>
        </li>
        <li className="group-quiz-item">
          <span>{bird.species}</span>
        </li>
        <li className="group-quiz-item">
          <AudioPlayer
            src={bird.audio}
            autoPlayAfterSrcChange={false}
            layout="horizontal-reverse"
            showJumpControls={false}
            customAdditionalControls={[]}
          />
        </li>
      </ul>
    </div>
  );
}

export default BodyCard;
