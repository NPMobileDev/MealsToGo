import React from "react";
import { View, FlatList } from "react-native";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info.card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={handleSearchChange}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantFlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantsInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name.toString()}
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
