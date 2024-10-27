import js from '@/assets/js.png';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const DetailView = () => {
  return (
    <div
      className="w-full h-max flex bg-white p-4 
      md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4
      shadow-md
    "
    >
      {/* Img fields */}
      <div className="md:w-2/6 h-full">
        <img src={js} />
      </div>
      {/* End img */}

      {/* Detail fields */}
      <div className="md:w-4/6 h-full flex flex-col space-y-8">
        {/* Top */}
        <div className="w-full h-max flex flex-col space-y-2">
          <p className="text-3xl font-bold">Javascript something of a programming language asdlklas dlkla sd</p>
          <p className="text-xl text-gray-500">Programming language</p>
          <p className="text-2xl font-semibold">$99.90</p>
        </div>
        {/* End top */}

        {/* Bottom */}
        <div className="w-full h-max flex flex-col space-y-3">
          <div className="w-full h-max flex flex-col">
            <p className="text-lg font-bold text-gray-400">INSTRUCTOR</p>
            <p className="font-bold text-base">Nguyen Van A</p>
          </div>

          <div className="w-full h-max flex flex-col">
            <p className="text-lg font-bold text-gray-400">SUMARY</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veritatis possimus earum in recusandae
              repellat quia doloremque eum quod deleniti nobis ducimus dignissimos voluptas ipsum eveniet fuga, odit
              dolorum iusto!
            </p>
          </div>

          <div className="w-full h-max flex flex-col">
            <p className="text-lg font-bold text-gray-400">DESCRIPTION</p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat alias ullam, voluptatem velit minima
              deserunt nisi tenetur officia est similique quam cupiditate facere cum quisquam ratione, ipsam enim
              obcaecati aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veritatis possimus earum
              in recusandae repellat quia doloremque eum quod deleniti nobis ducimus dignissimos voluptas ipsum eveniet
              fuga, odit dolorum iusto!
            </p>
          </div>

          <div className="w-full h-max flex flex-col">
            <p className="text-lg font-bold text-gray-400">DURATION</p>
            <p className="font-semibold">45 hrs</p>
          </div>
        </div>
        {/* End bottom */}

        {/* Pay fields */}
        <div className="w-full h-max flex space-x-3">
          <button
            className="
                flex items-center space-x-1 text-gray-500 border-[1.5px] border-gray-500
                p-2 hover:text-white hover:bg-gray-500 transition-all delay-0
              "
          >
            <AddShoppingCartIcon sx={{ fontSize: 15 }} />
            <p>Add to cart</p>
          </button>

          <button
            className="
                flex items-center bg-emerald-600
                p-2 text-white hover:bg-emerald-500 transition-all delay-0
              "
          >
            <AttachMoneyOutlinedIcon sx={{ fontSize: 15 }} />
            <p>BUY NOW</p>
          </button>
        </div>
        {/* End pay fields */}
      </div>
      {/* End detail */}
    </div>
  );
};

export default DetailView;
