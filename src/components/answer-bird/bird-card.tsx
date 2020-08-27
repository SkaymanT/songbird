import React, { useContext } from 'react';
import BodyCard from './body-card';
import { Ibird, IstateAnswers } from '../../interface';
// import { useBirdCard } from './BirdCardContext';

type Tbird = {
  birds: Ibird[];
  stateAnswer: IstateAnswers;
};

function BirdCard({ birds, stateAnswer }: Tbird): JSX.Element {
  // const birdCard = useBirdCard();
  if (!stateAnswer.isStart)
    return (
      <div className="column">
        <div className="bird-card">
          <p className="description">
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка.</span>
          </p>
        </div>
      </div>
    );
  return (
    <div className="column">
      <div className="bird-card">
        <BodyCard bird={birds[stateAnswer.idActive - 1]} />
        <span className="definition-bird" style={{ display: 'flex' }}>
          {birds[stateAnswer.idActive - 1].description}
        </span>
      </div>
    </div>
  );
}

export default BirdCard;
