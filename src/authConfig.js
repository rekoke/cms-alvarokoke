import firebase from 'firebase/app';
import 'firebase/firestore';
import { AUTH_KEYS } from './keys';

const loginAppConfig = {
  apiKey: AUTH_KEYS.API_KEY,
  authDomain: AUTH_KEYS.AUTH_DOMAIN,
  databaseURL: AUTH_KEYS.DATABASE_URL,
  projectId: AUTH_KEYS.PROJECT_ID,
  storageBucket: AUTH_KEYS.STORAGE_BUCKET,
  messagingSenderId: AUTH_KEYS.MESSAGING_SENDERID,
};
const login = firebase.initializeApp(loginAppConfig);
export default login;
