import { CartProduct } from "../types/Product";

export function getTotalPrice(products: CartProduct[]): number {
  const totalPrice = products.reduce(
    (acc, x) => (x.discountPrice !== 0 ? acc + x.discountPrice : acc + x.price),
    0
  );
  return totalPrice;
}
