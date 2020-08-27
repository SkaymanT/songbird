import React, { useState } from 'react';
import OptionAnswers from './option-answers';
import BirdCard from './bird-card';
import { Ibird, IstateAnswers } from '../../interface';
import AudioSound from '../audio/audioSound';
// import BirdCardProvider from './BirdCardContext';

type BirdList = {
  birds: Ibird[];
  numberSucces: number;
  // changeBird(id: number): void;
};

function AnswerBird({ birds, numberSucces }: BirdList): JSX.Element {
  const [birdsState, setStateBirds] = useState<IstateAnswers>({
    isStart: false,
    idActive: 0,
  });
  const clickOnBird = (id: number) => {
    setStateBirds((prev) => ({
      isStart: true,
      idActive: id,
    }));
  };

  return (
    // <BirdCardProvider>
    <div className="answer-bird">
      <OptionAnswers
        birds={birds}
        numberSucces={numberSucces}
        clickOnBird={clickOnBird}
      />
      <BirdCard birds={birds} stateAnswer={birdsState} />
      <button className="btn">Next Level</button>
      <AudioSound isSucces={birdsState.isStart}></AudioSound>
    </div>
    // </BirdCardProvider>
  );
}

export default AnswerBird;
