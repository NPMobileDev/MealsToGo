import React from "react";
import { useState, createContext, useEffect, useMemo } from "react";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantTransform)
        .then((restaurantList) => {
          setIsLoading(false);
          setRestaurants(restaurantList);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ restaurants: restaurants, isLoading, error }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
