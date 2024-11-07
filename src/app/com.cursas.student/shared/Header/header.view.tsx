// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

import logo from '@/assets/logo.png';
import SearchShared from '@/components/shared/student/SearchShared/search.shared';
import { useNavigate } from 'react-router';
import { STUDENT_URL } from '../../settings/setting.app';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/App';

const HeaderView = () => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const [useInfor, setUserInfor] = useState<any>(undefined);

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    const tempToken = localStorage.getItem('userInfor');

    if (tempToken) {
      setUserInfor(JSON.parse(tempToken));
    } else {
      setUserInfor(null);
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center xl:h-[5rem] h-[4rem] bg-white shadow-sm sticky top-0 z-10">
      {/* Fields */}
      <div className="w-[80rem] h-full flex items-center xl:space-x-5">
        {/* Logo */}
        <button className="w-max xl:h-max h-full">
          <img
            className="w-[10rem] h-[35px] xl:flex hidden"
            src={logo}
            onClick={() => navigate(STUDENT_URL + '/layout/')}
          />
          <div className="w-[4rem] h-full xl:hidden flex justify-center items-center text-gray-400 hover:text-emerald-600 transition-colors delay-0">
            <MenuOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
        </button>
        {/* End logo */}

        {/* Options fields */}
        <div className="xl:w-[calc(100%-11.25rem)] w-[calc(100%-4rem)] h-full flex xl:space-x-5 space-x-0">
          {/* Search fields */}
          <SearchShared />
          {/* End search fields */}

          {/* User fields */}
          <div className="w-max h-full xl:flex hidden justify-center items-center space-x-2">
            {/* <button className="w-[2rem] h-[2rem] text-gray-400 hover:text-emerald-600 transition-colors delay-0">
              <NotificationsNoneOutlinedIcon sx={{ fontSize: 30 }} />
            </button> */}
            {useInfor ? (
              <>
                <button
                  className="w-[2rem] h-[2rem] text-gray-400  hover:text-emerald-600 transition-colors delay-0"
                  onClick={() => navigate('/cursus-student/layout/shopping-cart')}
                >
                  <BookOutlinedIcon sx={{ fontSize: 30 }} />
                </button>

                <button
                  className="w-[2rem] h-[2rem] text-gray-400  hover:text-emerald-600 transition-colors delay-0"
                  onClick={() => navigate('/cursus-student/layout/shopping-cart')}
                >
                  <ReceiptOutlinedIcon sx={{ fontSize: 30 }} />
                </button>
              </>
            ) : (
              <></>
            )}

            <button
              className="w-[2rem] h-[2rem] text-gray-400  hover:text-emerald-600 transition-colors delay-0"
              onClick={() => navigate('/cursus-student/layout/shopping-cart')}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </button>

            {useInfor ? (
              <>
                <button
                  className="w-[2rem] h-[2rem] text-gray-400  hover:text-emerald-600 transition-colors delay-0"
                  onClick={() => navigate('/cursus-student/layout/profile')}
                >
                  <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />
                </button>
                <button
                  className="w-[2rem] h-[2rem] text-gray-400  hover:text-emerald-600 transition-colors delay-0
              hover:underline
            "
                  onClick={() => {
                    context.setTypeOfDialog('logout');
                    context.handleOpenDialog();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="w-[2rem] h-[2rem] text-gray-400  hover:text-emerald-600 transition-colors delay-0
              hover:underline
            "
                onClick={() => navigate(STUDENT_URL + '/login')}
              >
                Login
              </button>
            )}
          </div>
          {/* End user fields */}
        </div>
        {/* End option fields */}
      </div>
      {/* End fields */}
    </div>
  );
};

export default HeaderView;
