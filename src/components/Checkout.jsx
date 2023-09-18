import { useDispatch } from "react-redux";
import { createOrderAction } from "../actions/orderActions";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";

const pubKey = import.meta.env.VITE_STRIPE_PUBKEY;

export default function Checkout({ preorderTotal }) {
  const dispatch = useDispatch();

  function tokenHandler(token) {
    dispatch(createOrderAction(token, preorderTotal));
    // console.log(token);
  }

  return (
    <>
      <StripeCheckout
        ComponentClass="me-2"
        stripeKey={pubKey}
        amount={preorderTotal * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        currency="EUR"
      />
    </>
  );
}

Checkout.propTypes = {
  preorderTotal: PropTypes.number,
};
