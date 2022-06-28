import React, { useContext } from "react";
import { Text } from "react-native";
import { Typography } from "../../../components/typography/typography.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import { CartContainer, CartIcon } from "../components/checkout.styles";
import { CreditCardInput } from "../components/credit-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);

  if (!cart || !restaurant) {
    return (
      <SafeArea>
        <CartContainer>
          <CartIcon icon="cart-off" />
        </CartContainer>
        <Typography variant="error">This is cart</Typography>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>{JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
