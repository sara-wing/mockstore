import React from 'react'
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector(state => state.products.list);

  return (
    <ul>
      {products.map(product => <li key={product}>{product}</li>)}
    </ul>
  )
}


export default ProductList
