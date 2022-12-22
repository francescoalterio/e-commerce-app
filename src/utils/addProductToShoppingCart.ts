import { CartProduct, Product } from "../types/Product";
import { setLocalStorageData } from "../utils/setLocalStorageData";
import { isInShoppingCart } from "../utils/isInShoppingCart";
import { setProductAmountInCart } from "./setProductAmountInCart";

export const addProductToShoppingCart = async (
  product: Product,
  amount: number = 1
) => {
  const isInCart = await isInShoppingCart(product.id);
  if (isInCart) {
    await setProductAmountInCart(product.id, "increment", amount);
    return;
  }

  const newProduct: CartProduct = {
    ...product,
    amount,
  };

  setLocalStorageData("ShoppingCart", newProduct);
};
