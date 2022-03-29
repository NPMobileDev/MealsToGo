import React, { useContext, useState, useCallback } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled(View)`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const { onLogout, user } = useContext(AuthenticationContext);
  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <AvatarContainer>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />
          )}
          {photo && <Avatar.Image size={180} source={{ uri: photo }} />}
          {user ? (
            <Spacer position="top" size="large">
              <Text variant="caption">{user.email}</Text>
            </Spacer>
          ) : null}
        </AvatarContainer>
      </TouchableOpacity>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
