import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImg, ProductTitle, ProductButtons } from '../.';

const App = () => {
  return (
    <>
      <ProductCard
        product={{
          id: '1',
          title: 'Coffee mug - card',
          // img: './coffee-mug.png',
        }}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ isMaxCountReached, maxCount, reset, increaseBy }) => (
          <>
            <ProductImg />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
