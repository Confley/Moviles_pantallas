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


export async function insertComunicado(aviso) {
  // console.log("datos: " + aviso);
  try {
    const docRef = collection(db, "avisos");
    const res = await addDoc(docRef, aviso);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function getAvisos(categoria) {
  const avisos = [];

  try {
    const collectionRef = collection(db, 'avisos');
    const q = query(collectionRef, where('categoria', '==', categoria));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
      const aviso = {... doc.data}; 
      aviso.docId = doc.id; 
      avisos.push(aviso)
    }); 

    return avisos; 
  } catch(error) {
    console.error(error);
  }
}