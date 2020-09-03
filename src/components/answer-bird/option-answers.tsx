import React, { useState, useEffect } from 'react';
import { Ibird, IstateOption } from '../../interface';

type BirdList = {
  birds: Ibird[];
  numberSucces: number;
  toggleGame: boolean;
  clickOnBird(id: number, isGame: boolean, scoreRound: number): void;
  isTrueBird(): void;
};

function DetailsOption({
  birds,
  numberSucces,
  toggleGame,
  clickOnBird,
  isTrueBird,
}: BirdList): JSX.Element {
  const bufOption: IstateOption = {} as IstateOption;
  bufOption.scoreRound = 5;
  bufOption.option = [];
  birds.forEach(() => {
    bufOption.option.push(false);
  });
  const [optionState, setOptionState] = useState<IstateOption>(bufOption);

  useEffect(() => {
    setOptionState((prev) => bufOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleGame]);

  const clickOnOption = (id: number) => {
    const srcSucces = '/static/audio/success.mp3';
    const srcError = '/static/audio/error.mp3';

    if (!optionState.isFinishedRound) {
      if (numberSucces === id - 1) {
        const audio = new Audio(srcSucces);
        audio.play();
        setOptionState((prev) => ({
          scoreRound: prev.scoreRound,
          isFinishedRound: true,
          option: prev.option.map((option, index) => {
            if (index === id - 1) {
              option = true;
            }
            return option;
          }),
        }));
        clickOnBird(id, true, optionState.scoreRound);
        isTrueBird();
      } else {
        const audio = new Audio(srcError);
        audio.play();
        if (!optionState.option[id - 1]) {
          setOptionState((prev) => ({
            scoreRound: prev.scoreRound - 1,
            isFinishedRound: false,
            option: prev.option.map((option, index) => {
              if (index === id - 1) {
                option = true;
              }
              return option;
            }),
          }));
        }
        clickOnBird(id, false, optionState.scoreRound);
      }
    } else {
      clickOnBird(id, true, optionState.scoreRound);
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
