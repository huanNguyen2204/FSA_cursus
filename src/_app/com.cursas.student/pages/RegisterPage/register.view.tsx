import shortLogo from '@/assets/logo.png';
import appConfig from '@/configs/appConfig.json';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { useNavigate } from 'react-router';
import { STUDENT_URL } from '../../settings/setting.app';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useContext, useState } from 'react';
import axios from 'axios';

import { apiUrl } from '@/api/api.url';
import { AppContext } from '@/App';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const RegisterView = () => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const [isShowPass, setIsShowPass] = useState('password');

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirPass] = useState('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   *
   * funcs
   *
   * **/
  const _onChangeValue = (e: any, type: string) => {
    e.preventDefault();

    switch (type) {
      case 'fullname':
        setFullname(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPass':
        setConfirPass(e.target.value);
        break;
    }
  };

  const _onClickChangeIsShowPass = () => {
    if (isShowPass === 'password') {
      setIsShowPass('text');
    } else {
      setIsShowPass('password');
    }
  };

  // submit register
  const _onClickSubmitRegister = async (e: any) => {
    /**
     *
     * prevent default of reload page
     *
     * **/
    e.preventDefault();

    setIsLoading(true);

    const data = {
      email,
      fullName: fullname,
      username,
      password,
      role: 'STUDENT',
    };

    /**
     *
     * catching error when pass != confPass
     *
     * **/
    if (password !== confirmPass) {
      context.handleOpenAlert();
      context.setTypeOfAlert('error');
      context.setTitleOfAlert('The password and confirm password not same');
      setIsLoading(false);
    } else if (!email.includes("@gmail.com")) {
      context.handleOpenAlert();
      context.setTypeOfAlert('error');
      context.setTitleOfAlert('The email must have @gmail.com');
      setIsLoading(false);
    } else {
      try {
        await axios.post(apiUrl.accountUrl.register, data);

        // set toastify
        context.handleOpenAlert();
        context.setTypeOfAlert('success');
        context.setTitleOfAlert('Create new account successful');
        
        navigate("/cursus-student/login")

        setIsLoading(false);
      } catch (error: any) {
        // set toastify
        context.handleOpenAlert();
        context.setTypeOfAlert('error');
        context.setTitleOfAlert(error.response.data.error.username);
      
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-[100dvw] h-[100dvh] flex justify-center py-10 px-2">
      {/* Main */}
      <div className="w-full items-center h-max flex flex-col space-y-2">
        {/* Back button */}
        <div className="w-full h-max"></div>
        <button
          className="w-max h-max flex space-x-1 items-center justify-center
          text-emerald-600 hover:text-emerald-500 hover:underline
        "
          onClick={() => navigate(STUDENT_URL + '/login')}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
          <p>Back to login</p>
        </button>
        {/* End back button */}

        {/* Form */}
        <form
          className="lg:w-[30rem] w-full h-max bg-white rounded-sm shadow-md px-5 py-10 flex flex-col items-center space-y-8"
          onSubmit={_onClickSubmitRegister}
        >
          {/* Logo */}
          <button type='button' className="w-[13rem]"
          onClick={() => navigate("/cursus-student/layout")}
          >
            <img className="pointer-events-none" src={shortLogo} alt="Cursus Online" />
          </button>
          {/* End logo */}

          {/* Username and password */}
          <div className="w-full h-max flex flex-col space-y-3">
            {/* Fullname */}
            <div className="w-full h-max flex flex-col ">
              <div className="w-full h-max flex items-center space-x-1 ">
                <BadgeOutlinedIcon sx={{ fontSize: 15 }} />
                <label className="font-medium text-md">Fullname</label>
              </div>
              <input
                disabled={isLoading}
                required
                className="w-full h-[35px] border-[2px] px-2 rounded-sm
              focus:ring-1 focus:ring-emerald-600
              "
                value={fullname}
                placeholder="Enter fullname"
                style={{
                  borderColor: appConfig.admin.borderColor,
                }}
                onChange={(e: any) => _onChangeValue(e, 'fullname')}
              />
            </div>
            {/* End fullname */}

            {/* Email */}
            <div className="w-full h-max flex-col">
              <div className="w-full h-max flex items-center space-x-1 ">
                <EmailOutlinedIcon sx={{ fontSize: 15 }} />
                <label className="font-medium text-md">Email</label>
              </div>
              <input
                className="w-full h-[35px] border-[2px] px-2 rounded-sm
              focus:ring-1 focus:ring-emerald-600
              "
                required
                value={email}
                onChange={(e: any) => _onChangeValue(e, 'email')}
                placeholder="Enter email"
                style={{
                  borderColor: appConfig.admin.borderColor,
                }}
              />
            </div>
            {/* End email */}

            {/* Username */}
            <div className="w-full h-max flex flex-col ">
              <div className="w-full h-max flex items-center space-x-1 ">
                <PersonOutlineOutlinedIcon sx={{ fontSize: 15 }} />
                <label className="font-medium text-md">Username</label>
              </div>
              <input
                disabled={isLoading}
                required
                className="w-full h-[35px] border-[2px] px-2 rounded-sm
              focus:ring-1 focus:ring-emerald-600
              "
                placeholder="Enter username"
                style={{
                  borderColor: appConfig.admin.borderColor,
                }}
                value={username}
                onChange={(e: any) => _onChangeValue(e, 'username')}
              />
            </div>
            {/* End username */}

            {/* Password */}
            <div className="w-full h-max flex flex-col ">
              <div className="w-full h-max flex items-center space-x-1">
                <HttpsOutlinedIcon sx={{ fontSize: 15 }} />
                <label className="font-medium text-md">Password</label>
              </div>
              <div className="w-full h-max flex">
                <input
                  disabled={isLoading}
                  required
                  className="w-[calc(100%-35px)] h-[35px] border-t-[2px] border-b-[2px] border-l-[2px] px-2
                  focus:ring-1 focus:ring-emerald-600
                  rounded-l-sm
                  rounded-r-none
                  "
                  type={isShowPass}
                  placeholder="Enter password"
                  style={{
                    borderColor: appConfig.admin.borderColor,
                  }}
                  value={password}
                  onChange={(e: any) => _onChangeValue(e, 'password')}
                />
                {/* Show hidden password */}
                <button
                  className="w-[35px] h-[35px] flex justify-center items-center 
                border-t-[2px] border-b-[2px] border-r-[2px] 
                rounded-r-sm
              "
                  type="button"
                  onClick={_onClickChangeIsShowPass}
                >
                  <VisibilityOutlinedIcon />
                </button>
                {/* End show hidden password */}
              </div>
            </div>
            {/* End password */}

            {/* Confirm pass */}
            <div className="w-full h-max flex flex-col ">
              <div className="w-full h-max flex items-center space-x-1 ">
                <label className="font-medium text-md">Confirm password</label>
              </div>
              <input
                disabled={isLoading}
                required
                className="w-full h-[35px] border-[2px] px-2 rounded-sm
              focus:ring-1 focus:ring-emerald-600
              "
                placeholder="Enter password"
                style={{
                  borderColor: appConfig.admin.borderColor,
                }}
                type="password"
                value={confirmPass}
                onChange={(e: any) => _onChangeValue(e, 'confirmPass')}
              />
            </div>
            {/* End confirm pass */}
          </div>
          {/* End username and password */}

          {/* Submit button */}
          <div className="w-full h-max flex justify-center flex-col space-y-2 items-center">
            <button
              className="w-[10rem] h-[35px] rounded-sm font-semibold flex justify-center items-center text-white hover:bg-emerald-400"
              type="submit"
              disabled={isLoading}
              style={{
                backgroundColor: isLoading ? '#22c55e' : '#059669',
              }}
            >
              {isLoading ? (
                <Stack sx={{ color: 'white' }} spacing={1} direction="row">
                  <CircularProgress size={20} color="inherit" />
                </Stack>
              ) : (
                <>Register</>
              )}
            </button>
          </div>
          {/* End submit */}
        </form>
        {/* End form */}
      </div>

      {/* End main */}
    </div>
  );
};

export default RegisterView;
