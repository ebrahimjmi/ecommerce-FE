import React from 'react'
import { useSelector } from 'react-redux';
import Productlist from '../components/Productlist';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
const Home = () => {
    const products = useSelector(state => state.product.products);
    const cartCount = useSelector(state => state.cart.items);
    return (
        <div>
            <Navbar cartCount = {cartCount} />
            <Carousel />
            <Productlist products = {products}/>
            <Footer />
        </div>
    );
}

export default Home