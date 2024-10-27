import js from '@/assets/js.png';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { useNavigate } from 'react-router';

const CartItemView = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-max flex flex-col cursor-pointer
      border-[1.5px] border-slate-400 hover:border-emerald-600 hover:shadow-md transition-all delay-0 bg-white hover:bg-emerald-100
    "

      onClick={() => navigate("/cursus-student/layout/detail")}
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
            Javascript something of a programming language asdlklas dlkla sd
          </p>
          {/* End title */}

          {/* Category */}
          <div className="w-full h-max">
            <p className="text-xs truncate text-gray-400">Programming language</p>
          </div>
          {/* End category */}

          {/* Price */}
          <div className="w-full h-max">
            <p className="text-base font-semibold truncate text-black">$99.90</p>
          </div>
          {/* End price */}

          {/* Add to cart and buy now */}
          <div className="w-max h-max absolute bottom-0 right-0 space-x-2 flex">
            {/* Add to cart */}
            <button
              className="
                flex items-center space-x-1 text-gray-500 hover:underline
              "
            >
              <AddShoppingCartIcon sx={{ fontSize: 15 }} />
              <p>Add to cart</p>
            </button>
            {/* End add to cart */}

            {/* Buy now */}
            <button
              className="
                flex items-center space-x-0 text-emerald-600 hover:underline
              "
            >
              <AttachMoneyOutlinedIcon sx={{ fontSize: 15 }} />
              <p>Buy now</p>
            </button>
            {/* Buy now */}
          </div>
          {/* End add to cart and buy now */}
        </div>
      </div>
      {/* End content */}
    </div>
  );
};

export default CartItemView;
