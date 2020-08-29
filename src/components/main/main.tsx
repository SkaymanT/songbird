import React from "react";
import Header from "../header/header";
import RandomBird from "../random-bird/random-bird";
import AnswerBird from "../answer-bird/answer-bird";
import { Ibird } from "../../interface";
import GameOver from "../game-over/game-over";
import { useStateApp } from "../../appContext";

type BirdList = {
  birds: Ibird[][];
};

function Main({ birds }: BirdList): JSX.Element {
  const contextApp = useStateApp(); 
  if (!contextApp.stateApp.isGameOver) {
    return (
      <React.Fragment>
        <Header />
        <RandomBird birds={birds} />
        <AnswerBird birds={birds} />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <GameOver />
      </React.Fragment>
    );
  }
}

export default Main;
