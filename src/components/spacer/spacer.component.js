import React from "react";
import styled, { useTheme } from "styled-components/native";
import { View } from "react-native";

const TopSmall = styled(View)`
  margin-top: ${(props) => props.theme.space[1]};
`;

const LeftSmall = styled(View)`
  margin-left: ${(props) => props.theme.space[1]};
`;

const LeftMedium = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;

const LeftLarge = styled(View)`
  margin-left: ${(props) => props.theme.space[3]};
`;

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVaraint = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVaraint[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();

  return (
    <SpacerView variant={getVariant(position, size, theme)}>
      {children}
    </SpacerView>
  );
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
