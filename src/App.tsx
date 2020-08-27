import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import RandomBird from './components/random-bird/random-bird';
import AnswerBird from './components/answer-bird/answer-bird';
import { randomNumber } from './common/random/random';
import { Ibird, IstateApp } from './interface';
import data from './data/data';
import AppProvider from './components/answer-bird/contextApp';

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
      <AppProvider>
        <Header />
        <RandomBird bird={bird} />
        <AnswerBird birds={birds} numberSucces={stateApp.random} />
      </AppProvider>
    </div>
  );
}

export default App;
