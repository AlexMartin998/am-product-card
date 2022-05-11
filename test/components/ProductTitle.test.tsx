import * as React from 'react';
import { create } from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { testProduct, testProduct2 } from '../data/product';

describe('it', () => {
  it('should return a correctly rendered component', () => {
    const wrapper = create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should return a component with product name', () => {
    const wrapper = create(
      <ProductCard product={testProduct}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
