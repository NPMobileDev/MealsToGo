import React from "react";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Search } from "../../restaurants/components/search.component";
import { RestaurantsInfoCard } from "../components/restaurants-info.card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = React.useContext(RestaurantContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue800} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantFlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantDetail")}
          >
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const RestaurantFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
