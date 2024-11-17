import Divider from '@mui/material/Divider';
import courseDefault from "@/assets/default-course.png";

import CreditCardIcon from '@mui/icons-material/CreditCard';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/App';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import axios from 'axios';
import getDeleteCartUtil from '@/utils/shared/getDeleteCartUtil';

const ShoppingCartView = () => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);
  const userInfor = localStorage.getItem('userInfor');
  const [totalSum, setTotalSum] = useState<number>(0);

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    let something: number = 0;
    context?.listOfCart?.forEach((item: any) => {
      something += item?.price;
    });

    setTotalSum(something);
  }, [context.listOfCart]);

  /**
   *
   * funcs
   *
   * **/
  const _onClickDeleteCart = async (courseId: number) => {
    if (userInfor !== null) {
      const info = JSON.parse(userInfor);
      const token = getTokenUtil();
      const url = getDeleteCartUtil(String(courseId), info.id);

      context.setTypeOfDialog('loading');
      context.handleOpenDialog();

      await axios
        .post(url, {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: token,
          },
        })
        .then((_res: any) => {
          context.setBadgeCart(context.badgeCart - 1);
          context.setListOfCart(context.listOfCart.filter((item: any) => item.courseId !== courseId));
          context.handleCloseDialog();
        });
    }
  };

  return (
    <div className="w-full h-max flex flex-col space-y-4">
      {/* Title */}
      <p className="text-xl font-semibold">Shopping Cart</p>
      {/* End title */}

      {/* Pay fields */}
      <div className="w-full h-max flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4">
        {/* Course list */}
        <div className="lg:w-3/4 w-full h-max flex flex-col space-y-1">
          {context.listOfCart?.length === 0 ? (
            <p className="text-lg italic text-gray-400 font-medium">
              You haven't any courses in shopping cart. Please add new courses
            </p>
          ) : (
            <>
              {context?.listOfCart?.map((item: any, index: any) => (
                <React.Fragment key={index}>
                  {/* Elements */}
                  <div className="flex w-full h-[9rem] py-1">
                    {/* Img */}
                    <div className="w-[10rem] h-full flex justify-start items-center">
                      <img className="w-full h-full" src={item?.image ? item?.image : courseDefault} />
                    </div>
                    {/* End img */}

                    {/* Detail */}
                    <div className="w-[calc(100%-10rem)] h-full relative flex flex-col pl-4 space-y-2 justify-center">
                      <p className="text-2xl font-bold truncate">{item?.name}</p>
                      <p className="text-gray-400">
                        {item?.categories.map((subItem: any, subIndex: any) => (
                          <React.Fragment key={subIndex}>
                            {subIndex === item?.categories.length - 1 ? (
                              <>{subItem?.categoryName}</>
                            ) : (
                              <>{subItem?.categoryName}, </>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                      <p className="text-xl font-semibold">${item?.price}</p>

                      <button
                        className="w-max text-red-500 text-xs hover:underline"
                        onClick={() => _onClickDeleteCart(item?.courseId)}
                      >
                        <p>Remove</p>
                      </button>
                    </div>
                    {/* End detail */}
                  </div>
                  {/* End elements */}

                  <Divider />
                </React.Fragment>
              ))}
            </>
          )}
        </div>
        {/* End course list */}

        {/* Summary */}
        <div className="lg:w-1/4 w-full h-max flex flex-col bg-white drop-shadow-md p-4 space-y-4">
          <p className="text-xl font-bold text-gray-400">SUMMARY</p>

          <div className="w-full h-max flex flex-col">
            <div className="w-full h-max flex flex-col">
              <p className="text-base font-medium">Total Cost:</p>
              <p className="text-2xl text-emerald-600 font-semibold">${totalSum}</p>
            </div>
          </div>

          <button
            className={`w-full h-[50px] flex space-x-1 justify-center items-center transition-all delay-0
            ${context.listOfCart?.length === 0 || context?.listOfCart === undefined ? 'bg-gray-300 text-white' : 'text-white hover:bg-emerald-500 bg-emerald-600'} 
          `}
            disabled={context.listOfCart?.length === 0 || context?.listOfCart === undefined}
            onClick={() => {
              context.setTypeOfDialog('purchase');
              context.handleOpenDialog();
            }}
          >
            <CreditCardIcon />
            <p className="text-xl">Purchase</p>
          </button>
        </div>
        {/* End summary */}
      </div>
      {/* End pay fields */}
    </div>
  );
};

export default ShoppingCartView;
