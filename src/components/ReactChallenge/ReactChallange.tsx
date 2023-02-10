import React, { useEffect, useState } from "react";
import "./ReactChallange.scss";
import CartItems from "../CartItems/CartItems";
import Navbar from "../Navbar/Navbar";
import ProductNavbar from "../ProductNavbar/ProductNavbar";
import model from "../../model/model";
import {
  ICartItem,
  IOnCartItemRemove,
  IOnQuantityChangeCallback,
  IPack,
  IProduct,
} from "../../model/type";
import CartTotal from "../CartTotal/CartTotal";
import SimilarProducts from "../SimilarProducts/SimilarProducts";

//Only use to mock cart
const initialState: ICartItem[] = model.cartProducts.map((product, index) => {
  if (index === 0) return { quantity: 50, product };
  else if (index === 1) return { quantity: 10, product };
  else return { quantity: 20, product };
});

const useCart = () => {
  const [cart, setCart] = useState<ICartItem[]>(initialState);
  const onQuantityChange: IOnQuantityChangeCallback = (
    product: IProduct | IPack,
    newQuantity: number
  ) => {
    setCart(
      cart.map((item) => {
        if (item.product.id === product.id) {
          return { product: item.product, quantity: newQuantity };
        } else {
          return item;
        }
      })
    );
  };
  const onCartItemRemove: IOnCartItemRemove = (product) => {
    setCart(cart.filter((item) => item.product.id !== product.id));
  };
  return { cart, onQuantityChange, onCartItemRemove };
};

export default function ReactChallange() {
  const { cart, onQuantityChange, onCartItemRemove } = useCart();

  return (
    <div>
      <Navbar />
      <ProductNavbar />
      <div className="cart-container">
        <CartItems
          cart={cart}
          onQuantityChange={onQuantityChange}
          onCartItemRemove={onCartItemRemove}
        />
        <CartTotal cart={cart} />
      </div>
      <SimilarProducts similarProducts={model.similarProducts}/>
    </div>
  );
}
