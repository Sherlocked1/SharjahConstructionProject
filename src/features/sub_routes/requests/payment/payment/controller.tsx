import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentMethod } from "@stripe/stripe-js";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { DialogContext } from "../../../../../contexts/dialog/dialog_context";
import { ConstructionRequest } from "../../../../core/models/constructionRequestion";
import { PaymentInfo } from "./models";
import CryptoJS from 'crypto-js';
import { SocketContext } from "../../../../../contexts/socket/socket_context";

const usePaymentController = () => {

  const stripe = useStripe();
  const elements = useElements();

  const {socket} = useContext(SocketContext);

  const { title, description, location } = useParams();
  const { isOpen, openDialog } = useContext(DialogContext);

  const navigate = useNavigate();

  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    const { error, paymentMethod: cardPaymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setIsLoading(false);
      setErrorMessage(error.message!)
    } else {
      setPaymentMethod(cardPaymentMethod)
      paymentRequest(title!, description!, location!);
    }
  };

  const paymentRequest = (title: string, description: string, location: string) => {
    const newRequest: ConstructionRequest = { title, description, location, status: "Pending" }
    const paymentInfo: PaymentInfo = {
      cardNumber: paymentMethod?.card?.last4 ?? "1234",
      cvc: '723',
      expiryDate: `${paymentMethod?.card?.exp_month}/${paymentMethod?.card?.exp_year}`
    }

    const data = { paymentInfo, constructionRequest: newRequest }
    const dataString = JSON.stringify(data);

    const key = process.env.REACT_APP_ENCRYPTION_KEY
    const encryptedData = CryptoJS.Rabbit.encrypt(dataString, key!);

    socket?.emit('makePayment', encryptedData);
  }

  socket?.on('paymentSuccess', () => {
    setShowReceipt(true);
    setIsLoading(false);
    // openDialog('نجاح', <p>تمت عملية الدفع بنجاح</p>)
  })

  const showReceiptView = () => {
    setShowReceipt(true);
  }

  const handleReset = () => {
    navigate('/');
  };

  return {
    isOpen,
    openDialog,
    stripe,
    elements,
    showReceipt,
    paymentMethod,
    isLoading,
    errorMessage,
    handleSubmit,
    title,
    location,
    description,
    showReceiptView,
    handleReset
  }

}

export default usePaymentController;