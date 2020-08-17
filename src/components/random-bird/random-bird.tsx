import React from 'react';
import BirdAudio from './random-audio';

type RandomImg = {
  img: string;
};

function RandomBird({ img }: RandomImg): JSX.Element {
  return (
    <div className="random-quiz">
      <img className="quiz-image" src={img} alt="bird" />
      <BirdAudio />
    </div>
  );
}

export default RandomBird;
