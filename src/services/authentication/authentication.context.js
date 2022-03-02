import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.services";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setIsLoading(false);
        setUser(user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsAuthenticated(false);
        setError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
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
