import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";
import { SafeArea } from "../../components/utilities/safe-area.component";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => (
          <SafeArea>
            <Text>Restaurant Detail</Text>
          </SafeArea>
        )}
      />
    </RestaurantStack.Navigator>
  );
};
