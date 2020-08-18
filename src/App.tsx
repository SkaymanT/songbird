import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import RandomBird from './components/random-bird/random-bird';
import LoaderCommon from './components/common/loader';
import AnswerBird from './components/answer-bird/answer-bird';

function App(): JSX.Element {
  const img = '/static/media/bird.jpg';
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <LoaderCommon />
        <RandomBird img={img} />
        <AnswerBird />
      </BrowserRouter>
    </div>
  );
}

export default App;
