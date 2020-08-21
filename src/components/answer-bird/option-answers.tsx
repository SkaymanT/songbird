import React from 'react';
import { Ibird } from '../../interface';

type BirdList = {
  birds: Ibird[];
};

function DetailsOption({ birds }: BirdList): JSX.Element {
  return (
    <div className="column">
      <ul className="item-list">
        {birds.map((bird) => {
          const classes = ['item-list-item'];
          return (
            <li className={classes.join(' ')} key={bird.id}>
              <span className="li-btn"></span>
              {bird.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DetailsOption;
