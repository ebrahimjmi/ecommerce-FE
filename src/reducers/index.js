const initialStateProducts = {
    products: [

        {
            id: 1,
            name: 'Sony WX-5',
            brand_name: 'Boat',
            price: 100.75,
            category: 'Electronics',
            rating: 3,
            color: 'red',
            size: 'S',
            qty: 1,
            details: {
                product: "",
                warranty: "",
                merchant: ""
            },
            image: 'product-1-square',
            images: ['product-1', 'product-1-2', 'product-1-3']
        },
        {
            id: 2,
            name: 'Smart Watch',
            brand_name: 'noise',
            price: 100.75,
            category: 'Electronics',
            rating: 3,
            color: 'black',
            size: 'S',
            qty: 1,
            details: {
                product: "",
                warranty: "",
                merchant: ""
            },
            image: 'product-2-square',
            images: ['product-2', 'product-2-1', 'product-2-2']
        },
        {
            id: 3,
            name: 'Phone',
            brand_name: 'Apple',
            price: 100.75,
            category: 'Electronics',
            rating: 3,
            color: 'red',
            size: 'S',
            qty: 1,
            details: {
                product: "",
                warranty: "",
                merchant: ""
            },
            image: 'product-3-square',
            images: ['product-3', 'product-3-1', 'product-3-2']
        },
        {
            id: 4,
            name: 'Camera',
            brand_name: 'Sony',
            price: 100.75,
            category: 'Electronics',
            rating: 3,
            color: 'green',
            size: 'S',
            qty: 1,
            details: {
                product: "",
                warranty: "",
                merchant: ""
            },
            image: 'product-4-square',
            images: ['product-4', 'product-4-1', 'product-4-2', 'product-4-3']
        },
    ]
}

const initialStateCart = {
    items: []
}

const productReducer = (state = initialStateProducts, action) => {
    return state
}

const cartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] }
        case 'CHANGE_QTY':
            console.log(action.payload);
            return { ...state, items: action.payload }
        case 'CART_EMPTY':
            return {...state, items: []}
        case 'REMOVE_ITEM':
            console.log(action.payload);
            return {...state, items: action.payload}
        default:
            return state
    }

}

const initialStateOrder = {
    items: [],
    shipping_charge: 50,
    discount_in_percent: 10,
    shipping_address: '',
    totalItems: 0,
    totalCost: 0,
}

const orderReducer = (state = initialStateOrder, action) => {
    switch (action.type) {
        case 'CHANGE_ORDER_CART':
            const items = action.payload.reduce((total, item) => total + item.qty * 1, 0);
            const cost = action.payload.reduce((total, item) => total + item.price * item.qty, 0);
            return { ...state, items: action.payload, totalItems: items, totalCost: cost }
        case 'SHIPPING_ADDRESS':
            console.log(action.payload);
            return {...state, shipping_address: action.payload}
        default:
            return state
    }
}

const initialStateUser = {
    name: 'john',
    email: 'john@gmail.com',
    addresses: [
        {
            firstName: 'john',
            lastName: 'smith',
            phone: 7524949213,
            address1: '1234',
            address2: 'New Street',
            country: 'inida',
            state: 'Delhi',
            pincode: 110025,
        },
        {
            first_name: 'john',
            last_name: 'smith',
            phone: 7524949213,
            address1: '1234',
            address2: 'New Street',
            country: 'inida',
            state: 'Delhi',
            pincode: 110025,
        }
    ],
    orders: [],
}

const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case 'ADD_ADDRESS':
            return{...state, addresses: [...state.addresses, action.payload]}
        case 'PLACE_ORDER':
            return{...state, orders: [...state.orders, action.payload]}
        default:
            return state;
    }
}


export { productReducer, cartReducer, orderReducer, userReducer } 