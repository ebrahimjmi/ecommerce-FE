import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { productReducer, cartReducer, orderReducer, userReducer } from './reducers/index';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/OrderPage';
import ProductDetailPage from './pages/ProductDetailPage';
const store = configureStore(
  {
    reducer: {
      product: productReducer,
      cart: cartReducer,
      order: orderReducer,
      user: userReducer,
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App />}>
          <Route index element = {<Home />} />
          <Route path='/cart' element = {<CartPage />} />
          <Route path='/checkout' element = {<CheckoutPage />} />
          <Route path='/order' element = {<OrderPage />} />
          <Route path='/product:id' element = {<ProductDetailPage />} />
          <Route path='/product/:productId' element = {<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
