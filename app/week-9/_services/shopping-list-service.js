import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function addItem(userId, item) {
  if (!item.name || !item.quantity || !item.category)
    throw new Error("item not fetched");
  try {
    const itemsCollection = await addDoc(
      collection(db, "users", userId, "items"),
      item
    );
    return itemsCollection.id;
  } catch (error) {
    console.error(error);
  }
}

async function getItems(userId) {
  const items = [];
  const docRef = query(collection(db, "users", userId, "items"));
  const documents = await getDocs(docRef);
  if (!documents.empty) {
    documents.forEach((document) => {
      const item = {
        id: document.id,
        ...document.data(),
      };
      items.push(item);
    });
    return items;
  } else {
    return null;
  }
}

export { addItem, getItems };
