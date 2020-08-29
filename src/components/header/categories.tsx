import React from 'react';
import Category from './category';
import { Icategory } from '../../interface';

type CategoriesType = {
  activeCategories: number;
};

function Categories({activeCategories}: CategoriesType): JSX.Element {
  const nameCategories: Icategory[] = [
    { name: 'Разминка', id: 0, isActive: false },
    { name: 'Воробьиные', id: 1, isActive: false },
    { name: 'Лесные птицы', id: 2, isActive: false },
    { name: 'Певчие птицы', id: 3, isActive: false },
    { name: 'Хищные птицы', id: 4, isActive: false },
    { name: 'Морские птицы', id: 5, isActive: false },
  ];
  nameCategories[activeCategories].isActive=true;
  return (
    <ul className="categories">
      {nameCategories.map((item) => {
        return <Category item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default Categories;
