# DO Product Card

Test package of npm deployments

## Example:

```js
import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
} from 'do-product-card';
```

```jsx
<ProductCard
  product={product}
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
```
