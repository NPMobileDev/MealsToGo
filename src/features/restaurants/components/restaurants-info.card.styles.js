import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";

export const RestaurantCard = styled(Card)`
  background-color: white;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Rating = styled(View)`
  flex-direction: row;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
