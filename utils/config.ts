export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT}.firebaseapp.com`,
  projectId: process.env.FIREBASE_PROJECT,
  storageBucket: `${process.env.FIREBASE_PROJECT}.firebasestorage.app`,
  messagingSenderId: process.env.FIREBASE_SENDER,
  appId: process.env.FIREBASE_APP_ID,
};
