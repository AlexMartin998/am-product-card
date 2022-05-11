import * as React from 'react';
import { create, act } from 'react-test-renderer';

import { testProduct2 } from '../data/product';
import { ProductCard } from '../../src/components/index';

describe('first', () => {
  test('should return a correctly rendered component', () => {
    const wrapper = create(
      <ProductCard product={testProduct2} className="custom-class-product-card">
        {() => <h1>Hello Test!</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increase counter', () => {
    const wrapper = create(
      <ProductCard product={testProduct2} className="custom-class-product-card">
        {({ count, increaseBy }) => (
          <>
            <h1>Hello Test - Counter!</h1>

            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>+1</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
