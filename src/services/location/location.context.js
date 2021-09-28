import React from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [keyword, setKeyword] = React.useState("san francisco");

  const onSearch = (searchKeyword = "san francisco") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
