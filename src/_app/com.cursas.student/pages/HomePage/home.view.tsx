import { AppContext } from '@/App';
import CartItemShared from '@/components/shared/student/CartItemShared/cartItem.shared';
import FilterCourseShared from '@/components/shared/student/FilterCourseShared/filterCourse.shared';
import FilterFieldsShared from '@/components/shared/student/FilterFieldsShared/filterFields.shared';
import LoadingSkeletonShared from '@/components/shared/student/LoadingSkeletonShared/loadingSkeleton.shared';
import getFilterUtil from '@/utils/shared/getFilterCourse';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';

const LoadingJSX = [
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
  <LoadingSkeletonShared />,
];

const HomeView = () => {
  /**
   *
   * state
   *
   * **/
  const context = useContext(AppContext);

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
        if (context.filter.category !== 0 || context.filter.courseName !== '') {
          const token = getTokenUtil();
          const url = getFilterUtil(currentPage);

          const data = {
            categoryId: context.filter.category,
            name: context.filter.courseName,
          };

          await axios
            .post(url, data, {
              headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                Authorization: token,
              },
            })
            .then((_res) => {
              if (_res.status === 200) {
                if (_res.data.payload.length !== 0) {
                  setCourseList(_res.data.payload);
                  setMetaData(_res.data.metadata);
                }
                setIsLoading(false);
              }
            });
        } else {
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
        }
      };

      callAPI();
    } catch (error: any) {}
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    setCurrentPage(1);

    try {
      const callAPI = async () => {
        if (context.filter.category !== 0 || context.filter.courseName !== '') {
          const token = getTokenUtil();
          const url = getFilterUtil(currentPage);

          const data = {
            categoryId: context.filter.category,
            name: context.filter.courseName,
          };

          await axios
            .post(url, data, {
              headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                Authorization: token,
              },
            })
            .then((_res) => {
              if (_res.status === 200) {
                setCourseList(_res.data.payload);
                setMetaData(_res.data.metadata);
                setIsLoading(false);
              }
            });
        } else {
          const url = import.meta.env.VITE_DB + `/api/courses/all?currentPage=${currentPage}&size=12`;
          const res = await axios.get(url);

          setMetaData(res.data.metadata);

          if (courseList === null) {
            setCourseList(res.data.payload);
            setIsLoading(false);
          } else {
            setCourseList(res.data.payload);
            setIsLoading(false);
          }
          setIsLoading(false);
        }
      };

      callAPI();
    } catch (error) {}
  }, [context.filter]);

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
        <div className="w-full h-max flex space-x-3">
          <FilterCourseShared {...filterProps} />
          <button
            className="bg-gray-300 text-black px-2 py-0.5 hover:bg-gray-200
            items-center space-x-1 flex
          "
            onClick={() => {
              window.location.reload()
            }}
          >
            <RefreshOutlinedIcon sx={{ fontSize: 15 }} />
            <p>Reset</p>
          </button>
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
        {currentPage >= metaData?.totalPages ? (
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
