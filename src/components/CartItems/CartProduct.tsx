import React from "react";
import { useTranslation } from "react-i18next";
import {
  IOnCartItemRemove,
  IOnQuantityChangeCallback,
  IProduct,
} from "../../model/type";
import QuantitySelect from "../QuantitySelect/QuantitySelect";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatCurrencyUSD } from "../../utils/currency";

export default function CartProduct({
  product,
  quantity,
  onRemove,
  onQuantityChange,
}: {
  product: IProduct;
  quantity: number;
  onRemove: IOnCartItemRemove;
  onQuantityChange: IOnQuantityChangeCallback;
}) {
  const { t } = useTranslation();
  return (
    <div className="cart-item-container">
      <div className="cart-item-image-container">
        <img
          src={product.image}
          width={120}
          height={120}
          alt={product.name}
        ></img>
      </div>
      <div className="cart-item-description">
        <h2 className="text-md lh24 bold">{product.name}</h2>
        <QuantitySelect
          value={quantity}
          text={t("CART_QUANTITY")}
          max={51}
          onChange={(value) => onQuantityChange(product, value)}
        />
        <a
          className="cart-item-product-delete"
          onClick={() => onRemove(product)}
        >
          <DeleteIcon className="cart-item-product-icon" />
          <span className="text-xxxs lh16 semi-bold">{t("CART_REMOVE")}</span>
        </a>
      </div>
      <div className="cart-item-price">
        <h2 className="text-md lh16 bold primary-color">
          {formatCurrencyUSD(product.price as number)}
        </h2>
        <div className="cart-item-total-container">
          <span className="text-md lh16 semi-bold primary-color">
            {t("CART_TOTAL")}
          </span>
          <span className="text-md lh16 bold primary-color">
            {formatCurrencyUSD((product.price as number) * quantity)}
          </span>
        </div>{" "}
      </div>
    </div>
  );
}
