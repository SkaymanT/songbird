import React from 'react';
import BirdAudio from './random-audio';
import { Ibird } from '../../interface';

type RandomBird = {
  birds: Ibird[][];
};

function RandomBird({ birds }: RandomBird): JSX.Element {
  const image = '/static/media/bird.jpg';
  return (
    <div className="random-quiz">
      <img className="quiz-image" src={image} alt="bird" />
      <BirdAudio bird={birds[0][0]} />
    </div>
  );
}

export default RandomBird;
