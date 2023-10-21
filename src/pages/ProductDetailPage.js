import React from 'react'
import ProductDetails from '../components/ProductDetails'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {

  const dispatch = useDispatch();
  const cartItmes = useSelector(state => state.cart.items);
  const products = useSelector(state => state.product.products);
  let { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));
  const addTocart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })
  }

  return (
    <div>
      <Navbar cartCount={cartItmes} />
      <ProductDetails products={products} product={product} addTocart={addTocart} />
    </div>
  )
}

export default ProductDetailPage