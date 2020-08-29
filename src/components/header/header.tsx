import React from 'react';
import TopPanel from './top-panel';
import Categories from './categories';
import { useStateApp } from '../../appContext';

export default function Header(): JSX.Element {
  const stateApp = useStateApp();
  return (
    <div className="header">
      <TopPanel score={stateApp.stateApp.score} />
      <Categories activeCategories={stateApp.stateApp.level}/>
    </div>
  );
}
