import { useState, useEffect } from "react";
import { Product } from "../types/Product";

import { collection, query, where, getDocs } from "firebase/firestore";
import { firestoreDB } from "../Firebase/firestore";
import { getLastProducts } from "../Firebase/services/getLastProducts";

export function useGetProductsByText(productName: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProductsByText = async (text: string) => {
    setIsLoading(true);

    if (!text) {
      const result = await getLastProducts(10);
      setProducts(result);
      setIsLoading(false);
      return;
    }

    const querySnapshot = await getDocs(collection(firestoreDB, "products"));

    const myData = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as Product),
      id: doc.id,
    }));

    const dataFiltered = myData.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );

    setProducts(dataFiltered);
    setIsLoading(false);
  };

  useEffect(() => {
    getProductsByText(productName);
  }, []);

  return { products, isLoading, getProductsByText };
}
