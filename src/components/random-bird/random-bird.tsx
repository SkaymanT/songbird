import React from 'react';
import BirdAudio from './random-audio';
import { Ibird } from '../../interface';

type RandomBird = {
  bird: Ibird;
};

function RandomBird({ bird }: RandomBird): JSX.Element {
  const image = '/static/media/bird.jpg';
  return (
    <div className="random-quiz">
      <img className="quiz-image" src={image} alt="bird" />
      <BirdAudio bird={bird} />
    </div>
  );
}

export default RandomBird;
