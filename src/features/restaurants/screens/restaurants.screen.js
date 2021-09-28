import React from "react";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info.card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { restaurants, isLoading, error } = React.useContext(RestaurantContext);

  const handleSearchChange = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue800} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={handleSearchChange}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantFlatList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantsInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

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
