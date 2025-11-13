import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore"
import { db } from "./firebase"

// create
export const criarAssinatura = async (userId, dados) => {
  try {
    const docRef = await addDoc(collection(db, "assinaturas"), {
      ...dados,
      userId,
      criadoEm: serverTimestamp(),
      atualizadoEm: serverTimestamp(),
    })
    console.log("Assinatura criada com ID:", docRef.id)
    return { id: docRef.id, ...dados }
  } catch (error) {
    console.error("Erro ao criar assinaturas:", error)
    throw error
  }
}
