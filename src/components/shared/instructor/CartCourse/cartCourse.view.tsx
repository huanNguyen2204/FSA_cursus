import Rating from '@mui/material/Rating';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import js from '@/assets/js.png';

const CartCourseView = () => {
  return (
    <div
      className="w-[calc((100%/5)-0.2rem)] h-max flex flex-col p-3 space-y-3
    rounded-md bg-white border-[2px] hover:cursor-pointer hover:border-emerald-600
    border-[#e5e5e5] transition-all delay-0 hover:shadow-md 
  "
    >
      {/* Image */}
      <div className="w-full h-[10rem] rounded-md">
        <img className="bg-cover bg-center w-full h-full rounded" src={js} />
      </div>
      {/* End image */}

      {/* Infor */}
      <div className="w-full h-max flex flex-col space-y-4 relative">
        <p className="text-xl font-semibold truncate">Javascript and Typescript from begin to Advance</p>
        <div className="w-full h-max flex flex-col space-y-1">
          <p>Programming</p>
          <Rating name="disabled" value={10} readOnly />
          <p className="text-lg font-semibold">$99.9</p>
        </div>

        <div className="w-max h-max absolute bottom-0 right-0 flex space-x-3">
          <button className="w-[2rem] h-[2rem] bg-blue-500 hover:bg-blue-400 text-white flex justify-center items-center rounded-sm">
            <EditIcon sx={{ fontSize: 18 }} />
          </button>
          <button className="w-[2rem] h-[2rem] bg-red-500 hover:bg-red-400 text-white flex justify-center items-center rounded-sm">
            <DeleteIcon sx={{ fontSize: 18 }} />
          </button>
        </div>
      </div>
      {/* End infor */}
    </div>
  );
};

export default CartCourseView;
