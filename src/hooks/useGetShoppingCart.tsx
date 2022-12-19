import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { getLocalStorageData } from "../utils/getLocalStorageData";

export function useGetShoppingCart() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const data = await getLocalStorageData("ShoppingCart");
    setProducts(data as Product[]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
}
