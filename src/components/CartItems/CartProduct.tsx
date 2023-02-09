import React from 'react'
import { IProduct } from '../../model/type'

export default function CartProduct({ product, quantity, onEdit, onRemove }: { product: IProduct, quantity: number, onEdit?: () => void, onRemove?: () => void }) {
  return (
    <div>{JSON.stringify({product, quantity})}</div>
  )
}
