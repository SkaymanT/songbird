import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import RandomBird from './components/random-bird/random-bird';
import AnswerBird from './components/answer-bird/answer-bird';
// import { http } from './common/network/network';
import { randomNumber } from './common/random/random';
import { Ibird } from './interface';
import data from './data/data';

function App(): JSX.Element {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const birds: Ibird[] = data[0];
  const numRandom = randomNumber(0, birds.length);
  const bird: Ibird = data[0][numRandom];
  console.log(bird);

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
        <AnswerBird birds={birds} />
      </BrowserRouter>
    </div>
  );
}

export default App;
