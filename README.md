# AM Product Card

Test package for npm deployments

## Example:

```js
import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
} from 'am-product-card';
```

```jsx
<ProductCard
  product={product}
  initialValues={{
    count: 7,
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
```
