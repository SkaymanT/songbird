import React from 'react';
import { useStateApp } from '../../appContext';

function GameOver(): JSX.Element {
  const stateApp = useStateApp();
  const maxScore = 30;
  const imageSrc = '/static/media/James_Bond_1974.jpg';
  if (stateApp.stateApp.score === maxScore) {
    return (
      <div className="game-over">
        <h1 className="title-game-over">Поздравляем!</h1>
        <p className="text-game-over">Джеймс Бонд гордится тобой!</p>
        <img className="image-game-over" src={imageSrc} alt="james-bond" />
        <hr className="hr-game-over" />
        <button
          className="button-game-over"
          onClick={() => {
            stateApp.nextGame();
          }}
        >
          Попробовать еще раз!
        </button>
      </div>
    );
  } else {
    return (
      <div className="game-over">
        <h1 className="title-game-over">Поздравляем!</h1>
        <p className="text-game-over">
          Вы прошли викторину и набрали {stateApp.stateApp.score} из 30
          возможных баллов
        </p>
        <hr className="hr-game-over" />
        <button
          className="button-game-over"
          onClick={() => {
            stateApp.nextGame();
          }}
        >
          Попробовать еще раз!
        </button>
      </div>
    );
  }
}
export default GameOver;
