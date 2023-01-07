import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { handleToken } from '../reducers/authSlice';
import { fetchUser } from '../reducers/authSlice';

const Payments = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const handleStripeToken = (token) => {
    dispatch(handleToken(token));
    dispatch(fetchUser(currentUser));
  };

  return (
    <StripeCheckout
      amount={500}
      token={(token) => {
        handleStripeToken(token);
      }}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      name="Poll-Pal"
      description="$5 for 5 email credits"
    >
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
        Add Credits
      </button>
    </StripeCheckout>
  );
};

export default Payments;
