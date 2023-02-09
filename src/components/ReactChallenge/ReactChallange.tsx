import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "./ReactChallange.scss"
import CartItems from '../CartItems/CartItems';
import Navbar from '../Navbar/Navbar';
import ProductNavbar from '../ProductNavbar/ProductNavbar';
import model from '../../model/model';
import { ICartItem } from '../../model/type';

//Only use to mock cart
const initialState: ICartItem[] = model.cartProducts.map((product, index) => {
    if (index === 0) return { quantity: 50, product }
    else if (index === 1) return { quantity: 10, product }
    else return { quantity: 20, product }
})

export default function ReactChallange() {
    const { t } = useTranslation()
    const [cart, setCart] = useState<ICartItem[]>(initialState)
    return (
        <div>
            <Navbar />
            <ProductNavbar />
            <div className='cart-container'>
                <CartItems cart={cart} />
                <div style={{ flex: 0.5 }}></div>
            </div>
        </div>
    )
}
