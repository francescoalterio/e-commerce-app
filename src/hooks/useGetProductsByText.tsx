import { useState, useEffect } from "react";
import { Product } from "../types/Product";

import { collection, query, where, getDocs } from "firebase/firestore";
import { firestoreDB } from "../Firebase/firestore";

export function useGetProductsByText(productName: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProductsByText = async (text: string) => {
    setIsLoading(true);
    const q = query(
      collection(firestoreDB, "products"),
      where("name", ">=", text),
      where("name", "<=", text + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);
    const myData = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as Product),
      id: doc.id,
    }));

    setProducts(myData);
    setIsLoading(false);
  };

  useEffect(() => {
    getProductsByText(productName);
  }, []);

  return { products, isLoading, getProductsByText };
}
