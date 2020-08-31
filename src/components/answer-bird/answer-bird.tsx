import React, { useState } from 'react';
import OptionAnswers from './option-answers';
import BirdCard from './bird-card';
import { Ibird, IstateAnswers } from '../../interface';
import { useStateApp } from '../../appContext';

type BirdList = {
  birds: Ibird[][];
};

function AnswerBird({ birds }: BirdList): JSX.Element {
  const stateApp = useStateApp();

  const [birdsState, setStateBirds] = useState<IstateAnswers>({
    isStart: false,
    isEnd: false,
    scoreRound: 0,
    idActive: 0,
  });

  const nextLevelBirds = (scoreRound: number) => {
    stateApp.nextLevel(scoreRound);
    setStateBirds((prev) => ({
      isStart: false,
      isEnd: false,
      scoreRound: 0,
      idActive: 0,
    }));
  };

  const clickOnBird = (id: number, isEnd: boolean, scoreRound: number) => {
    setStateBirds((prev) => ({
      isStart: true,
      isEnd: isEnd,
      scoreRound: scoreRound,
      idActive: id,
    }));
  };

  let classes = ['btn'];
  if (birdsState.isEnd) {
    classes.push('next-level');
  }
  return (
    <div className="answer-bird">
      <OptionAnswers
        birds={birds[stateApp.stateApp.level]}
        numberSucces={stateApp.stateApp.random}
        toggleGame={stateApp.stateApp.isNext}
        clickOnBird={clickOnBird}
        isTrueBird={stateApp.isTrue}
      />
      <BirdCard
        birds={birds[stateApp.stateApp.level]}
        stateAnswer={birdsState}
      />
      <button
        className={classes.join(' ')}
        disabled={!birdsState.isEnd}
        onClick={() => {
          nextLevelBirds(birdsState.scoreRound);
        }}
      >
        Следующее испытание
      </button>
    </div>
  );
}
export default AnswerBird;
