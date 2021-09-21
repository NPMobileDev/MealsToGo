import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Text } from "react-native";
import { SafeArea } from "./src/components/utilities/safe-area.component";

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
  Restaurant: { active: "restaurant", inactive: "restaurant-outline" },
  Map: { active: "map", inactive: "map-outline" },
  Settings: { active: "ios-settings", inactive: "ios-settings-outline" },
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, size, color }) => {
    const iconOptions = TAB_ICON_OPTIONS[route.name];
    return getIcon(iconOptions, focused, size, color);
  },
});

export default function App() {
  const [oswaldloaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldloaded || !latoLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}
