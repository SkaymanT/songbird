import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import RandomBird from './components/random-bird/random-bird';
import AnswerBird from './components/answer-bird/answer-bird';
import AudioSound from './components/audio/audioSound';
// import { http } from './common/network/network';
import { randomNumber } from './common/random/random';
import { Ibird } from './interface';
import data from './data/data';

function App(): JSX.Element {
  const bufData: Ibird[] = data[0];
  const [birds, setBirds] = useState<Ibird[]>(
    bufData.map((bird) => {
      bird.isSucces = false;
      bird.onClick = false;
      return bird;
    })
  );
  // const numRandom = randomNumber(0, birds.length - 1);
  const bird: Ibird = birds[0];
  // const removeHandler = (event: React.MouseEvent, id: number) => {
  //   event.preventDefault();
  //   onRemove(id);
  // };

  const checkBirdHandler = () => {
    console.log('Проверка правильной птицы');
  };

  const changeBirdHandler = (id: number) => {
    setBirds((prev) =>
      prev.map((bird) => {
        if (bird.id === id) {
          bird.isSucces = true;
          console.log('bird', bird);
        }
        return bird;
      })
    );
    console.log('Изменение рандомной птицы');
  };

  const changeLevelHandler = () => {
    console.log('Изменение уровня');
  };

  // useEffect(() => {
  //   async function anyNameFunction() {
  //     const data = await http<Ibird[]>(
  //       'https://jsonplaceholder.typicode.com/todos'
  //     );
  //     console.log(data);
  //   }
  //   anyNameFunction();
  // }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <RandomBird bird={bird} />
        <AnswerBird birds={birds} changeBird={changeBirdHandler} />
        <AudioSound />
      </BrowserRouter>
    </div>
  );
}

export default App;
