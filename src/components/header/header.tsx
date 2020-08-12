import React from 'react';
import TopPanel from './top-panel';
import Categories from './categories';

export default function Header(): JSX.Element {
  const categories = [];
  return (
    <div className="header">
      <TopPanel />
      <Categories />
    </div>
  );
}
