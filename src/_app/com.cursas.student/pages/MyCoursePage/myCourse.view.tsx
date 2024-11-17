import { apiUrl } from '@/api/api.url';
import CartItemShared from '@/components/shared/student/CartItemShared/cartItem.shared';
import LoadingSkeletonShared from '@/components/shared/student/LoadingSkeletonShared/loadingSkeleton.shared';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

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

const MyCourseView = () => {
  /**
   *
   * states
   *
   * **/
  const [courseList, setCourseList] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    const userInfor = localStorage.getItem('userInfor');

    const getCourseBought = async () => {
      if (userInfor !== null) {
        setIsLoading(true);
        const userId = JSON.parse(userInfor).id;
        const token = getTokenUtil();
        const url = apiUrl.cartUrl.getAllCourseById + `/${String(userId)}`;

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
                setCourseList(_res.data.payload);
                setIsLoading(false);
              }
            });
        } catch (error) {
          setIsLoading(false);
        }
      }
    };

    getCourseBought();
  }, []);

  return (
    <div className="w-full h-max flex flex-col space-y-10">
      {/* Title */}
      <p className="text-xl font-semibold">My Course</p>
      {/* End title */}

      {/* Course fields */}
      <div className="w-full h-max grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4">
        {/* Elements */}
        {courseList?.length === 0 ? (
          <div className="w-full h-max text-gray-400 flex space-x-1">
            <Inventory2OutlinedIcon />
            <p className="text-base italic">You haven't any courses before.</p>
          </div>
        ) : (
          <>
            {courseList?.map((item: any, index: any) => (
              <React.Fragment key={index}>
                <CartItemShared {...item} />
              </React.Fragment>
            ))}
          </>
        )}
        {isLoading ? LoadingJSX.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>) : <></>}
        {/* End elements */}
      </div>
      {/* End course fields */}
    </div>
  );
};

export default MyCourseView;
