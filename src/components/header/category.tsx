import React from 'react';
import { Icategory } from '../../interface';

export default function Category(nameCategory: any): JSX.Element {
  return <li className="category">{nameCategory}</li>;
}
