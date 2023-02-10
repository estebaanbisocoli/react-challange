import React from 'react'
import "./QuantitySelect.scss"
import classNames from 'classnames'
import { MenuItem, Select } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function QuantitySelect({ className, text, max, value, onChange }: { className?: string, text: string, max: number, value: number, onChange: (value: number) => void, }) {
    return (
        <div className={classNames("quantity-select-container", className)}>
            <h3 className='text-normal lh16 semi-bold'>{text}</h3>
            <Select value={value} onChange={(evt) => onChange(Number(evt.target.value))} className="quantity-select-select" MenuProps={{ sx: { maxHeight: "400px" } }} IconComponent={KeyboardArrowDownIcon}>
                {Array(max).fill(0).map((_, index) => <MenuItem value={index} key={index}>{index}</MenuItem>)}
            </Select>

        </div>
    )
}
