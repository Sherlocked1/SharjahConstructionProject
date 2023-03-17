import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../payment/payment_form';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY!);

console.log('key',process.env.REACT_APP_STRIPE_API_KEY);

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Checkout;
