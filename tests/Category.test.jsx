import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Category from '../src/components/Category';
import { BrowserRouter } from 'react-router-dom';

describe('Category', () => {
  const id = 'category-name';
  const products = [
    {
      id: 1,
      title: 'item 01',
      price: 15,
      image: 'url 1',
    },
    {
      id: 2,
      title: 'item 02',
      price: 20,
      image: 'url 2',
    },
    {
      id: 3,
      title: 'item 03',
      price: 25,
      image: 'url 3',
    },
  ];
  const category = "categoryname";
  const addToCart = () => {};
  render(
    <BrowserRouter>
      <Category
        id={id}
        products={products}
        category={category}
        addToCart={addToCart}
      />
    </BrowserRouter>
  );

  const categoryTitle = document.querySelector('h2')

  it('renders to the screen with the right id', () => {
    expect(document.querySelector(`#${id}`)).toBeInTheDocument;
  });

  it ('a title is displayed', () => {
    expect(categoryTitle).toBeInTheDocument;
  })

  it('category title is the same provided in the props', () => {
    expect(categoryTitle.textContent).toBe(`${category}`)
  })

  it('category title has the correct className', () => {
    expect(categoryTitle.className).toBe('cat-title');
  });

})