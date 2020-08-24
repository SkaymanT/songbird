import React from 'react';
import BodyCard from './body-card';
import { Ibird } from '../../interface';

type Tbird = {
  bird: Ibird;
};

function BirdCard({ bird }: Tbird): JSX.Element {
  // console.log('bird', bird);
  return (
    <div className="column">
      <div className="bird-card">
        <p className="description">
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка.</span>
        </p>
        <BodyCard bird={bird} />
        <span className="definition-bird" style={{ display: 'flex' }}>
          {bird.description}
        </span>
      </div>
    </div>
  );
}

export default BirdCard;
