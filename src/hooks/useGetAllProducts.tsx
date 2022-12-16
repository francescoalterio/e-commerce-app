import React, { useState, useEffect } from "react";
import { Product } from "../types/Product";

import { firestoreDB } from "../Firebase/firestore";
import { collection, getDocs, DocumentData, doc } from "firebase/firestore";

export function useGetAllProducts() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(firestoreDB, "products"));

      const myData = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Product),
        id: doc.id,
      }));
      setData(myData);
    }

    getData();
  }, []);

  return { products: data };
}
