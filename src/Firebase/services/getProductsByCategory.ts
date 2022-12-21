import { collection, query, where, getDocs } from "firebase/firestore";
import { Product } from "../../types/Product";
import { firestoreDB } from "../firestore";

export const getProductsByCategory = async (category: string) => {
  const querySnapshot = await getDocs(collection(firestoreDB, "products"));

  const myData = querySnapshot.docs.map((doc) => ({
    ...(doc.data() as Product),
    id: doc.id,
  }));

  const dataFiltered = myData.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return dataFiltered;
};
