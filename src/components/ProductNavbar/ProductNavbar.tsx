import React from 'react'
import { useTranslation } from 'react-i18next'
import "./ProductNavbar.scss"

const CATEGORIES = ["PRODUCT_NAVBAR_ALL", "PRODUCT_NAVBAR_PACKAGING", "PRODUCT_NAVBAR_DRINKWARE", "PRODUCT_NAVBAR_APPAREL", "PRODUCT_NAVBAR_NOTEBOOKS", "PRODUCT_NAVBAR_BACKPACKS"]

const CategoryItem = ({ text }: { text: string }) => {
    const { t } = useTranslation()
    return <h4 className='text-xs regular lh-16'>{t(text)}</h4>
}

export default function ProductNavbar() {
    return (
        <div className='product-navbar-container'>
            {CATEGORIES.map((item, i) => <CategoryItem text={item} key={i} />)}
        </div>
    )
}
