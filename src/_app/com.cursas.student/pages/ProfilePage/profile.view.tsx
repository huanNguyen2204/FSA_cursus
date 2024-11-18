import { apiUrl } from '@/api/api.url';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { CircularProgress, Stack } from '@mui/material';

const ProfileView = () => {
  /**
   *
   * states
   *
   * **/
  const [userDetail, setUserDetail] = useState<any>(undefined);
  const userInfor = localStorage.getItem('userInfor');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    const callAPI = async () => {
      if (userInfor) {
        const id = JSON.parse(userInfor).id;
        const url = apiUrl.accountUrl.id + `${id}`;
        const token = getTokenUtil();

        try {
          await axios
            .get(url, {
              headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                Authorization: token,
              },
            })
            .then((_res) => {
              if (_res.status === 200) {
                setUserDetail(_res.data.payload);
              }
            });
        } catch (error) {}
      }
    };

    callAPI();
  }, []);

  /**
   *
   * funcs
   *
   * **/
  const _onClickSetIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="w-full h-max flex flex-col space-y-4">
      {/* Title */}
      <p className="text-xl font-semibold">Profile</p>
      {/* End title */}

      {userDetail === undefined ? (
        <div className="w-full h-max flex justify-center items-center">
          <Stack sx={{ color: 'grey.500' }} spacing={5} direction="row">
            <CircularProgress color="inherit" />
          </Stack>
        </div>
      ) : (
        <div className="w-full h-max flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-5">
          {/* Avatar */}
          <div
            className="lg:w-1/4 w-full h-max bg-white flex justify-center items-center flex-col
          space-y-2 py-4
        "
          >
            <PersonIcon sx={{ fontSize: 60 }} />
            <p className="text-xl font-medium">{userDetail?.username}</p>
          </div>
          {/* End avatar */}

          {/* Details */}
          <div className="lg:w-3/4 w-full h-max bg-white px-4 pt-4 pb-20 flex flex-col space-y-3">
            {/* Elements */}
            <div className="w-full h-max flex flex-col">
              <label className="font-medium">#CodeID</label>
              <div className="w-full h-max flex">
                <input
                  className="w-full h-[35px] border-[1.5px] border-gray-200 px-2
                focus:ring-2 focus:ring-emerald-500 ring-offset-1
              "
                  type={isShowPassword ? 'text' : 'password'}
                  disabled
                  value={userDetail?.accountId}
                />
                <button
                  className="w-[35px] h-[35px] flex justify-center items-center"
                  onClick={_onClickSetIsShowPassword}
                >
                  <RemoveRedEyeOutlinedIcon />
                </button>
              </div>
            </div>
            {/* End elements */}

            {/* Elements */}
            <div className="w-full h-max flex flex-col">
              <label className="font-medium">Fullname</label>
              <input
                className="w-full h-[35px] border-[1.5px] border-gray-200 px-2
                focus:ring-2 focus:ring-emerald-500 ring-offset-1
              "
                disabled
                value={userDetail?.fullName}
              />
            </div>
            {/* End elements */}

            {/* Elements */}
            <div className="w-full h-max flex flex-col">
              <label className="font-medium">Email</label>
              <input
                className="w-full h-[35px] border-[1.5px] border-gray-200 px-2
                focus:ring-2 focus:ring-emerald-500 ring-offset-1
              "
                disabled
                value={userDetail?.email}
              />
            </div>
            {/* End elements */}

            {/* Elements */}
            {/* <div className="w-full h-max flex flex-col">
            <label className="font-medium">Password</label>
            <input
              className="w-full h-[35px] border-[1.5px] border-gray-200 px-2
                focus:ring-2 focus:ring-emerald-500 ring-offset-1
              "
            />
          </div> */}
            {/* End elements */}
          </div>
          {/* End details */}
        </div>
      )}
    </div>
  );
};

export default ProfileView;
