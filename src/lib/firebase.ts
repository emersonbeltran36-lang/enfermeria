import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User as FirebaseUser, signInAnonymously } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const googleProvider = new GoogleAuthProvider();

export async function signInAnonymouslyUser() {
  try {
    const result = await signInAnonymously(auth);
    return result.user;
  } catch (error: any) {
    console.error('Error in anonymous sign in:', error);
    throw error;
  }
}

export async function signInMockUser() {
  // Return a mock user object that looks like a Firebase User
  return {
    uid: 'mock-user-' + Math.random().toString(36).substring(7),
    isAnonymous: true,
    email: null,
    displayName: 'Invitado',
    photoURL: null,
  } as FirebaseUser;
}

export async function getUserProfile(uid: string) {
  if (uid.startsWith('mock-user-')) {
    const saved = localStorage.getItem(`profile_${uid}`);
    return saved ? JSON.parse(saved) : { uid, isProfileComplete: false, displayName: 'Invitado' };
  }
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
  if (uid.startsWith('mock-user-')) {
    const current = await getUserProfile(uid);
    const updated = { ...current, ...data, isProfileComplete: true };
    localStorage.setItem(`profile_${uid}`, JSON.stringify(updated));
    return;
  }
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
