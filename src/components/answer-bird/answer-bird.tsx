import React from 'react';
import OptionAnswers from './option-answers';
import BirdCard from './bird-card';
import { Ibird } from '../../interface';

type BirdList = {
  birds: Ibird[];
};

function AnswerBird({ birds }: BirdList): JSX.Element {
  return (
    <div className="answer-bird">
      <OptionAnswers birds={birds} />
      <BirdCard />
      <button className="btn">Next Level</button>
    </div>
  );
}

export default AnswerBird;
