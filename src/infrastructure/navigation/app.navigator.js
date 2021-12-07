import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./restaurants.navigator";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
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
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
