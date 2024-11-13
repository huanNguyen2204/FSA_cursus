import PersonIcon from '@mui/icons-material/Person';

const ProfileView = () => {
  return (
    <div className="w-full h-max flex flex-col space-y-4">
      {/* Title */}
      <p className="text-xl font-semibold">Profile</p>
      {/* End title */}

      <div className="w-full h-max flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-5">
        {/* Avatar */}
        <div
          className="lg:w-1/4 w-full h-max bg-white flex justify-center items-center flex-col
          space-y-2 py-4
        "
        >
          <PersonIcon sx={{ fontSize: 60 }} />
          <p className="text-xl font-medium">Huan Nguyen</p>
        </div>
        {/* End avatar */}

        {/* Details */}
        <div className="lg:w-3/4 w-full h-max bg-white px-4 pt-4 pb-20 flex flex-col space-y-3">
          {/* Elements */}
          <div className="w-full h-max flex flex-col">
            <label className="font-medium">Username</label>
            <input
              className="w-full h-[35px] border-[1.5px] border-gray-200 px-2
                focus:ring-2 focus:ring-emerald-500 ring-offset-1
              "
              disabled
            />
          </div>
          {/* End elements */}

          {/* Elements */}
          <div className="w-full h-max flex flex-col">
            <label className="font-medium">Fullname</label>
            <input
              className="w-full h-[35px] border-[1.5px] border-gray-200 px-2
                focus:ring-2 focus:ring-emerald-500 ring-offset-1
              "
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
    </div>
  );
};

export default ProfileView;
