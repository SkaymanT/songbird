import React, { useState } from 'react';
import { Ibird, IstateAnswers, Ioption } from '../../interface';
import { useBirdCard } from './BirdCardContext';

type BirdList = {
  birds: Ibird[];
  numberSucces: number;
  clickOnBird(id: number): void;
};

function DetailsOption({
  birds,
  numberSucces,
  clickOnBird,
}: BirdList): JSX.Element {
  const bufOption: Ioption[] = [];
  birds.forEach(() => {
    bufOption.push({ onClickOption: false });
  });
  const [optionState, setOptionState] = useState<Ioption[]>(bufOption);
  // const { toggle } = useBirdCard()!;

  const clickOnOption = (id: number) => {
    setOptionState((prev) =>
      prev.map((option, index) => {
        if (index === id - 1) {
          option.onClickOption = true;
        }
        return option;
      })
    );
    clickOnBird(id);
  };
  console.log(optionState);
  return (
    <div className="column">
      <ul className="item-list">
        {birds.map((bird, index) => {
          let classes = ['item-list-item'];
          if (optionState[index].onClickOption) {
            if (numberSucces === index) {
              classes.push('succes');
            } else {
              classes.push('error');
            }
          }
          return (
            <li
              className={classes.join(' ')}
              key={bird.id}
              onClick={() => clickOnOption(bird.id)}
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
