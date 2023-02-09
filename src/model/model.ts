const cartProducts: Array<IProduct | IPack> = [
  {
    id: 1,
    name: "My christmas Pack",
    products: [
      { name: "Cardboard box", extraData: "container" },
      { name: "Unisex Short Sleeve T-Shirt", extraData: "Green, Small" },
      { name: "Basic Bottle", extraData: "Blue" },
    ],
    type: ProductType.PACK,
    image: "https://images2.imgbox.com/0c/ec/YOPawA2S_o.png",
    price: 72.2
  },
  {
    id: 2,
    image: "https://images2.imgbox.com/d8/1a/7MYJ8zra_o.png",
    name: "Basic T-Shirt",
    type: ProductType.SINGLE,
    price: 13.5
  },
  {
    id: 3,
    image: "https://images2.imgbox.com/d8/1a/7MYJ8zra_o.png",
    name: "Woman bottle",
    type: ProductType.SINGLE,
    price: 36.5
  },
];

const similarProducts: IProduct[] = [
  {
    id: 4,
    image: "https://images2.imgbox.com/d8/1a/7MYJ8zra_o.png",
    name: "Unisex Short Sleeve T-Shirt",
    type: ProductType.SINGLE,
    price: {min: 10, max: 24}
  },
  {
    id: 5,
    image: "https://images2.imgbox.com/d8/1a/7MYJ8zra_o.png",
    name: "Unisex Short Sleeve T-Shirt",
    type: ProductType.SINGLE,
    price: {min: 10, max: 24}
  },
  {
    id: 6,
    image: "https://images2.imgbox.com/d8/1a/7MYJ8zra_o.png",
    name: "Unisex Short Sleeve T-Shirt",
    type: ProductType.SINGLE,
    price: {min: 10, max: 24}
  },
  {
    id: 7,
    image: "https://images2.imgbox.com/d8/1a/7MYJ8zra_o.png",
    name: "Unisex Short Sleeve T-Shirt",
    type: ProductType.SINGLE,
    price: {min: 10, max: 24}
  },

];

const model = { cartProducts, similarProducts };

export default model;
