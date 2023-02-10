import React from "react";
import { useTranslation } from "react-i18next";
import {
  ICartItem,
  IOnCartItemRemove,
  IOnQuantityChangeCallback,
  IPack,
  IProduct,
  ProductType,
} from "../../model/type";
import "./CartItems.scss";
import CartPack from "./CartPack";
import CartProduct from "./CartProduct";

const Divider = () => <div className="cart-items-divider"></div>
export default function CartItems({
  cart,
  onQuantityChange,
  onCartItemRemove,
}: {
  cart: ICartItem[];
  onQuantityChange: IOnQuantityChangeCallback;
  onCartItemRemove: IOnCartItemRemove;
}) {
  const { t } = useTranslation();
  return (
    <div className="cart-items-container">
      <div className="cart-items-title">
        <h2 className="text-lg bold lh24">{t("CART_TITLE")}</h2>
        <span className="text-md  regular lh24">({cart.length})</span>
      </div>
      <div className="cart-items-product-list">
        {cart.map((cartItem) => {
          if (cartItem.product.type === ProductType.PACK) {
            return (
              <>
                <CartPack
                  pack={cartItem.product as IPack}
                  quantity={cartItem.quantity}
                  key={cartItem.product.id}
                  onQuantityChange={onQuantityChange}
                  onRemove={onCartItemRemove}
                />
                <Divider />
              </>
            );
          } else if (cartItem.product.type === ProductType.SINGLE) {
            return (
              <>
                <CartProduct
                  product={cartItem.product}
                  quantity={cartItem.quantity}
                  key={cartItem.product.id}
                  onQuantityChange={onQuantityChange}
                  onRemove={onCartItemRemove}
                />
                <Divider />
              </>
            );
          }
        })}
      </div>
    </div>
  );
}
