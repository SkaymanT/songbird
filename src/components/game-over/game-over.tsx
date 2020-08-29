import React from "react";
import { useStateApp } from "../../appContext";

function GameOver(): JSX.Element {
  const stateApp = useStateApp();

  return (
    <div className="game-over">
      <h1 className="title-game-over">Поздравляем!</h1>
      <p className="text-game-over">
        Вы прошли викторину и набрали {stateApp.stateApp.score} из 30 возможных
        баллов
      </p>
      <hr className="hr-game-over" />
      <button className="button-game-over" onClick={()=>{stateApp.nextGame()}}>Попробовать еще раз!</button>
    </div>
  );
}
export default GameOver;
