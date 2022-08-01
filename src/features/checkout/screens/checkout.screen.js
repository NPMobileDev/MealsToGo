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
  PaymentProcessing,
} from "../components/checkout.styles";
import { CreditCardInput } from "../components/credit-card.component";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurants-info.card.component";
import { payRequest } from "../../../services/checkout/checkout.service";
import { Spacer } from "../../../components/spacer/spacer.component";
import { List } from "react-native-paper";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      console.log("some error");
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        setName("");
        navigation.navigate("CheckoutSuccess");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: err,
        });
      });
  };

  if (!cart || !restaurant) {
    return (
      <SafeArea>
        <CartContainer>
          <CartIcon icon="cart-off" />
          <Typography variant="body">Your cart is empty!</Typography>
        </CartContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
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
          onChangeText={(t) => (t.length ? setName(t) : setName(""))}
        />
        {name.length > 0 && (
          <CreditCardInput
            name={name}
            onSuccess={setCard}
            onError={() =>
              navigation.navigate("CheckoutError", {
                error: "Something went wrong with your credit card!",
              })
            }
          />
        )}
        <Spacer position="top" size="xl" />
        <PayButton
          disabled={isLoading}
          mode="contained"
          icon="cash-usd"
          onPress={() => onPay()}
        >
          Pay
        </PayButton>
        <ClearButton
          disabled={isLoading}
          mode="contained"
          icon="cart-off"
          onPress={clearCart}
        >
          Clear Cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
