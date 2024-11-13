import { AppContext } from '@/App';
import js from '@/assets/js.png';
import { apiUrl } from '@/api/api.url';
import getAddToCartUtil from '@/utils/shared/getAddToCartUtil';
import getCheckCourseToCartUtil from '@/utils/shared/getCheckCourseToCartUtil';
import getTokenUtil from '@/utils/shared/getTokenUtil';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { CircularProgress, Stack } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailView = () => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);

  const { courseId } = useParams();
  const [courseDetail, setCourseDetail] = useState<any>(undefined);
  const [isAvaliable, setIsAvaliable] = useState<any | boolean>(undefined);


  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    // initialize
    const url = apiUrl.courseUrl.detail + courseId;
    const userInfor = localStorage.getItem('userInfor');

    // call to take detail of course
    const callDetailAPI = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
        });
        setCourseDetail(res.data.payload);
      } catch (error) {}
    };

    // check course available for this account
    const checkCourse = async () => {
      if (userInfor !== null) {
        const url = getCheckCourseToCartUtil(String(courseId), String(JSON.parse(userInfor).id));
        const token = getTokenUtil();

        try {
          const res = await axios.get(url, {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: token,
            },
          });

          if (res.data?.message !== null) {
            setIsAvaliable(false);
          } else {
            setIsAvaliable(true);
          }
        } catch (error) {}
      } else {
        setIsAvaliable(false)
      }
    };

    callDetailAPI();
    checkCourse();
  }, []);

  /**
   * 
   * funcs
   * 
   * **/
  const _onClickAddToCart = async () => {
    context.setTypeOfDialog('loading');
    context.handleOpenDialog();

    try {
      const userInfor = localStorage.getItem('userInfor');

      if (userInfor !== null) {
        const url = getAddToCartUtil(String(courseId), String(JSON.parse(userInfor).id));
        const token = getTokenUtil();

        try {
          const res = await axios.post(url, {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: token,
            },
          });

          if (res.status === 200) {
            setIsAvaliable(true);
            context.handleOpenAlert();

            // Edit item into the cart
            context.setBadgeCart(context.badgeCart + 1)
            context.setListOfCart((prev: any) => [
              ...prev,
              courseDetail
            ])            
            context.setTypeOfAlert('success');
            context.setTitleOfAlert('This course was added to cart');
            context.handleCloseDialog();
            // navigate(-1)
          } else {
            setIsAvaliable(false);
            context.handleOpenAlert();
            context.setTypeOfAlert('success');
            context.setTitleOfAlert('Add false');
            context.handleCloseDialog();
          }
        } catch (error) {}
      }
    } catch (error) {
      
    }
  }

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
          {isAvaliable === undefined ? (
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
              <CircularProgress color="inherit" />
            </Stack>
          ) : isAvaliable === true ? (
            <div className='w-max h-max text-lg text-emerald-600 font-semibold'>
              <p>This course avaliable in your cart</p>
            </div>
          ) : (
            <>
              <button
                className="
                flex items-center space-x-1 text-gray-500 border-[1.5px] border-gray-500
                p-2 hover:text-white hover:bg-gray-500 transition-all delay-0
              "
              onClick={_onClickAddToCart}
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
            </>
          )}
        </div>
        {/* End pay fields */}
      </div>
      {/* End detail */}
    </div>
  );
};

export default DetailView;
