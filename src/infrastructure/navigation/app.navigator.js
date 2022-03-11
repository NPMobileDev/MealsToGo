import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings!</Text>
      <Button mode="contained" onPress={() => onLogout()}>
        logout
      </Button>
    </SafeArea>
  );
};

const getIcon = (iconOptions, focused, size, color) => {
  return focused ? (
    <Ionicons name={iconOptions.active} size={size} color={color} />
  ) : (
    <Ionicons name={iconOptions.inactive} size={size} color={color} />
  );
};

const TAB_ICON_OPTIONS = {
  Restaurants: { active: "restaurant", inactive: "restaurant-outline" },
  Map: { active: "map", inactive: "map-outline" },
  Settings: { active: "ios-settings", inactive: "ios-settings-outline" },
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, size, color }) => {
    const iconOptions = TAB_ICON_OPTIONS[route.name];
    return getIcon(iconOptions, focused, size, color);
  },
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
