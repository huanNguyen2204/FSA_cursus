import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import logo from '@/assets/logo.png';
import { useNavigate } from 'react-router';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppContext } from '@/App';
import { Badge } from '@mui/material';
import { STUDENT_URL } from '@/_app/com.cursas.student/settings/setting.app';

export default function DrawerShared() {
  /**
   *
   * states
   *
   * **/
  const navigate = useNavigate();
  const context = React.useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const userInfor = localStorage.getItem('userInfor');

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="w-full h-[4rem] border-b-[1.5px] border-gray-400 p-3 flex justify-start items-center">
        <button onClick={() => navigate(STUDENT_URL + '/layout/')}>
          <img className="w-[10rem] h-[35px]" src={logo} />
        </button>
      </div>

      {userInfor ? (
        <>
          <div className="w-full h-max flex flex-col text-gray-500 border-b-[1.5px] border-gray-400">
            <div className="w-full h-[3rem] justify-center flex flex-col">
              <button
                className="text-left px-3 space-x-2 flex"
                onClick={() => navigate('/cursus-student/layout/profile')}
              >
                <PersonOutlineOutlinedIcon />
                <p className="truncate">Profile</p>
              </button>
            </div>
            <div className="w-full h-[3rem] justify-center flex flex-col">
              <button
                className="text-left px-3 space-x-2 flex"
                onClick={() => navigate('/cursus-student/layout/shopping-cart')}
              >
                <Badge badgeContent={context.badgeCart} color="success">
                  <ShoppingCartOutlinedIcon />
                </Badge>
                <p className="truncate">Shopping cart</p>
              </button>
            </div>
            <div className="w-full h-[3rem] justify-center flex flex-col">
              <button
                className="text-left px-3 space-x-2 flex"
                onClick={() => navigate('/cursus-student/layout/payment-history')}
              >
                <ReceiptOutlinedIcon />
                <p className="truncate">Payment historical</p>
              </button>
            </div>
            <div className="w-full h-[3rem] justify-center flex flex-col">
              <button
                className="text-left px-3 space-x-2 flex"
                onClick={() => navigate('/cursus-student/layout/my-course')}
              >
                <BookOutlinedIcon />
                <p className="truncate">My course</p>
              </button>
            </div>
          </div>

          <div className="w-full h-[3rem] justify-center flex text-gray-500  flex-col">
            <button
              className="text-left px-3 space-x-2 flex"
              onClick={() => {
                context.setTypeOfDialog('logout');
                context.handleOpenDialog();
              }}
            >
              <LogoutIcon />
              <p className="truncate">Logout</p>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-max flex flex-col text-gray-500 border-b-[1.5px] border-gray-400">
            <div className="w-full h-[3rem] justify-center flex flex-col">
              <button
                className="text-left px-3 space-x-2 flex"
                onClick={() => navigate('/cursus-student/layout/shopping-cart')}
              >
                <Badge badgeContent={context.badgeCart} color="success">
                  <ShoppingCartOutlinedIcon />
                </Badge>
                <p className="truncate">Shopping cart</p>
              </button>
            </div>
          </div>

          <div className="w-full h-[3rem] justify-center flex text-gray-500  flex-col">
            <button className="text-left px-3 space-x-2 flex" onClick={() => navigate(STUDENT_URL + '/login')}>
              <ExitToAppIcon />
              <p className="truncate">Login</p>
            </button>
          </div>
        </>
      )}
    </Box>
  );

  return (
    <div>
      <button className="w-full h-full flex justify-center items-center" onClick={toggleDrawer(true)}>
        <MenuOutlinedIcon sx={{ fontSize: 30 }} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
