import React, { useState, createContext } from "react";
import { getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import {
  loginRequest,
  registerRequest,
  logoutRequest,
} from "./authentication.services";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // listen to firebase user auth state changed
  const auth = getAuth(getApp());
  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  });
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((_) => {
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onRegister = (email, password, repeatPassword) => {
    if (password !== repeatPassword) {
      setError("Error: Password do not match");
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((_) => {
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onLogout = () => {
    logoutRequest();
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        user,
        isAuthenticated,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
