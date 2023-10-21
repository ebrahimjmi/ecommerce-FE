import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Cart = ({ cartItems , orderDetails }) => {

    const {shipping_charge, discount_in_percent, totalCost, totalItems} = orderDetails;
    const dispatch = useDispatch();
    const changeQty = (qty, item, id) => {
        const oldItmes = [...cartItems];
        const newItem = {...item, qty: qty}
        const itemIndex = cartItems.findIndex((item) => item.id === id);
        oldItmes[itemIndex] = newItem;
        dispatch({
            type: 'CHANGE_QTY',
            payload: oldItmes,
        })
    }
    const removeItem = (item, id) => {
        console.log(item)
        const oldItmes = [...cartItems];
        const itemIndex = cartItems.findIndex((item) => item.id === id);
        oldItmes.splice(itemIndex, 1);
        dispatch({
            type: 'REMOVE_ITEM',
            payload: oldItmes,
        })
    }
    return (
        <div className="container mb-5">
            <div className="d-flex flex-row justify-content-between align-items-start">
                { cartItems?.length > 0 ?  
                    <div className="col-8 d-flex flex-column m-2">
                        {
                            cartItems.map((item) => {
                                return (
                                    <div className="cart-item p-3">
                                        <div className="d-flex flex-row">
                                            <img
                                                className="col-2 img-fluid"
                                                src={`images/${item.image}.jpg`}
                                                alt=""
                                            />
                                            <div className="col-6 p-2">
                                                <h5>{item.name}</h5>
                                                <p>${item.price}</p>
                                                <p>
                                                    <span>Qty:</span>
                                                    <span>{item.qty}</span>
                                                </p>
                                            </div>
                                            <div className="col-2 p-2">
                                                Quatity
                                                <select name="" id='#' value={item.qty} onChange={(e) => changeQty(e.target.value, item, item.id)}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                            <div className="col-2 d-flex justify-content-end align-items-start close" onClick={(e)=>removeItem(item, item.id)}>
                                                <i className="bi bi-x-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> : <h2>Empty Cart</h2>
                }

                <div className="col-4 order p-3 m-2">
                    <h4>Order Total</h4>
                    <div className="d-flex flex-row py-2">
                        <input type="text" className="form-control" placeholder="promo code" />
                        <button className="btn btn-primary">Apply</button>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                        <span className="billing-item">Total</span>
                        <span className="billing-cost">${totalCost}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                        <span className="billing-item">Items</span>
                        <span className="billing-cost">{totalItems}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                        <span className="billing-item">Shipping</span>
                        <span className="billing-cost">${orderDetails.shipping_charge}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                        <span className="billing-item">Discount({discount_in_percent}%)</span>
                        <span className="billing-cost">-${totalCost * discount_in_percent/100}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                        <span className="billing-item fs-5">Total</span>
                        <span className="billing-cost fs-5">${totalCost - totalCost * discount_in_percent/100 + shipping_charge}</span>
                    </div>

                    <div className="d-flex mt-3">
                        <Link to="/checkout" className="btn btn-primary flex-grow-1">Pay Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart