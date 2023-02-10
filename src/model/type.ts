export enum ProductType {
  SINGLE,
  PACK,
}
export interface IProduct {
  id: number;
  name: string;
  type: ProductType;
  image: string;
  price: number;
}
export interface ISimilarProduct extends Omit<IProduct, "price"> {
  price: { min: number; max: number };
}
export interface IItems {
  name: string;
  extraData: string;
}
export interface IPack extends IProduct {
  products: IItems[];
}

export interface ICartItem {
  product: IProduct | IPack;
  quantity: number;
}
export interface IOnQuantityChangeCallback {
  (product: IProduct | IPack, newQuantity: number): void;
}
export interface IOnCartItemRemove {
  (product: IProduct | IPack): void;
}
