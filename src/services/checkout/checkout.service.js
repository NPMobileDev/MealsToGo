import createStripe from "stripe-client";

const stripe = createStripe("pk_test_JT71xc1nGelbL46R1IlqxJik00UmOnFEvN");

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};
