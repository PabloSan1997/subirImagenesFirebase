// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
const firebaseConfig = {
  apiKey: "AIzaSyBa8Yb4EIkfGiyyqGgw-jv4R9i7x3mM_kM",
  authDomain: "imagenes-372fc.firebaseapp.com",
  projectId: "imagenes-372fc",
  storageBucket: "imagenes-372fc.appspot.com",
  messagingSenderId: "991591719746",
  appId: "1:991591719746:web:81857d9e91329a545b5edb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function subirArchivo(file) {
  const storagref = ref(storage, `ejemplos/${uuidv4()}`);
  await uploadBytes(storagref, file).then((snapshot) => {
    console.log(snapshot);
  });
  const hola = await getDownloadURL(storagref);
  return hola;
}

export async function borrar(texto){
    const reference = ref(storage, `ejemplos/${texto}`);
    await deleteObject(reference).then(()=>console.log("Imagen borrada con exito")).catch(()=>console.log("error al borrar"));
}