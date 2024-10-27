import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';

const CategoriesFieldsView = (props: any) => {
  /**
   *
   * states
   *
   * **/
  const [isShowChild, setIsShowChild] = useState<boolean>(false);

  /**
   *
   * funcs
   *
   * **/
  const _onClickIsShow = () => {
    setIsShowChild(!isShowChild);
  };

  return (
    <div className="w-max h-max flex flex-col mb-1">
      {/* Parents */}
      <button className="w-max h-max flex items-center hover:underline text-base" onClick={_onClickIsShow}>
        <div
          className="w-max h-max text-emerald-600"
          style={{
            display: isShowChild ? 'none' : 'block',
          }}
        >
          <ArrowRightIcon sx={{ fontSize: 20 }} />
        </div>

        <div
          className="w-max h-max text-emerald-600"
          style={{
            display: isShowChild ? 'block' : 'none',
          }}
        >
          <ArrowDropDownIcon sx={{ fontSize: 20 }} />
        </div>

        <p>
          <span className='font-bold text-emerald-600'>#{props.id}</span>: {props.name}
        </p>
      </button>
      {/* End parents */}

      {/* Children */}
      <div
        className="ml-7 w-max h-max flex-col transition-all delay-75 ease-in-out duration-75"
        style={{
          display: isShowChild ? 'flex' : 'none',
        }}
      >
        {props.subCategoryList.map((item: any, index: any) => (
          <div key={index} className="w-max h-max flex items-center hover:underline">
            <ChevronRightIcon sx={{ fontSize: 16 }} />
            <p>
              <span className='font-bold'>#{item.id}</span>: {item.name}
            </p>
          </div>
        ))}
      </div>
      {/* End children */}
    </div>
  );
};

export default CategoriesFieldsView;
