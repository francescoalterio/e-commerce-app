import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { Product } from "../../types/Product";
import { firestoreDB } from "../firestore";

export const getLastProducts = async (listSize?: number) => {
  const q = query(
    collection(firestoreDB, "products"),
    orderBy("createdAt", "desc"),
    limit(listSize || 10)
  );

  const querySnapshot = await getDocs(q);

  const myData = querySnapshot.docs.map((doc) => ({
    ...(doc.data() as Product),
    id: doc.id,
  }));

  return myData;
};
