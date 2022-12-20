import { useState, useEffect } from "react";
import { CartProduct } from "../types/Product";
import { getLocalStorageData } from "../utils/getLocalStorageData";

export function useGetShoppingCart() {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const getProducts = async () => {
    const data = await getLocalStorageData("ShoppingCart");
    setProducts(data as CartProduct[]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
}
