import React from 'react';
import BirdAudio from './random-audio';
import { Ibird } from '../../interface';
import { useStateApp } from '../../appContext';

type RandomBird = {
  birds: Ibird[][];
};

function RandomBird({ birds }: RandomBird): JSX.Element {
  const stateApp = useStateApp();
  let image: string;
  if (stateApp.stateApp.isTrue) {
    image = birds[stateApp.stateApp.level][stateApp.stateApp.random].image;
  } else {
    image = '/static/media/bird.jpg';
    console.log(
      'Правильный ответ:',
      birds[stateApp.stateApp.level][stateApp.stateApp.random].name
    );
  }
  return (
    <div className="random-quiz">
      <img className="quiz-image" src={image} alt="bird" />
      <BirdAudio
        bird={birds[stateApp.stateApp.level][stateApp.stateApp.random]}
        isTrue={stateApp.stateApp.isTrue}
      />
    </div>
  );
}

export default RandomBird;
