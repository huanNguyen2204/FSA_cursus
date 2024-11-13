import HeaderBadgeShared from '@/components/shared/instructor/HeaderBagde/headerBagde.shared';
import appConfig from '@/configs/appConfig.json';

import ViewCompactIcon from '@mui/icons-material/ViewCompact';

const Header = (props: any) => {
  return (
    <div
      className={`fixed left-[16rem] top-0 bg-white border-b-[1px] transition-all delay-0 flex justify-between pr-4`}
      style={{
        position: 'fixed',
        left: `${props.subWidth}`,
        width: `calc(100dvw - ${props.subWidth})`,
        height: props.subHeight,
        borderColor: appConfig.admin.borderColor,
      }}
    >
      {/* Hidden button */}
      <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center">
        <button className={`hover:text-black text-emerald-600 w-max h-max`} onClick={props.onClickForChangeSubWidth}>
          <ViewCompactIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
      {/* End Hidden */}

      {/* Info fields */}
      <div className='w-max h-full items-center flex space-x-6 text-xs text-emerald-600'>
        <HeaderBadgeShared />
        <button className='hover:underline'>
          Login / Logout
        </button>
      </div>
      {/* End info fields */}
    </div>
  );
};

export default Header;
