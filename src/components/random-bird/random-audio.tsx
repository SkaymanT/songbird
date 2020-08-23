import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Ibird } from '../../interface';

type RandomAudio = {
  bird: Ibird;
};

function BirdAudio({ bird }: RandomAudio): JSX.Element {
  return (
    <div>
      <ul className="group-quiz">
        <li className="group-quiz-item">
          <h3>******</h3>
        </li>
        <li className="group-quiz-item">
          <AudioPlayer
            src={bird.audio}
            layout="horizontal-reverse"
            showJumpControls={false}
            customAdditionalControls={[]}
          />
        </li>
      </ul>
    </div>
  );
}

export default BirdAudio;
