import { firestoreDB } from "../firestore";
import { collection, getDocs, DocumentData, doc } from "firebase/firestore";
import { Product } from "../../types/Product";

export async function getAllProducts(): Promise<Product[]> {
  const querySnapshot = await getDocs(collection(firestoreDB, "products"));

  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data as Product[];
}
