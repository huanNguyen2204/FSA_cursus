import { useState } from "react";

const PaymentHistoryView = () => {
  /**
   * 
   * states
   * 
   * **/
  const [paymentList, setPaymentList] = useState<any>(undefined);

  /**
   * 
   * hooks
   * 
   * **/


  return (
    <div className="w-full h-max flex flex-col space-y-10">
      {/* Title */}
      <p className="text-xl font-semibold">Payment History</p>
      {/* End title */}

      {/* Payment fields */}
      <div className="w-full h-max flex flex-col space-y-2">
        {/* Elements */}
        <div className="w-full h-max p-3 bg-white shadow-sm">
          <p className="text-lg font-semibold italic">Code payment: </p>
          <p>Total Item: </p>
          <p>Total Price: </p>
          <p>Buy on date: </p>
        </div>
        {/* End elements */}
      </div>
      {/* End payment fields */}
    </div>
  );
};

export default PaymentHistoryView;
