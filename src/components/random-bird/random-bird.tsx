import React from 'react';
import BirdAudio from './random-audio';
import { Ibird } from '../../interface';
import { useStateApp } from '../../appContext';

type RandomBird = {
  birds: Ibird[][];
};

function RandomBird({ birds }: RandomBird): JSX.Element {
  const image = '/static/media/bird.jpg';
  const stateApp = useStateApp();
  return (
    <div className="random-quiz">
      <img className="quiz-image" src={image} alt="bird" />
      <BirdAudio
        bird={birds[stateApp.stateApp.level][stateApp.stateApp.random]}
      />
    </div>
  );
}

export default RandomBird;
