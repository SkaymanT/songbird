import React from 'react';
import OptionAnswers from './option-answers';
import BirdCard from './bird-card';
import { Ibird } from '../../interface';

type BirdList = {
  birds: Ibird[];
  changeBird(id: number): void;
};

function AnswerBird({ birds, changeBird }: BirdList): JSX.Element {
  return (
    <div className="answer-bird">
      <OptionAnswers birds={birds} changeBird={changeBird} />
      <BirdCard bird={birds[0]} />
      <button className="btn">Next Level</button>
    </div>
  );
}

export default AnswerBird;
