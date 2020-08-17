import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

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
          <AudioPlayer
            src={
              'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
            }
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
