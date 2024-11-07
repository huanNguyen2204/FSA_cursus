import js from '@/assets/js.png';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const CartItemView = (props: any) => {
  /**
   * 
   * states
   * 
   * **/
  const [categoryStr, setCategoryStr] = useState<string>("");
  const navigate = useNavigate();

  /**
   * 
   * hooks
   * 
   * **/
  useEffect(() => {
    if (props?.categories?.length !== 0) {
      let rsStr = "";
      
      for (let i=0; i<props?.categories?.length;i++) {
        if (i == props?.categories?.length - 1) {
          rsStr += `${props?.categories[i].categoryName}.`
        } else {
          rsStr += `${props?.categories[i].categoryName}, `
        }
      }

      setCategoryStr(rsStr);
    }
  }, [])


  return (
    <div
      className="w-full h-max flex flex-col cursor-pointer
      border-[1.5px] border-slate-400 hover:border-emerald-600 hover:shadow-md transition-all delay-0 bg-white hover:bg-emerald-100
    "

      onClick={() => navigate(`/cursus-student/layout/detail/${props?.courseId}`)}
    >
      {/* Image */}
      <div className="w-full h-[10rem]">
        <img className="pointer-events-none h-full w-full" src={js} />
      </div>
      {/* End image */}

      {/* Content */}
      <div className="w-full h-[10rem] flex p-2 text-left">
        <div className="w-full h-full flex flex-col space-y-2 relative">
          {/* Title */}
          <p
            className="text-lg font-semibold overflow-hidden text-ellipsis"
            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
          >
            {props?.name}
          </p>
          {/* End title */}

          {/* Category */}
          <div className="w-full h-max truncate">
            <p className="text-xs truncate text-gray-400">{categoryStr}</p>
          </div>
          {/* End category */}

          {/* Price */}
          <div className="w-full h-max">
            <p className="text-base font-semibold truncate text-black">${props?.price}</p>
          </div>
          {/* End price */}

          {/* Author */}
          <div className="w-max h-max absolute bottom-0 right-0 space-x-2 flex">
          <p className='text-gray-500 italic underline'>{props?.account?.fullName}</p>
          </div>
          {/* End author */}
        </div>
      </div>
      {/* End content */}
    </div>
  );
};

export default CartItemView;
