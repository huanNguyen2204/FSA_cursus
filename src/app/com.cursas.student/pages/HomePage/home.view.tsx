import CartItemShared from '@/components/shared/student/CartItemShared/cartItem.shared';
import FilterCourseShared from '@/components/shared/student/FilterCourseShared/filterCourse.shared';
import FilterFieldsShared from '@/components/shared/student/FilterFieldsShared/filterFields.shared';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useState } from 'react';

const HomeView = () => {
  /**
   *
   * state
   *
   * **/
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  /**
   *
   * funcs
   *
   * **/
  const _onClickOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
    console.log(isOpenFilter);
  };

  /**
   *
   * props
   *
   * **/
  const filterProps = {
    _onClickOpenFilter,
  };

  const filterFieldsProps = {
    isOpenFilter,
    _onClickOpenFilter,
  };

  return (
    <>
      {/* Filter fields */}
      <FilterFieldsShared {...filterFieldsProps} />
      {/* End filter fields */}

      {/* Main screen */}
      <div className="w-full h-max flex flex-col space-y-10 items-center">
        {/* Filter */}
        <div className="w-full h-max">
          <FilterCourseShared {...filterProps} />
        </div>
        {/* End filter */}

        {/* Card list */}
        <div className="w-full h-max flex flex-col space-y-4">
          <p className='text-xl font-semibold'>List of courses</p>
          <div className="w-full h-max grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4">
            {/* Elements */}
            <CartItemShared />
            <CartItemShared />
            <CartItemShared />
            <CartItemShared />
            <CartItemShared />
            <CartItemShared />
            <CartItemShared />
            {/* End elements */}
          </div>
          {/* End card list */}
        </div>

        {/* View more button */}
        <button className="w-max h-max text-center flex justify-center items-center space-x-2 hover:underline hover:text-emerald-600">
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 13 }} />
          <p>View more course</p>
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 13 }} />
        </button>
        {/* End view more */}
      </div>
      {/* End main screen */}
    </>
  );
};

export default HomeView;
