import { Fragment } from 'react/jsx-runtime';
import appConfig from '@/configs/appConfig.json';

import { NavbarModel } from '@/models/navbar.model';

import logo from '@/assets/logo.png';
import shortLogo from '@/assets/shortLogo.png';

import ButtonNavbarShared from '@/components/shared/instructor/ButtonNavbar/buttonNavbar.shared';

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonIcon from '@mui/icons-material/Person';

import { INSTRUCTOR_SUBLIST } from '../../settings/setting.app';
import { useNavigate } from 'react-router';

const NavBar = (props: any) => {
  /**
   *
   * initialize data for navbarList at first
   *
   * **/
  const navbarList: NavbarModel[] = [
    {
      url: INSTRUCTOR_SUBLIST[4].url,
      icon: <PersonIcon sx={{ fontSize: 20 }} />,
      text: 'Information',
    },
    {
      url: INSTRUCTOR_SUBLIST[0].url,
      icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 20 }} />,
      text: 'Dashboards',
    },
    {
      url: INSTRUCTOR_SUBLIST[1].url,
      icon: <BookOutlinedIcon sx={{ fontSize: 20 }} />,
      text: 'Manage Course',
    },
    {
      url: INSTRUCTOR_SUBLIST[2].url,
      icon: <AnalyticsOutlinedIcon sx={{ fontSize: 20 }} />,
      text: 'Earning Analytics',
    },
    {
      url: INSTRUCTOR_SUBLIST[3].url,
      icon: <ReceiptOutlinedIcon sx={{ fontSize: 20 }} />,
      text: 'Payout History',
    },
  ];

  /**
   *
   * states
   *
   * **/
  const navigate = useNavigate();

  /**
   *
   * funcs
   *
   * **/
  const _onClickNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <div
      className="h-[100dvh] bg-white fixed left-0 top-0 border-r-[1px] transition-all delay-0 flex flex-col"
      style={{
        width: props.subWidth,
        borderColor: appConfig.admin.borderColor,
      }}
    >
      {/* Logo */}
      <div
        className="w-full h-[3.5rem] flex justify-center items-center transition-all delay-0"
        style={{
          justifyContent: props.subWidth === '16rem' ? 'normal' : 'center',
          paddingLeft: props.subWidth === '16rem' ? '1rem' : '0',
          paddingRight: props.subWidth === '16rem' ? '1rem' : '0',
        }}
      >
        {props.subWidth === '16rem' ? (
          <button className="w-[11rem] h-max">
            <img className="pointer-events-none" src={logo} />
          </button>
        ) : (
          <button className="w-[2rem] h-[2rem]">
            <img className="pointer-events-none" src={shortLogo} />
          </button>
        )}
      </div>
      {/* End logo */}

      {/* Menu list */}
      <div
        className="w-full h-max flex flex-col transition-all delay-0"
        style={{
          width: props.subWidth,
        }}
      >
        {/* Option */}
        {navbarList.map((item, index) => (
          <Fragment key={index}>
            {props.subWidth === '16rem' ? (
              <button
                className="
                w-full min-h-[3.5rem] max-h-max flex hover:bg-[#e5e5e5] transition-all delay-0 
                text-black hover:text-emerald-600 hover:underline
                border-r-[1px] border-[#e5e5e5] hover:border-white"
                onClick={() => _onClickNavigate(item.url)}
              >
                {/* Icon */}
                <div className="w-[3.5rem] h-full flex justify-center items-center">{item.icon}</div>
                {/* End icon */}

                {/* Text element */}
                <div
                  className="w-[calc(100%-3.5rem)] min-h-[3.5rem] max-h-max items-center"
                  style={{
                    display: props.subWidth === '16rem' ? 'flex' : 'none',
                  }}
                >
                  <p className="text-sm">{item.text}</p>
                </div>
                {/* End text element */}
              </button>
            ) : (
              <ButtonNavbarShared {...item} _onClickNavigate={_onClickNavigate} />
            )}
          </Fragment>
        ))}
        {/* End option */}
      </div>
      {/* End menu list */}
    </div>
  );
};

export default NavBar;
