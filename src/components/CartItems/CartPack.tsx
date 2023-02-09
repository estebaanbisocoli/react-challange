import React from 'react'
import { IPack } from '../../model/type'

export default function CartPack({ pack, quantity, onEdit, onRemove }: {
  pack: IPack, quantity: number, onEdit?: () => void, onRemove?: () => void
}) {
  return (
    <div>{JSON.stringify({pack, quantity})}</div>
  )
}
