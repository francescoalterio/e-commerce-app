import { collection, query, where, getDocs } from "firebase/firestore";
import { Product } from "../../types/Product";
import { firestoreDB } from "../firestore";

export const getProductsByText = async (text: string) => {
  const querySnapshot = await getDocs(collection(firestoreDB, "products"));

  const myData = querySnapshot.docs.map((doc) => ({
    ...(doc.data() as Product),
    id: doc.id,
  }));

  const dataFiltered = myData.filter((product) =>
    product.name.toLowerCase().includes(text.toLowerCase())
  );

  return dataFiltered;
};
