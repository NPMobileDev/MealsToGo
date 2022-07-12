import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe("pk_test_JT71xc1nGelbL46R1IlqxJik00UmOnFEvN");

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong processing your payment");
    }
    return res.json();
  });
};
