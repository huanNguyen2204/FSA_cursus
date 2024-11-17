import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import React, { useContext, useEffect, useState } from 'react';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import axios from 'axios';
import { apiUrl } from '@/api/api.url';
import { AppContext } from '@/App';

const FilterFieldsView = (props: any) => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);
  const [categoryList, setCategoryList] = useState<any>(undefined);
  const [defaultChoose, setDefaultChoose] = useState<number>(0);

  /**
   *
   * funcs
   *
   * **/

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    const callCategoryList = async () => {
      const token = getTokenUtil();
      const url = apiUrl.categoryUrl.getAll;

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
            setCategoryList(_res.data.payload);
          }
        });
    };

    callCategoryList();
  }, []);

  return (
    <div
      className="md:w-[20rem] w-[100dvw] h-[100dvh] bg-white
      left-0 top-0 z-10 p-4 opacity-95 drop-shadow-md fixed  overflow-y-auto
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
          <div className="w-full h-max border-b-[1px] border-gray-400 pb-4 space-y-8">
            {/* Category */}
            <div className="text-base">
              <p className="font-medium italic underline">Category</p>

              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={defaultChoose}
                  onChange={(e: any) => {
                    e.preventDefault();
                    setDefaultChoose(e.target.value);
                  }}
                >
                  {categoryList?.map((item: any, index: any) => (
                    <React.Fragment key={index}>
                      <FormControlLabel
                        className="hover:text-emerald-600 transition-all delay-0 hover:underline"
                        value={item.categoryId}
                        control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 17 } }} color="success" />}
                        label={<p className="text-sm ">{item.categoryName}</p>}
                      />
                    </React.Fragment>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            {/* Price */}
          </div>

          {/* Submit */}
          <div className="w-full h-max mt-4 flex space-x-2 justify-end">

            <button
              className="bg-emerald-600 text-white hover:bg-emerald-500 px-2 py-1
            items-center space-x-1 flex
            "
              onClick={() => {
                context.setFilter((prev: any) => {
                  return {
                    ...prev,
                    category: defaultChoose,
                  };
                });
              }}
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
