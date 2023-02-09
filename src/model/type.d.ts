enum ProductType {
  SINGLE,
  PACK,
}
interface IProduct {
  id: number;
  name: string;
  type: ProductType;
  image: string;
  price: number | { min: number; max: number };
}
interface IItems {
  name: string;
  extraData: string;
}
interface IPack extends IProduct {
  products: IItems[];
}

