import React from 'react';
import OptionAnswers from './option-answers';
import BirdCard from './bird-card';
import { Ibird } from '../../interface';

type BirdList = {
  birds: Ibird[];
};

function AnswerBird({ birds }: BirdList): JSX.Element {
  console.log('birds', birds[0]);
  return (
    <div className="answer-bird">
      <OptionAnswers birds={birds} />
      <BirdCard bird={birds[1]} />
      <button className="btn">Next Level</button>
    </div>
  );
}

export default AnswerBird;
