import React, { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from './../styles/styles.module.css';
import { InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from '../interfaces/interfaces';

export interface Props {
  product: Product;
  // children?: ReactElement[] | ReactElement;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;

  onChange?: (args: onChangeArgs) => void;
  value?: number;

  // State initializer
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount,
        isMaxCountReached,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
