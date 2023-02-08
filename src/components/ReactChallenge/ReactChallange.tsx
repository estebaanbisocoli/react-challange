import React from 'react'
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import ProductNavbar from '../ProductNavbar/ProductNavbar';
export default function ReactChallange() {
    const { t } = useTranslation()
    return (
        <div>
            <Navbar />
            <ProductNavbar />
        </div>
    )
}
