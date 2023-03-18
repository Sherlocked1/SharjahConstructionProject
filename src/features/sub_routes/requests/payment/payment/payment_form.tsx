import { CardElement } from '@stripe/react-stripe-js';
import MyDialog from '../../../../core/custom/dialog';
import LoadingIndicator from '../../../../core/custom/loading_indicator';
import MyButton from '../../../../core/custom/my_button';
import usePaymentController from './controller';

const PaymentForm = () => {

  const {
    title, location,
    isOpen,
    paymentMethod,
    isLoading,
    showReceiptView,
    errorMessage,
    showReceipt,
    handleSubmit,
    handleReset
  } = usePaymentController()

  const receipt = (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-lg font-medium mb-4">الفاتورة</h2>

      <p className="mb-2">
        اسم الطلب: <span className="font-medium">{title}</span>
      </p>
      <p className="mb-2">
        عنوان الطلب: <span className="font-medium">{location}</span>
      </p>
      <p className="mb-2">
        المبلغ: <span className="font-medium">٤٠٠ درهم</span>
      </p>
      <p className="mb-2">
        اخر اربعة ارقام في البطاقة: <span className="font-medium">{paymentMethod?.card?.last4}</span>
      </p>
      <p className="mb-2">
        تاريخ الانتهاء: <span className="font-medium">{`${paymentMethod?.card?.exp_month}/${paymentMethod?.card?.exp_year}`}</span>
      </p>
      <button
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        onClick={handleReset}
      >
        حسنا
      </button>
    </div>
  );

  const paymentForm = (
    <form onSubmit={handleSubmit} className="border-gray-50 border w-2/4 shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2 shadow-lg">
        <CardElement className="p-2 bg-white rounded-md shadow-sm" />
        <label className='text-sm text-red-500 font-semibold'>{errorMessage}</label>
      </div>
      <MyButton type='submit' title="دفع" />
    </form>
  )

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      {isLoading && <LoadingIndicator />}
      {isOpen && <MyDialog onOkClicked={showReceiptView} />}
      {showReceipt ? receipt : paymentForm}
    </div>
  );
};

export default PaymentForm;
