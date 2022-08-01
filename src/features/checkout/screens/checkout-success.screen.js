import React from "react";
import { Typography } from "../../../components/typography/typography.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import {
  CartContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartContainer>
        <CartIcon icon="check-bold" />
        <Typography variant="body">Success!</Typography>
      </CartContainer>
    </SafeArea>
  );
};
