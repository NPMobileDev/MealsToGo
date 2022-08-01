import React from "react";
import { Typography } from "../../../components/typography/typography.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  CartContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;

  return (
    <SafeArea>
      <CartContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Typography variant="error">{error}</Typography>
      </CartContainer>
    </SafeArea>
  );
};
