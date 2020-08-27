import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import RandomBird from './components/random-bird/random-bird';
import AnswerBird from './components/answer-bird/answer-bird';
import AudioSound from './components/audio/audioSound';
import { randomNumber } from './common/random/random';
import { Ibird, IstateApp } from './interface';
import data from './data/data';

function App(): JSX.Element {
  const birds: Ibird[] = data[0];
  const [stateApp, setRandom] = useState<IstateApp>({
    level: 1,
    random: randomNumber(0, birds.length - 1),
    score: 0,
  });

  const bird: Ibird = birds[stateApp.random];
  const nextLevel = (score: number) => {
    setRandom((prev) => ({
      level: prev.level++,
      random: randomNumber(0, data[++prev.level].length - 1),
      score: score,
    }));
  };

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <RandomBird bird={bird} />
        <AnswerBird birds={birds} numberSucces={stateApp.random} />
      </BrowserRouter>
    </div>
  );
}

export default App;
