import React from 'react';
import './App.scss';
import Header from './components/header/header';
import RandomBird from './components/random-bird/random-bird';
import AnswerBird from './components/answer-bird/answer-bird';
import { Ibird } from './interface';
import data from './data/data';
import AppProvider from './appContext';

function App(): JSX.Element {
  const birds: Ibird[][] = data;

  return (
    <div className="container">
      <AppProvider>
        <Header />
        <RandomBird birds={birds} />
        <AnswerBird birds={birds} />
      </AppProvider>
    </div>
  );
}

export default App;
