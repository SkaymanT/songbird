import React from 'react';
import Category from './category';
import { Icategory } from '../../interface';

function Categories(): JSX.Element {
  const nameCategories: Icategory[] = [
    { name: 'test 1' },
    { name: 'test 2' },
    { name: 'test 3' },
    { name: 'test 4' },
  ];
  return (
    <ul className="categories">
      {nameCategories.map((item) => {
        const nameCategory = { item };
        console.log(nameCategory);
        // return true;
        return <Category nameCategory={item} />;
      })}
    </ul>
  );
}

export default Categories;
