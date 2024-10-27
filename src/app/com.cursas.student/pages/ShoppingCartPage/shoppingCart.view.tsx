import js from '@/assets/js.png';

import Divider from '@mui/material/Divider';

import CreditCardIcon from '@mui/icons-material/CreditCard';

const ShoppingCartView = () => {
  return (
    <div className="w-full h-max flex flex-col space-y-4">
      {/* Title */}
      <p className="text-xl font-semibold">Shopping Cart</p>
      {/* End title */}

      {/* Pay fields */}
      <div className="w-full h-max flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4">
        {/* Course list */}
        <div className="lg:w-3/4 w-full h-max flex flex-col space-y-1">
          {/* Elements */}
          <div className="flex w-full h-[9rem]">
            {/* Img */}
            <div className="w-[10rem] h-full flex justify-start items-center">
              <img src={js} />
            </div>
            {/* End img */}

            {/* Detail */}
            <div className="w-[calc(100%-10rem)] h-full relative flex flex-col pl-4 space-y-2 justify-center">
              <p className="text-2xl font-bold truncate">
                Javascript something of a programming language asdlklas dlkla sd
              </p>
              <p className="text-gray-400">Programming language</p>
              <p className="text-xl font-semibold">$99.90</p>

              <button className="w-max text-red-500 hover:underline">
                <p>Remove</p>
              </button>
            </div>
            {/* End detail */}
          </div>
          {/* End elements */}

          <Divider />

          {/* Elements */}
          <div className="flex w-full h-[9rem]">
            {/* Img */}
            <div className="w-[10rem] h-full flex justify-start items-center">
              <img src={js} />
            </div>
            {/* End img */}

            {/* Detail */}
            <div className="w-[calc(100%-10rem)] h-full relative flex flex-col pl-4 space-y-2 justify-center">
              <p className="text-2xl font-bold truncate">
                Javascript something of a programming language asdlklas dlkla sd
              </p>
              <p className="text-gray-400">Programming language</p>
              <p className="text-xl font-semibold">$99.90</p>
              <button className="w-max text-red-500 hover:underline">
                <p>Remove</p>
              </button>
            </div>
            {/* End detail */}
          </div>
          {/* End elements */}
        </div>
        {/* End course list */}

        {/* Summary */}
        <div className="lg:w-1/4 w-full h-max flex flex-col bg-white drop-shadow-md p-4 space-y-4">
          <p className="text-xl font-bold text-gray-400">SUMMARY</p>

          <div className="w-full h-max flex flex-col">
            <div className="w-full h-max flex flex-col">
              <p className="text-base font-medium">Total Cost:</p>
              <p className="text-2xl text-emerald-600 font-semibold">$199.80</p>
            </div>
          </div>

          <button className='w-full h-[50px] bg-emerald-600 flex space-x-1 justify-center items-center
            text-white hover:bg-emerald-500 transition-all delay-0
          '>
            <CreditCardIcon />
            <p className='text-xl'>Purchase</p>
          </button>
        </div>
        {/* End summary */}
      </div>
      {/* End pay fields */}
    </div>
  );
};

export default ShoppingCartView;
