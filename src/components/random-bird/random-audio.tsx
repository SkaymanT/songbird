import React from 'react';
import AudioPlayer from '../audioplayer/audio-player';

type RandomAudio = {
  img: string;
};

function BirdAudio(): JSX.Element {
  return (
    <div>
      <ul className="group-quiz">
        <li className="group-quiz-item">
          <h3>******</h3>
        </li>
        <li className="group-quiz-item">
          <AudioPlayer />
        </li>
      </ul>
    </div>
  );
}

export default BirdAudio;
