import React, { useState } from 'react';
import { Ibird, Ioption } from '../../interface';

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

  const clickOnOption = (id: number) => {
    const srcSucces = '/static/audio/success.mp3';
    const srcError = '/static/audio/error.mp3';
    if (!optionState[id - 1].onClickOption) {
      if (numberSucces === id - 1) {
        const audio = new Audio(srcSucces);
        audio.play();
      } else {
        const audio = new Audio(srcError);
        audio.play();
      }
      setOptionState((prev) =>
        prev.map((option, index) => {
          if (index === id - 1) {
            option.onClickOption = true;
          }
          return option;
        })
      );
      clickOnBird(id);
    }
  };
  return (
    <div className="column">
      <ul className="item-list">
        {birds.map((bird, index) => {
          let classes = ['item-list-item'];
          if (optionState[index].onClickOption) {
            if (numberSucces === index) {
              classes.push('success');
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
