import React from 'react';
import BodyCard from './body-card';

type RandomImg = {
  img: string;
};

function BirdCard(): JSX.Element {
  const definition =
    'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.';
  return (
    <div className="column">
      <div className="bird-card">
        <p className="description">
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка.</span>
        </p>
        <BodyCard />
        <span className="definition-bird" style={{ display: 'flex' }}>
          {definition}
        </span>
      </div>
    </div>
  );
}

export default BirdCard;
