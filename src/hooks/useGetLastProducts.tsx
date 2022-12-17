import { useState, useEffect } from "react";
import { getLastProducts } from "../Firebase/services/getLastProducts";
import { Product } from "../types/Product";

export function useGetLastProducts(size?: number) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getLastProducts(size).then((result) => setProducts(result));
  }, []);

  return { products };
}
