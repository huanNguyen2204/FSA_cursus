import shortLogo from '@/assets/logo.png';
import appConfig from "@/configs/appConfig.json"

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

const LoginView = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex justify-center py-20 px-2">
      {/* Form */}
      <form className="w-[30rem] h-max bg-white rounded-sm shadow-sm px-5 py-10 flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="w-[13rem]">
          <img className="pointer-events-none" src={shortLogo} alt="Cursus Online" />
        </div>
        {/* End logo */}

        {/* Username and password */}
        <div className="w-full h-max flex flex-col space-y-3">
          {/* Username */}
          <div className="w-full h-max flex flex-col ">
            <div className="w-full h-max flex items-center space-x-1 ">
              <PersonOutlineOutlinedIcon sx={{ fontSize: 15 }} />
              <label className='font-medium text-md'>Username ok</label>
            </div>
            <input 
              className='w-full h-[35px] border-[2px] px-2 rounded-sm
              focus:ring-1 focus:ring-emerald-600
              '
              placeholder='Enter username'
              style={{
                borderColor: appConfig.admin.borderColor
              }}
            />
          </div>
          {/* End username */}

          {/* Password */}
          <div className="w-full h-max flex flex-col ">
            <div className="w-full h-max flex items-center space-x-1">
              <HttpsOutlinedIcon sx={{ fontSize: 15 }} />
              <label className='font-medium text-md'>Password</label>
            </div>
            <input 
              className='w-full h-[35px] border-[2px] px-2 rounded-sm
              focus:ring-1 focus:ring-emerald-600
              '
              placeholder='Enter password'
              style={{
                borderColor: appConfig.admin.borderColor
              }}
            />
          </div>
          {/* End password */}
        </div>
        {/* End username and password */}

        {/* Submit button */}
        <div className='w-full h-max flex justify-center'>
          <button className='w-[10rem] h-[35px] rounded-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-400'>
            Login
          </button>
        </div>
        {/* End submit */}
      </form>
      {/* End form */}
    </div>
  );
};

export default LoginView;
