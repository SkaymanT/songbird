import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';


function App(): JSX.Element {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
