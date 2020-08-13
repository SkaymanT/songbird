import React from 'react';
import Category from './category';
import { Icategory } from '../../interface';

function Categories(): JSX.Element {
  const nameCategories: Icategory[] = [
    { name: 'Разминка', id: 0, isActive: true },
    { name: 'Воробьиные', id: 1, isActive: false },
    { name: 'Лесные птицы', id: 2, isActive: false },
    { name: 'Певчие птицы', id: 3, isActive: false },
    { name: 'Хищные птицы', id: 4, isActive: false },
    { name: 'Морские птицы', id: 5, isActive: false },
  ];
  return (
    <ul className="categories">
      {nameCategories.map((item) => {
        // return true;
        return <Category item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default Categories;
