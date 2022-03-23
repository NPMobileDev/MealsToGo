import React, { useContext } from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text, TouchableOpacity } from "react-native";
import { RestaurantFlatList } from "../../restaurants/components/restaurant-list.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurants-info.card.component";

const FavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantFlatList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <FavouritesArea>
      <Text>No favourites yet</Text>
    </FavouritesArea>
  );
};
