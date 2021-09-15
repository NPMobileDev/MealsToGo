import React from "react";
import styled, { useTheme } from "styled-components/native";
import { View } from "react-native";

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
