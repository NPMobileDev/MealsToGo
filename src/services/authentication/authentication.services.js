import { getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const getFirebaseApp = () => {
  return getApp();
};

const getFirebaseAuth = () => {
  return getAuth(getFirebaseApp());
};

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
};

export const logoutRequest = () => getFirebaseAuth().signOut();
