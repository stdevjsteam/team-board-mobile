import * as FirebaseModule from 'firebase';
import firebaseTest from './firebaseTest';

const {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId
} = firebaseTest;

let firebaseInitialized = false;

if (
  apiKey !== 'null' && 
  authDomain !== 'null' &&
  databaseURL !== 'null' &&
  storageBucket !== 'null' &&
  messagingSenderId !== 'null'
) {
  FirebaseModule.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    storageBucket,
    messagingSenderId
  });

  firebaseInitialized = true;
}

export const FirebaseStorageRef = firebaseInitialized
  ? FirebaseModule.storage().ref()
  : null;

export const FirebaseRef = firebaseInitialized
  ? FirebaseModule.database().ref()
  : null;

export const Firebase = firebaseInitialized ? FirebaseModule : null;