import React from 'react'
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
export default function ReactChallange() {
    const { t } = useTranslation()
    return (
        <Navbar />
    )
}
