import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import RandomBird from './components/random-bird/random-bird';
import AnswerBird from './components/answer-bird/answer-bird';
import { http } from './components/common/network/network';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App(): JSX.Element {
  const img = '/static/media/bird.jpg';

  useEffect(() => {
    async function anyNameFunction() {
      const data = await http<Todo[]>(
        'https://jsonplaceholder.typicode.com/todos'
      );
      console.log(data);
    }
    anyNameFunction();
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <RandomBird img={img} />
        <AnswerBird />
      </BrowserRouter>
    </div>
  );
}

export default App;
