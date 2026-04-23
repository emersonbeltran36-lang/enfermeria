import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const googleProvider = new GoogleAuthProvider();

export async function signInAnonymouslyUser() {
  try {
    const { signInAnonymously } = await import('firebase/auth');
    const result = await signInAnonymously(auth);
    return result.user;
  } catch (error) {
    console.error('Error in anonymous sign in:', error);
    throw error;
  }
}

export async function getUserProfile(uid: string) {
  try {
    const userRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
}

export async function updateUserProfile(uid: string, data: any) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    const user = auth.currentUser;
    await setDoc(userRef, {
      uid,
      email: user?.email || '',
      displayName: user?.displayName || data.displayName || '',
      photoURL: user?.photoURL || '',
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      isProfileComplete: false,
      ...data
    });
  } else {
    await setDoc(userRef, {
      ...data,
      lastLogin: serverTimestamp()
    }, { merge: true });
  }
}

export type { FirebaseUser };
