import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import CategoryIcon from '@mui/icons-material/Category';
import DiscountIcon from '@mui/icons-material/Discount';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CartOfShopping = () => {
  return (
    <div className="w-full min-h-[12rem] max-h-max p-[1rem] border-[2px] border-gray-300 rounded-sm">
      <div className="w-full min-h-full max-h-max flex">
        {/* Img & name */}
        <div className="w-1/2 min-h-full max-h-max flex items-center">
          {/* Image */}
          <div className="w-[10rem] h-[10rem] flex items-center justify-center">
            <img
              className="pointer-events-none"
              src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.news_app_ed.jpg"
            />
          </div>
          {/* End image */}

          {/* Name */}
          <div className="w-[calc(100%-10rem)] min-h-full max-h-max pr-3 space-y-2 flex justify-center px-3 flex-col text-xs">
            <p className="text-lg">Iphone 16 Pro Max</p>
            <div className="w-full h-max flex flex-col space-y-1">
              <div className="w-max px-1 py-0.5 h-max flex space-x-1 bg-red-500 items-center text-white">
                <DiscountIcon sx={{ fontSize: 15 }} />
                <p>15%</p>
              </div>

              <div className="w-full h-max flex space-x-1 items-center text-gray-400">
                <CategoryIcon sx={{ fontSize: 15 }} />
                <p>Gadget device</p>
              </div>

              <div className="w-full h-max flex space-x-1 items-center text-gray-400">
                <LocationOnIcon sx={{ fontSize: 15 }} />
                <p>USA</p>
              </div>
            </div>
          </div>
          {/* End name */}
        </div>
        {/* End img & name */}

        {/* Quantity and Delete button */}
        <div className="w-1/2 min-h-full max-h-max flex items-center ">
          {/* Quantity */}
          <div className="w-1/3 h-full flex items-center justify-center">
            <button className="w-[33px] h-[33px] bg-gray-300 hover:bg-gray-200">
              <RemoveIcon sx={{ fontSize: 20 }} />
            </button>
            <input
              className="w-[50px] h-[33px] focus:outline-none px-2 border-[2px] border-lime-500"
              defaultValue={1}
              type="number"
            />
            <button className="w-[33px] h-[33px] bg-gray-300 hover:bg-gray-200">
              <AddIcon sx={{ fontSize: 20 }} />
            </button>
          </div>
          {/* End quantity */}

          {/* Total price and Delete button */}
          <div className="w-2/3 h-full flex ">
            {/* Total price */}
            <div className="w-3/4 h-full flex justify-center items-center">
              <p className="text-lime-500 text-xl">$ 1990.0</p>
            </div>
            {/* End total price */}

            {/* Delete */}
            <div className="w-1/4 h-full flex justify-center items-center">
              <button className="p-1 text-red-500  hover:text-red-400 bg-gray-300 rounded-full hover:bg-gray-200">
                <DeleteIcon />
              </button>
            </div>
            {/* End button */}
          </div>
          {/* End total price */}
        </div>
        {/* End quantity and delete */}
      </div>
    </div>
  );
};

export default CartOfShopping;
