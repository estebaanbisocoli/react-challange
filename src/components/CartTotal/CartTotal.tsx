import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ICartItem } from "../../model/type";
import { formatCurrencyUSD } from "../../utils/currency";
import Divider from "../Divider/Divider";
import Button from "@mui/material/Button";
import "./CartTotal.scss";
export default function CartTotal({ cart }: { cart: ICartItem[] }) {
  const { t } = useTranslation();
  const total = useMemo(
    () =>
      cart.reduce((prev, current) => {
        return prev + (current.product.price as number) * current.quantity;
      }, 0),
    [cart]
  );
  return (
    <div className="card-total-container">
      <h2 className="text-lg bold lh24">{t("CART_ORDER_SUMMARY")}</h2>
      <div className="card-total-total-items text-normal lh16 regular">
        <span>{t("CART_NUMBER_ITEMS")}</span>
        <span>{cart.length}</span>
      </div>

      <Divider />
      <div className="card-total-total">
        <span className="text-md lh16 semi-bold is-primary">
          {t("CART_TOTAL")}
        </span>
        <span className="text-lg lh16 bold is-primary">
          {formatCurrencyUSD(total)}
        </span>
      </div>
      <div className="card-total-actions">
        <Button variant="contained" size="large" fullWidth>
          {t("CART_CHECKOUT")}
        </Button>
        <Button variant="outlined" size="large" fullWidth>
        {t("CART_CONTINUE_SHOPPING")}

        </Button>
      </div>
    </div>
  );
}
