import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA9NJ0DiD-M10J4NA56pVtBW9uyDjnMf6E',
  authDomain: 'gravitate-175e2.firebaseapp.com',
  projectId: 'gravitate-175e2',
  storageBucket: 'gravitate-175e2.firebasestorage.app',
  messagingSenderId: '899806462582',
  appId: '1:899806462582:web:b4911447f926b8a78d9557',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);