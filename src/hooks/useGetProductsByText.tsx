import { useState, useEffect } from "react";
import { Product } from "../types/Product";

import { getLastProducts } from "../Firebase/services/getLastProducts";
import { getProductsByText } from "../Firebase/services/getProductsByText";

export function useGetProductsByText(productName: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = async (text: string) => {
    setIsLoading(true);

    if (!text) {
      const result = await getLastProducts(10);
      setProducts(result);
      setIsLoading(false);
      return;
    }

    const data = await getProductsByText(text);

    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts(productName);
  }, []);

  return { products, isLoading, getProductsByText: getProducts };
}
