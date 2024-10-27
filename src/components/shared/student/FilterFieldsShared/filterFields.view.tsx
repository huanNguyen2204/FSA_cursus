import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FilterFieldsView = (props: any) => {
  return (
    <div
      className="md:w-[20rem] w-[100dvw] h-[100dvh] bg-white
      left-0 top-0 z-10 p-4 opacity-95 drop-shadow-md fixed
    "
      style={{
        display: props.isOpenFilter ? 'block' : 'none',
      }}
    >
      <div className="w-full h-full flex flex-col space-y-10">
        {/* Title and close */}
        <div className="w-full h-[2rem] flex items-center justify-between">
          <p className="text-xl font-medium">Filter</p>
          <button className="w-[2rem] h-full bg-gray-300 hover:text-white" onClick={props._onClickOpenFilter}>
            <CloseOutlinedIcon />
          </button>
        </div>
        {/* End title and close button */}

        {/* Filter fields */}
        <div
          className="w-full h-max flex flex-col 
        "
        >
          <div className="w-full h-max border-b-[1px] border-gray-400 pb-4 space-y-4">
            <div className="text-base">Category</div>
            <div className="text-base">Price</div>
          </div>

          {/* Submit */}
          <div className="w-full h-max mt-4 flex space-x-2 justify-end">
            <button
              className="bg-gray-300 text-black px-2 py-1 hover:bg-gray-200
            items-center space-x-1 flex
          "
            >
              <RefreshOutlinedIcon sx={{ fontSize: 15 }} />
              <p>Reset</p>
            </button>
            <button
              className="bg-emerald-600 text-white hover:bg-emerald-500 px-2 py-1
            items-center space-x-1 flex
            "
            >
              <FilterAltIcon sx={{ fontSize: 15 }} />
              <p>Apply</p>
            </button>
          </div>
          {/* End submit */}
        </div>
        {/* End filter fields */}
      </div>
    </div>
  );
};

export default FilterFieldsView;
