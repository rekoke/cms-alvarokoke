import firebase from 'firebase/app';
import 'firebase/firestore';
import { DB_KEYS, DB_KEYS_TRAVEL } from './keys';

const alvarokokeDBconfig = {
  apiKey: DB_KEYS.API_KEY,
  authDomain: DB_KEYS.AUTH_DOMAIN,
  databaseURL: DB_KEYS.DATABASE_URL,
  projectId: DB_KEYS.PROJECT_ID,
  storageBucket: DB_KEYS.STORAGE_BUCKET,
  messagingSenderId: DB_KEYS.MESSAGING_SENDERID,
};

const secondary = firebase.initializeApp(alvarokokeDBconfig, 'secondary');
export const alvarokokeDB = firebase.firestore(secondary);

const travelDBconfig = {
  apiKey: DB_KEYS_TRAVEL.API_KEY,
  authDomain: DB_KEYS_TRAVEL.AUTH_DOMAIN,
  databaseURL: DB_KEYS_TRAVEL.DATABASE_URL,
  projectId: DB_KEYS_TRAVEL.PROJECT_ID,
  storageBucket: DB_KEYS_TRAVEL.STORAGE_BUCKET,
  messagingSenderId: DB_KEYS_TRAVEL.MESSAGING_SENDERID,
};

const third = firebase.initializeApp(travelDBconfig, 'third');
const thirdStorage = firebase.storage(third);
export const travelDB = firebase.firestore(third);
export const travelDBStorage = thirdStorage;
