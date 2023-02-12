import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAR7VNsScGpK8mz602kaipmgcGOtvdBwwg",
  authDomain: "finiteloop-club.firebaseapp.com",
  databaseURL: "https://finiteloop-club-default-rtdb.firebaseio.com",
  projectId: "finiteloop-club",
  storageBucket: "finiteloop-club.appspot.com",
  messagingSenderId: "197236369134",
  appId: "1:197236369134:web:5adc195e0ea72e3510b5ff",
  measurementId: "G-6SMQP150FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export const providerGithub = new GithubAuthProvider();
export const db = getFirestore(app);

export async function getUserInfo(uid) {
  if (uid) {
    const members = [];
    const membersRef = collection(db, 'members');
    const q = query(membersRef, where('uid', '==', uid));
    const participantDocRef = await getDocs(q);
    participantDocRef.forEach((participant) => {
      members.push(participant.data());
    });
    return members[0];
  } else {
    throw new Error('No user logged in');
  }
}


