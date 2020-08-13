import React from 'react';
import { Icategory } from '../../interface';

type NameCategory = {
  item: Icategory;
};

export default function Category({ item }: NameCategory): JSX.Element {
  const classes = ['category'];
  if (item.isActive) {
    classes.push('active');
  }

  return (
    <li className={classes.join(' ')}>
      <a className="category-link" href="/">
        {item.name}
      </a>
    </li>
  );
}
