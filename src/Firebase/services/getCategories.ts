import { Category } from "../../types/Category";

import { firestoreDB } from "../firestore";
import { collection, getDocs, DocumentData, doc } from "firebase/firestore";
import { toCapitalize } from "../../utils/toCapitalize";

export async function getCategories(): Promise<Category[]> {
  const querySnapshot = await getDocs(collection(firestoreDB, "categories"));

  const myData = querySnapshot.docs.map((doc) => ({
    ...(doc.data() as Category),
    id: doc.id,
  }));

  return myData;
}
