import React from 'react';
import { Ibird } from '../../interface';

type BirdList = {
  birds: Ibird[];
  changeBird(id: number): void;
};

function DetailsOption({ birds, changeBird }: BirdList): JSX.Element {
  return (
    <div className="column">
      <ul className="item-list">
        {birds.map((bird) => {
          const classes = ['item-list-item'];
          return (
            <li
              className={classes.join(' ')}
              key={bird.id}
              onClick={() => {
                changeBird(bird.id);
              }}
            >
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
