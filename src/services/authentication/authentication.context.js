import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.services";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const onLogin = (email, password) => {
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setIsAuthenticated(false);
        setError(e);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
