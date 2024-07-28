import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./restaurants.navigator";
import { CheckoutNavigator } from "./checkout.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
// import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { SettingsNavigator } from "./settings.navigator";
import { CartContextProvider } from "../../services/cart/cart.context";
import { colors } from "../../infrastructure/theme/colors";

const Tab = createBottomTabNavigator();

// const getIcon = (iconOptions, focused, size, color) => {
//   return focused ? (
//     <Ionicons name={iconOptions.active} size={size} color={color} />
//   ) : (
//     <Ionicons name={iconOptions.inactive} size={size} color={color} />
//   );
// };

// const TAB_ICON_OPTIONS = {
//   Restaurants: { active: "restaurant", inactive: "restaurant-outline" },
//   Checkout: { active: "cart", inactive: "cart-outline" },
//   Map: { active: "map", inactive: "map-outline" },
//   Settings: { active: "ios-settings", inactive: "ios-settings-outline" },
// };

// const createScreenOptions = ({ route }) => ({
//   tabBarIcon: ({ focused, size, color }) => {
//     const iconOptions = TAB_ICON_OPTIONS[route.name];
//     return getIcon(iconOptions, focused, size, color);
//   },
//   headerShown: false,
//   tabBarActiveTintColor: colors.brand.primary,
//   tabBarInactiveTintColor: colors.brand.muted,
// });

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <CartContextProvider>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "#e91e63",
              }}
            >
              <Tab.Screen
                name="Restaurants"
                component={RestaurantNavigator}
                options={{
                  tabBarLabel: "restaurants",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="silverware-fork-knife"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Checkout"
                component={CheckoutNavigator}
                options={{
                  tabBarLabel: "checkout",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="cart-arrow-down"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                  tabBarLabel: "map",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="map"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{
                  tabBarLabel: "settings",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="cogs"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
