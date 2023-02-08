import React from 'react'
import { useTranslation } from 'react-i18next'
import "./CartItems.scss"
export default function CartItems() {
  const { t } = useTranslation()
  return (
    <div className='cart-items-container'>
      <div className='cart-items-title'>
        <h2 className='text-lg bold lh24'>{t("CART_TITLE")}</h2>
        <span className='text-md  regular lh24'>{"(3)"}</span>
      </div>
    </div>
  )
}
