import React from 'react'

const Orders = ({ items, order }) => {
  console.log(order)
  const { shipping_address } = order;
  return (
    <div className="container mb-5">
       <h3>My Orders</h3>
      <div className="d-flex flex-row justify-content-between align-items-start">
       
        <div className="col-12 d-flex flex-column m-2">
          {
            items.map(item => <div className="cart-item p-3">
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
                <div data-bs-toggle="modal" data-bs-target="#removeItemModal"
                  className="col-2 d-flex justify-content-end align-items-start close">
                  <i className="bi bi-x-circle"></i>
                </div>
              </div>
            </div>)
          }
          <div>
            <strong>Order Total: </strong> {order.totalCost} | <strong>Address:</strong> {shipping_address.firstName} {shipping_address.lastName} {shipping_address.address1} {shipping_address.state} {shipping_address.pincode}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Orders