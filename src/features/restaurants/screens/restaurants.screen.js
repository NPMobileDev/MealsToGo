import React from "react";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { Search } from "../../restaurants/components/search.component";
import { RestaurantsInfoCard } from "../components/restaurants-info.card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourties-bar.component";
import { RestaurantFlatList } from "../components/restaurant-list.component";
import { Typography } from "../../../components/typography/typography.component";

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = React.useContext(LocationContext);
  const { restaurants, isLoading, error } = React.useContext(RestaurantContext);
  const { favourites } = React.useContext(FavouritesContext);
  const [isToggled, setIsToggled] = React.useState(false);
  const hasError = !!error || !!locationError;

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue800} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Typography variant="error">Something went wrong</Typography>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantFlatList
          data={restaurants}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView delay={index * 0.7}>
                  <RestaurantsInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
