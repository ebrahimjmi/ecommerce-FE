import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const initialAddress = {
    firstName: '',
    lastName: '',
    phone: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    zip: '',
}

const Checkout = ({ order, user, placeOrder }) => {
    const { items, shipping_charge, discount_in_percent, shipping_address, totalCost, totalItems } = order;
    const dispatch = useDispatch();
    const [address, setAddress] = useState(initialAddress);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value,
        })
    }

    const validateAddress = (address) => {
        if (!address.firstName || !address.lastName || address.phone || address.address1 || address.country || address.state || address.pincode) {
            alert('field is requred');
        } else {
            dispatch({
                type: 'ADD_ADDRESS',
                payload: address,
            })
            setAddress(initialAddress);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateAddress(address);
    }
    const setShippingAddress = (address) => {
        dispatch({
            type: "SHIPPING_ADDRESS",
            payload: address,
        })
    }

    return (
        <div class="container mb-5">
            <main>
                <div class="py-5 text-center">
                    <h2>Checkout</h2>
                </div>

                <div class="row g-3">
                    <div class="col-md-5 col-lg-4 order-md-last">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted"></span>
                            <span class="badge bg-secondary rounded-pill">{items.length}</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">Total</h6>
                                </div>
                                <span class="text-muted">${totalCost}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">Items</h6>
                                </div>
                                <span class="text-muted">{totalItems}</span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">Shipping Charges</h6>
                                </div>
                                <span class="text-success">${shipping_charge}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">Discount({discount_in_percent}%)</h6>
                                </div>
                                <span class="text-success">-{totalCost * discount_in_percent / 100}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${totalCost - totalCost * discount_in_percent / 100 + shipping_charge}</strong>
                            </li>
                        </ul>
                        {shipping_address? <address class="card">
                            <div class="card-body">
                                <h5 class="card-title">{shipping_address.firstName} {shipping_address.lastName}</h5>
                                <h6 class="card-subtitle mb-2 text-muted ">{shipping_address.address1}, {shipping_address.address2}, {shipping_address.state}, {shipping_address.pincode}</h6>
                                <p class="card-text">{shipping_address.phone}</p>
                            </div>
                        </address> : null}
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Shipping address</h4>
                        {
                            user.addresses.map((user) =>
                                <address class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{user.firstName} {user.lastName}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted ">{user.address1}, {user.address2}, {user.state}, {user.pincode}</h6>
                                        <p class="card-text">{user.phone}</p>
                                        <input type="radio" name="address" id="" onClick={(e) => setShippingAddress(user)} /> Use this Address
                                    </div>
                                </address>
                            )
                        }
                        <hr class="my-4" />
                        <h5>OR</h5>

                        <h4 class="mb-3">Add New Address</h4>

                        <form class="needs-validation" novalidate="" onSubmit={handleSubmit}>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <label for="firstName" class="form-label">First name</label>
                                    <input type="text" class="form-control" name="firstName" placeholder="" value={address.firstName} required="" onChange={handleInputChange} />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <label for="lastName" class="form-label">Last name</label>
                                    <input type="text" class="form-control" name="lastName" placeholder="" value={address.lastName} required="" onChange={handleInputChange} />
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="phone" class="form-label">Phone <span class="text-muted"></span></label>
                                    <input type="tel" class="form-control" name="phone" placeholder="+91-1111111111" value={address.phone} required="" onChange={handleInputChange} />
                                    <div class="invalid-feedback">
                                        Please enter a valid phone for shipping updates.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="address" class="form-label">Address</label>
                                    <input type="text" class="form-control" name="address1" placeholder="1234 Main St" value={address.address1} required="" onChange={handleInputChange} />
                                    <div class="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                                    <input type="text" class="form-control" name="address2" placeholder="Apartment or suite" value={address.address2} onChange={handleInputChange} />
                                </div>

                                <div class="col-md-5">
                                    <label for="country" class="form-label">Country</label>
                                    <select class="form-select" value={address.country} name="country" required="" onChange={handleInputChange} >
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label for="state" class="form-label">State</label>
                                    <select class="form-select" value={address.state} name="state" required="" onChange={handleInputChange} >
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label for="zip" class="form-label">Zip</label>
                                    <input type="text" value={address.zip} class="form-control" name="zip" placeholder="" required="" onChange={handleInputChange} />
                                    <div class="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <button class="w-100 btn mt-4 btn-success btn-lg" type="submit">Add Address</button>
                        </form>
                        <button class="w-100 btn mt-4 btn-primary btn-lg" onClick={placeOrder} >Continue to checkout</button>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Checkout