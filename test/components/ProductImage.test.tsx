import * as React from 'react';
import { create } from 'react-test-renderer';
import { ProductCard } from '../../src/components';

import { ProductImg } from '../../src/components/ProductImage';
import { testProduct2 } from '../data/product';

describe('first', () => {
  test('should first', () => {
    const wrapper = create(
      <ProductImg
        className="custom-class-img"
        img="./../../example"
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should second', () => {
    const wrapper = create(
      <ProductCard product={testProduct2}>
        {() => <ProductImg className="custom-class-img" />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
