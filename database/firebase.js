import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getByte,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIGlSdE__0eeeeaETy-eIYbBiPGAuUDwc",
  authDomain: "bd-comunicatec.firebaseapp.com",
  projectId: "bd-comunicatec",
  storageBucket: "bd-comunicatec.appspot.com",
  messagingSenderId: "515711909945",
  appId: "1:515711909945:web:54d1154e7fa37295cc4de8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export async function userExists(uid) {
  const docRef = doc(db, "user", uid);
  const res = await getDoc(docRef);
  console.log("Res: " + res);
  return res.exists;
}

export async function insertComunicado(aviso) {
  console.log("datos: " + aviso);
  try {
    const docRef = collection(db, "avisos");
    const res = await addDoc(docRef, aviso);
    return res;
  } catch (error) {
    console.log("Error. " + error);
    return error;
  }
}
