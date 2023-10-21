import React, { useEffect } from 'react'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'

const CartPage = () => {

    const cartItmes = useSelector(state => state.cart.items);
    const orderDetails = useSelector(state => state.order);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
          {
            type: 'CHANGE_ORDER_CART',
            payload: cartItmes,
          }
        )
      }, [cartItmes])
    return (
        <div>
            <Navbar cartCount={cartItmes} />
            <Cart cartItems={cartItmes} orderDetails = {orderDetails} />
        </div>
    )
}

export default CartPage