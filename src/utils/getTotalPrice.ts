import { CartProduct } from "../types/Product";

export function getTotalPrice(products: CartProduct[]): number {
  const totalPrice = products.reduce(
    (acc, x) =>
      x.discountPrice !== 0
        ? acc + x.discountPrice * x.amount
        : acc + x.price * x.amount,
    0
  );
  return totalPrice;
}
