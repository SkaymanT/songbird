import React from 'react';
import TopPanel from './top-panel';
import Categories from './categories';
import { useStateApp } from '../../appContext';

export default function Header(): JSX.Element {
  const stateApp = useStateApp();
  const score = stateApp.stateApp.score;
  return (
    <div className="header">
      <TopPanel score={score} />
      <Categories />
    </div>
  );
}
