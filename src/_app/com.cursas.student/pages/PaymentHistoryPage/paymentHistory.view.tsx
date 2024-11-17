import { apiUrl } from '@/api/api.url';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

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
  useEffect(() => {
    const userInfor = localStorage.getItem('userInfor');

    const getAllPayment = async () => {
      if (userInfor !== null) {
        const userId = JSON.parse(userInfor).id;
        const token = getTokenUtil();
        const url = apiUrl.cartUrl.payment + `/${userId}`;

        await axios
          .get(url, {
            headers: {
              Accept: '*/*',
              Authorization: token,
            },
          })
          .then((_res) => {
            if (_res.status === 200) {
              setPaymentList(_res.data.payload);
            }
          });
      }
    };

    getAllPayment();
  }, []);

  return (
    <div className="w-full h-max flex flex-col space-y-10">
      {/* Title */}
      <p className="text-xl font-semibold">Payment History</p>
      {/* End title */}

      {/* Payment fields */}
      <div className="w-full h-max flex flex-col space-y-2">
        {paymentList?.length === 0 ? (
          <div className='w-full h-max text-gray-400 flex space-x-1'>
            <Inventory2OutlinedIcon />
            <p className='text-base italic'>You haven't any payment before.</p>
          </div>
        ) : (
          <>
            {paymentList?.map((item: any, index: any) => (
              <button
                key={index}
                className="w-full h-max p-3 bg-white shadow-sm text-left
            hover:bg-emerald-100 transition-all delay-0
          "
              >
                <p className="text-lg font-semibold italic">Code payment: {item.cartId}</p>
                <p>
                  Total Item: <span className="text-sky-500 font-semibold">{item.totalItem}</span>
                </p>
                <p>
                  Total Price: <span className="text-emerald-500 font-semibold">${item.totalPrice}</span>
                </p>
                <p>
                  Buy on date <span className="text-xs">(mm-dd-yyyy)</span>:{' '}
                  <span className="text-gray-400">{new Date(item.createdAt).toLocaleString()}</span>
                </p>
              </button>
            ))}
          </>
        )}

        {/* Elements */}
        {/* End elements */}
      </div>
      {/* End payment fields */}
    </div>
  );
};

export default PaymentHistoryView;
