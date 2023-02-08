import React from 'react'
import { useTranslation } from 'react-i18next';
import "./ReactChallange.scss"
import CartItems from '../CartItems/CartItems';
import Navbar from '../Navbar/Navbar';
import ProductNavbar from '../ProductNavbar/ProductNavbar';
export default function ReactChallange() {
    const { t } = useTranslation()
    return (
        <div>
            <Navbar />
            <ProductNavbar />
            <div className='cart-container'>
                <CartItems />
                <div style={{flex: 0.5}}></div>
            </div>
        </div>
    )
}
