import React, { useState, useEffect } from "react";
import { getAllProducts } from "../Firebase/services/getAllProducts";
import { Product } from "../types/Product";

export function useGetAllProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    const data = await getAllProducts();
    setProducts(data as Product[]);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
}
