import React, { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Ibird } from '../../interface';
import H5AudioPlayer from 'react-h5-audio-player';

type RandomAudio = {
  bird: Ibird;
  isTrue: boolean;
};

function BirdAudio({ bird, isTrue }: RandomAudio): JSX.Element {
  let nameBird: string;
  isTrue ? (nameBird = bird.name) : (nameBird = '******');
  const audioRef = useRef<H5AudioPlayer>(null);
  if (isTrue && audioRef.current) {
    audioRef.current.audio.current?.pause();
  }
  const Player = () => (
    <AudioPlayer
      src={bird.audio}
      autoPlayAfterSrcChange={false}
      layout="horizontal-reverse"
      showJumpControls={false}
      customAdditionalControls={[]}
      ref={audioRef}
    />
  );
  return (
    <div>
      <ul className="group-quiz">
        <li className="group-quiz-item">
          <h3>{nameBird}</h3>
        </li>
        <li className="group-quiz-item">{Player()}</li>
      </ul>
    </div>
  );
}

export default BirdAudio;
