import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((document) => {
      return {
        id: document.id,
        ...document.data()
      };
    });

    return productsFormat;
  } catch (error) {
    console.log("Error al traer productos:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "products", String(id));
    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      const product = {
        id: snapshot.id,
        ...snapshot.data()
      };

      console.log("Doc:", product);
      return product;
    }

    return null;
  } catch (error) {
    console.log("Error al traer el producto:", error);
    throw error;
  }
};

export const createProduct=async(productData) => {
  const docRef =await addDoc(productsRef, productData)
  return docRef.id;
}