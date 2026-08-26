import { db } from './firebase';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';

// Save a contact message to Firestore
export async function saveContactMessage(messageData) {
  try {
    const docRef = await addDoc(collection(db, 'contact_messages'), {
      ...messageData,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving message to Firestore:', error);
    return { success: false, error: error.message };
  }
}

// Fetch all contact messages from Firestore
export async function getContactMessages() {
  try {
    const q = query(collection(db, 'contact_messages'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, messages };
  } catch (error) {
    console.error('Error fetching messages from Firestore:', error);
    return { success: false, error: error.message };
  }
}
