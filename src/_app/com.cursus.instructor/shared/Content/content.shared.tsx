import appConfig from '@/configs/appConfig.json';
import { Outlet, useLocation } from 'react-router';

import { INSTRUCTOR_SUBLIST } from '../../settings/setting.app';

const Content = (props: any) => {
  /**
   *
   * initialize
   *
   * **/
  const location = useLocation();
  const titleList = INSTRUCTOR_SUBLIST.find((item) => item.url === location.pathname)?.title;

  return (
    <div
      className="transition-all delay-0"
      style={{
        marginTop: props.subHeight,
        marginLeft: props.subWidth,
        width: `calc(100dvw - ${props.subWidth})`,
        minHeight: `calc(100dvh - ${props.subHeight})`,
        maxHeight: 'max',
      }}
    >
      <div className="w-full min-h-full max-h-max flex flex-col">
        {/* Content */}
        <div className="w-full min-h-[calc(100dvh-7rem)] max-h-max flex flex-col space-y-4 p-4">
          {/* Title */}
          <div className="w-full h-max text-xs text-slate-500 space-x-4">
            <div className="hover:text-emerald-600 hover:underline bg-gray-200 py-1 px-2 rounded-sm w-max h-max">
              {titleList}
            </div>
          </div>
          {/* End Title */}

          {/* Outlet */}
          <div className="w-full h-max">
            <Outlet />
          </div>
          {/* End Outlet */}
        </div>
        {/* End Content */}

        {/* Footer */}
        <div className="w-full h-[3.5rem] px-4">
          <div
            className="w-full h-full flex items-center text-xs border-t-[1px] text-slate-400
              
            "
            style={{
              borderColor: appConfig.admin.borderColor,
            }}
          >
            <p>Copyright © 2024 Cursus. All rights reserved.</p>
          </div>
        </div>
        {/* End Footer */}
      </div>
    </div>
  );
};

export default Content;
