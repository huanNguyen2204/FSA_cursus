import CartItemShared from '@/components/shared/student/CartItemShared/cartItem.shared';
import FilterCourseShared from '@/components/shared/student/FilterCourseShared/filterCourse.shared';
import FilterFieldsShared from '@/components/shared/student/FilterFieldsShared/filterFields.shared';
import LoadingSkeletonShared from '@/components/shared/student/LoadingSkeletonShared/loadingSkeleton.shared';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const LoadingJSX = [
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />
];


const HomeView = () => {
  /**
   *
   * state
   *
   * **/
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [courseList, setCourseList] = useState<null | any[]>(null);
  const [metaData, setMetaData] = useState<null | any>(null);

  /**
   *
   * funcs
   *
   * **/
  const _onClickOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const _onClickPlusCurrentPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    setIsLoading(true);
    const url = import.meta.env.VITE_DB + `/api/courses/all?currentPage=${currentPage}&size=12`;

    try {
      const callAPI = async () => {
        const res = await axios.get(url);

        if (metaData === null) {
          setMetaData(res.data.metadata);
        }

        if (courseList === null) {
          setCourseList(res.data.payload);
          setIsLoading(false);
        } else {
          setCourseList((prev: any) => [...prev, ...res.data.payload]);
          setIsLoading(false);
        }
      };

      callAPI();
    } catch (error: any) {}
  }, [currentPage]);

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
          <p className="text-xl font-semibold">List of courses</p>
          <div className="w-full h-max grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4">
            {/* Elements */}
            {courseList?.map((item, index) => (
              <React.Fragment key={index}>
                <CartItemShared {...item} />
              </React.Fragment>
            ))}

            {isLoading ? LoadingJSX.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>) : <></>}
            {/* End elements */}
          </div>
          {/* End card list */}
        </div>

        {/* View more button */}
        {currentPage === metaData?.totalPages ? (
          <></>
        ) : (
          <button
            className="w-max h-max text-center flex justify-center items-center space-x-2 hover:underline hover:text-emerald-600"
            onClick={_onClickPlusCurrentPage}
          >
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 13 }} />
            <p>View more course</p>
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 13 }} />
          </button>
        )}

        {/* End view more */}
      </div>
      {/* End main screen */}
    </>
  );
};

export default HomeView;
