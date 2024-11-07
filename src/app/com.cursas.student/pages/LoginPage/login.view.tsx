import shortLogo from '@/assets/logo.png';
import appConfig from '@/configs/appConfig.json';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from 'react-router';
import { STUDENT_URL } from '../../settings/setting.app';
import { useContext, useState } from 'react';
import { apiUrl } from '@/db/api.url';
import axios from 'axios';
import { AppContext } from '@/App';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const LoginView = () => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isShowPassword, setIsShowPassword] = useState<string>('password');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   *
   * funcs
   *
   * **/
  const _onChangeFields = (e: any, type: string) => {
    e.preventDefault();

    switch (type) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  };

  const _onClickToChangeIsShowPassword = () => {
    if (isShowPassword === 'text') {
      setIsShowPassword('password');
    } else {
      setIsShowPassword('text');
    }
  };

  const _onClickSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      username,
      password,
    };

    /**
     *
     * call post from axios
     *
     * **/
    try {
      const res = await axios.post(apiUrl.accountUrl.login, data);

      if (res.data.payload.role !== 'STUDENT') {
        context.handleOpenAlert();
        context.setTypeOfAlert('error');
        context.setTitleOfAlert('This account is not for STUDENT');
      } else {
        const userInfor = res.data.payload;
        localStorage.setItem('userInfor', JSON.stringify(userInfor));
        context.handleOpenAlert();
        context.setTypeOfAlert('success');
        context.setTitleOfAlert(`Welcome, ${userInfor.fullName}`);
        navigate(STUDENT_URL + "/layout" + "/")
      }

      setIsLoading(false);
    } catch (error: any) {
      context.handleOpenAlert();
      context.setTypeOfAlert('error');
      context.setTitleOfAlert(error?.response?.data?.message === "Bad credentials" ? "Password is wrong" : error?.response?.data?.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[100dvw] h-[100dvh] flex justify-center py-10 px-2">
      {/* Main */}
      <div className="w-full items-center h-max flex flex-col space-y-3">
        {/* Title */}
        {/* End title */}

        {/* Form */}
        <form
          className="lg:w-[30rem] w-full h-max bg-white rounded-sm shadow-md px-5 py-10 flex flex-col items-center space-y-8"
          onSubmit={_onClickSubmit}
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
                value={username}
                onChange={(e: any) => _onChangeFields(e, 'username')}
                placeholder="Enter username"
                style={{
                  borderColor: appConfig.admin.borderColor,
                }}
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
                  className="w-[calc(100%-35px)] h-[35px] border-t-[2px] border-b-[2px] border-l-[2px] px-2
                  focus:ring-1 focus:ring-emerald-600
                  rounded-l-sm
                  rounded-r-none
                "
                  type={isShowPassword}
                  value={password}
                  onChange={(e: any) => _onChangeFields(e, 'password')}
                  placeholder="Enter password"
                  style={{
                    borderColor: appConfig.admin.borderColor,
                  }}
                />
                {/* Show hidden password */}
                <button
                  className="w-[35px] h-[35px] flex justify-center items-center 
                border-t-[2px] border-b-[2px] border-r-[2px] 
                rounded-r-sm
              "
                  type="button"
                  onClick={_onClickToChangeIsShowPassword}
                >
                  <VisibilityOutlinedIcon />
                </button>
                {/* End show hidden password */}
              </div>
            </div>
            {/* End password */}
          </div>
          {/* End username and password */}

          {/* Submit button */}
          <div className="w-full h-max flex justify-center flex-col space-y-2 items-center">
            <button className="text-emerald-600 hover:underline" onClick={() => navigate(STUDENT_URL + '/register')}
                type='button'
              >
              Register account
            </button>
            <button
              className="w-[10rem] h-[35px] flex justify-center items-center rounded-sm font-semibold text-white hover:bg-emerald-400"
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
                <>Login</>
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

export default LoginView;
