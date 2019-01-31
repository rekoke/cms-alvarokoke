import * as firebase from 'firebase';
import { DB_KEYS, AUTH_KEYS } from './keys';

const loginAppConfig = {
  apiKey: AUTH_KEYS.API_KEY,
  authDomain: AUTH_KEYS.AUTH_DOMAIN,
  databaseURL: AUTH_KEYS.DATABASE_URL,
  projectId: AUTH_KEYS.PROJECT_ID,
  storageBucket: AUTH_KEYS.STORAGE_BUCKET,
  messagingSenderId: AUTH_KEYS.MESSAGING_SENDERID,
};
export const login = firebase.initializeApp(loginAppConfig);

const secondaryAppConfig = {
  apiKey: DB_KEYS.API_KEY,
  authDomain: DB_KEYS.AUTH_DOMAIN,
  databaseURL: DB_KEYS.DATABASE_URL,
  projectId: DB_KEYS.PROJECT_ID,
  storageBucket: DB_KEYS.STORAGE_BUCKET,
  messagingSenderId: DB_KEYS.MESSAGING_SENDERID,
};
const secondary = firebase.initializeApp(secondaryAppConfig, 'secondary');
export const secondaryDatabase = secondary.database();
