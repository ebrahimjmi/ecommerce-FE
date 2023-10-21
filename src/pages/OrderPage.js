import React from 'react'
import Orders from '../components/Orders';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const OrderPage = () => {
  const cartItmes = useSelector(state => state.cart.items);
  const orders = useSelector(state => state.user.orders);
  console.log(orders)
  return (
    <div>
      <Navbar cartCount={cartItmes} />
      {
        orders.length?orders.map(order => <Orders items={order.items} order={order} />): <h2>No Order</h2>
      }
    </div>
  )
}

export default OrderPage