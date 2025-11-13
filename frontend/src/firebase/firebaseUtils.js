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

// read
export const buscarAssinaturas = async (userId) => {
  try {
    const read = query(
      collection(db, "assinaturas"),
      where("userId", "==", userId)
      //   orderBy("criadoEm", "desc")
    )

    const snapshot = await getDocs(read)

    const assinaturas = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    return assinaturas || []
  } catch (error) {
    console.error("erro ao buscar assinatura:", error)
    return []
  }
}
