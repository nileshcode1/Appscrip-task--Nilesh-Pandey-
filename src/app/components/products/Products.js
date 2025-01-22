
import React, { Suspense } from 'react';
import ProductsList from './ProductList';

const Products = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsList />
    </Suspense>
  );
};

export default Products;
