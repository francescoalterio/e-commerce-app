import { firebaseApp } from "./index";
import { getFirestore } from "firebase/firestore";

export const firestoreDB = getFirestore(firebaseApp);
