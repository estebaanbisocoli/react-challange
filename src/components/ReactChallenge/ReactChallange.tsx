import React from 'react'
import { useTranslation } from 'react-i18next';
export default function ReactChallange() {
    const { t } = useTranslation()
    return (
        <div>{t("NAVBAR_CART")}</div>
    )
}
