import React from "react";
import { useTranslation } from "react-i18next";
import {
  IOnCartItemRemove,
  IOnQuantityChangeCallback,
  IPack,
} from "../../model/type";
import { formatCurrencyUSD } from "../../utils/currency";
import QuantitySelect from "../QuantitySelect/QuantitySelect";
import "./CartProductAndPack.scss";
export default function CartPack({
  pack,
  quantity,
  onEdit,
  onRemove,
  onQuantityChange,
}: {
  pack: IPack;
  quantity: number;
  onEdit?: () => void;
  onRemove: IOnCartItemRemove;
  onQuantityChange: IOnQuantityChangeCallback;
}) {
  const { t } = useTranslation();
  return (
    <div className="cart-item-container">
      <div className="cart-item-image-container">
        <img src={pack.image} width={120} height={120}></img>
        <div className="cart-item-pack-indicator text-xxxxs lh16">
          {t("CART_PACK_TEXT")}
        </div>
      </div>
      <div className="cart-item-description">
        <h2 className="text-md lh24 bold">{pack.name}</h2>
        <QuantitySelect
          value={quantity}
          text={t("CART_QUANTITY")}
          max={51}
          onChange={(value) => onQuantityChange(pack, value)}
        />
        <ul>
          {pack.products.map((product, index) => (
            <li key={index}>
              <span className="text-xxs lh24 semi-bold">{product.name}</span>{" "}
              <span className="text-xxs lh24 semi-bold light-pack-color">
                ({product.extraData})
              </span>
            </li>
          ))}
        </ul>
        <div className="cart-item-pack-actions text-xxxs lh24 semi-bold">
          <a>Edit Pack</a>
          <span className="light-pack-color">|</span>
          <a onClick={() => onRemove(pack)}>Remove</a>
        </div>
      </div>
      <div className="cart-item-price">
        <h2 className="text-md lh16 bold primary-color">
          {formatCurrencyUSD(pack.price as number)}
        </h2>
        <div className="cart-item-total-container">
          <span className="text-md lh16 semi-bold primary-color">
            {t("CART_TOTAL")}
          </span>
          <span className="text-md lh16 bold primary-color">
            {formatCurrencyUSD((pack.price as number) * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
