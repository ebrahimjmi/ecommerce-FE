import React from 'react'
import Checkout from '../components/Checkout'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';

const CheckoutPage = () => {
    const cartItmes = useSelector(state => state.cart.items);
    const order = useSelector(state => state.order);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const placeOrder = (e) => {
        if (order.shipping_address) {
            dispatch({
                type: "PLACE_ORDER",
                payload: order,
            })
            dispatch({
                type: 'CART_EMPTY'
            })
        } else {
            alert('choose a shipping address');
        }
    }
    return (
        <div>
            <Navbar cartCount={cartItmes} />
            <Checkout order={order} user={user} placeOrder={placeOrder} />
        </div>
    )
}

export default CheckoutPage