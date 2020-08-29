import React, { useState, useEffect } from 'react';
import { Ibird, IstateOption } from '../../interface';

type BirdList = {
  birds: Ibird[];
  numberSucces: number;
  toggleGame: boolean;
  clickOnBird(id: number, isGame: boolean, scoreRound: number): void;
};

function DetailsOption({
  birds,
  numberSucces,
  toggleGame,
  clickOnBird,
}: BirdList): JSX.Element {
  const bufOption: IstateOption = {} as IstateOption;
  bufOption.scoreRound = 5;
  bufOption.option = [];
  birds.forEach(() => {
    bufOption.option.push(false);
  });
  const [optionState, setOptionState] = useState<IstateOption>(bufOption);
  console.log(optionState);

  useEffect(() => {
    setOptionState(bufOption);
  }, [toggleGame]);

  const clickOnOption = (id: number) => {
    const srcSucces = '/static/audio/success.mp3';
    const srcError = '/static/audio/error.mp3';
    if (!optionState.option[id - 1]) {
      if (numberSucces === id - 1) {
        const audio = new Audio(srcSucces);
        audio.play();
        clickOnBird(id, true, bufOption.scoreRound);
        setOptionState((prev) => ({
          scoreRound: prev.scoreRound,
          option: prev.option.map((option, index) => {
            if (index === id - 1) {
              option = true;
            }
            return option;
          }),
        }));
      } else {
        const audio = new Audio(srcError);
        audio.play();
        clickOnBird(id, false, bufOption.scoreRound);
        setOptionState((prev) => ({
          scoreRound: --prev.scoreRound,
          option: prev.option.map((option, index) => {
            if (index === id - 1) {
              option = true;
            }
            return option;
          }),
        }));
      }
    }
  };
  return (
    <div className="column">
      <ul className="item-list">
        {birds.map((bird, index) => {
          let classes = ['item-list-item'];
          if (optionState.option[index]) {
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
