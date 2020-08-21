import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import RandomBird from './components/random-bird/random-bird';
import AnswerBird from './components/answer-bird/answer-bird';
import { http } from './components/common/network/network';
import { Ibird } from './interface';

function App(): JSX.Element {
  const img = '/static/media/bird.jpg';
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const birds: Ibird[] = [
    { name: 'Ворон', id: 0 },
    { name: 'Журавль', id: 1 },
    { name: 'Ласточка', id: 2 },
    { name: 'Козодой', id: 3 },
    { name: 'Кукушка', id: 4 },
    { name: 'Синица', id: 5 },
  ];

  useEffect(() => {
    async function anyNameFunction() {
      const data = await http<Ibird[]>(
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
        <AnswerBird birds={birds} />
      </BrowserRouter>
    </div>
  );
}

export default App;
