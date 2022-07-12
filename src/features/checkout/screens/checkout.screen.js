import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { Typography } from "../../../components/typography/typography.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CartContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { CreditCardInput } from "../components/credit-card.component";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurants-info.card.component";
import { payRequest } from "../../../services/checkout/checkout.service";
import { Spacer } from "../../../components/spacer/spacer.component";
import { List } from "react-native-paper";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");

  const onPay = () => {
    payRequest("123", 123, "sss");
  };

  if (!cart || !restaurant) {
    return (
      <SafeArea>
        <CartContainer>
          <CartIcon icon="cart-off" />
          <Typography variant="error">Empty cart</Typography>
        </CartContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Typography>Your Order</Typography>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, i) => {
              return <List.Item key={i} title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Typography>{`Total ${sum / 100}`}</Typography>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => (t.length ? setName(t) : setName(null))}
        />
        {name.length > 0 && <CreditCardInput />}
        <Spacer position="top" size="xl" />
        <PayButton mode="contained" icon="cash-usd" onPress={() => onPay()}>
          Pay
        </PayButton>
        <ClearButton mode="contained" icon="cart-off" onPress={clearCart}>
          Clear Cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
