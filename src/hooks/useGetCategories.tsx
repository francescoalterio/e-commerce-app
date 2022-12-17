import React, { useState, useEffect } from "react";
import { Category } from "../types/Category";

import { firestoreDB } from "../Firebase/firestore";
import { collection, getDocs, DocumentData, doc } from "firebase/firestore";
import { toCapitalize } from "../utils/toCapitalize";

export function useGetCategories() {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(
        collection(firestoreDB, "categories")
      );

      const myData = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Category),
        id: doc.id,
      }));

      const dataToCapitalize = myData.map((x) => ({
        ...x,
        name: toCapitalize(x.name),
      }));
      setData(dataToCapitalize);
    }

    getData();
  }, []);

  return { categories: data };
}
