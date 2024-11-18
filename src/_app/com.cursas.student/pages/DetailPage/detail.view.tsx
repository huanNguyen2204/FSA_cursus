import { AppContext } from '@/App';
import defaultCourse from '@/assets/default-course.png';
import { apiUrl } from '@/api/api.url';
import getAddToCartUtil from '@/utils/shared/getAddToCartUtil';
import getCheckCourseToCartUtil from '@/utils/shared/getCheckCourseToCartUtil';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PersonIcon from '@mui/icons-material/Person';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import { CircularProgress, Rating, Skeleton, Stack } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import SearchOffIcon from '@mui/icons-material/SearchOff';
import { STUDENT_URL } from '../../settings/setting.app';

import parse from 'html-react-parser';
import { KeyboardDoubleArrowDownOutlined } from '@mui/icons-material';

const DetailView = (props: any) => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const { courseId } = useParams();
  const [courseDetail, setCourseDetail] = useState<any>(undefined);
  const [isAvaliable, setIsAvaliable] = useState<any | boolean>(undefined);
  const [founded, setFounded] = useState<any>(undefined);
  const [isHasFeedback, setIsHasFeedback] = useState<any>(undefined);

  const [feedbackList, setFeedbackList] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [metaData, setMetadata] = useState<any>(null);
  const [isLoadFeedback, setIsLoadFeedback] = useState<any>(undefined);

  const userInfor = localStorage.getItem('userInfor');

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    // initialize
    const url = apiUrl.courseUrl.detail + courseId;
    const userInfor = localStorage.getItem('userInfor');

    // call to take detail of course
    const callDetailAPI = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
        });
        setCourseDetail(res.data.payload);
        setFounded(true);
      } catch (error) {
        setFounded(false);
      }
    };

    // check course available for this account
    const checkCourse = async () => {
      if (userInfor !== null) {
        const url = getCheckCourseToCartUtil(String(courseId), String(JSON.parse(userInfor).id));
        const token = getTokenUtil();

        try {
          const res = await axios.get(url, {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: token,
            },
          });

          if (res.data?.message !== null) {
            setIsAvaliable(false);
          } else {
            setIsAvaliable(true);
          }
        } catch (error) {}
      } else {
        setIsAvaliable(false);
      }
    };

    // check course has feedback
    const checkHasFeedback = async () => {
      if (userInfor !== null) {
        const url = apiUrl.feedbackUrl.already;
        const userId = JSON.parse(userInfor).id;
        const token = getTokenUtil();
        const data = {
          accountId: userId,
          courseId: courseId,
        };

        try {
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
                setIsHasFeedback(_res.data.payload);
              }
            });
        } catch (error) {}
      } else {
        setIsHasFeedback(false);
      }
    };

    callDetailAPI();
    checkCourse();
    checkHasFeedback();
  }, []);

  useEffect(() => {
    setIsLoadFeedback(true);
    const callAPI = async () => {
      const url = apiUrl.feedbackUrl.feedbackByCourseId + `/${courseId}?currentPage=${currentPage}&size=5`;
      const token = getTokenUtil();
      const res = await axios.get(url, {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });

      if (metaData === null) {
        setMetadata(res.data.metadata);
      }

      if (feedbackList === null) {
        setFeedbackList(res.data.payload);
        setIsLoadFeedback(false);
      } else {
        setFeedbackList((prev: any) => [...prev, ...res.data.payload]);
        setIsLoadFeedback(false);
      }

      setIsLoadFeedback(false);
    };

    callAPI();
  }, [currentPage]);

  /**
   *
   * funcs
   *
   * **/
  const _onClickAddToCart = async () => {
    context.setTypeOfDialog('loading');
    context.handleOpenDialog();

    try {
      const userInfor = localStorage.getItem('userInfor');

      if (userInfor !== null) {
        const url = getAddToCartUtil(String(courseId), String(JSON.parse(userInfor).id));
        const token = getTokenUtil();

        try {
          const res = await axios.post(url, {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: token,
            },
          });

          if (res.status === 200) {
            setIsAvaliable(true);
            context.handleOpenAlert();

            // Edit item into the cart
            context.setBadgeCart(context.badgeCart + 1);
            context.setListOfCart((prev: any) => [...prev, courseDetail]);
            context.setTypeOfAlert('success');
            context.setTitleOfAlert('This course was added to cart');
            context.handleCloseDialog();
            // navigate(-1)
          } else {
            setIsAvaliable(false);
            context.handleOpenAlert();
            context.setTypeOfAlert('success');
            context.setTitleOfAlert('Add false');
            context.handleCloseDialog();
          }
        } catch (error) {}
      }
    } catch (error) {}
  };

  const _onClickPlusCurrentPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  /**
   *
   * JSX
   *
   * **/
  const LoadingJSX = () => (
    <div className="w-full h-max flex flex-col space-y-3">
      <Skeleton variant="rectangular" height={70} />
      <Skeleton variant="rectangular" height={70} />
      <Skeleton variant="rectangular" height={70} />
    </div>
  );

  return (
    <>
      {founded === undefined ? (
        <Stack sx={{ color: 'grey.500' }} spacing={5} direction="row">
          <CircularProgress color="inherit" />
        </Stack>
      ) : founded === true ? (
        <div className="w-full h-max flex flex-col space-y-7">
          {/* Detail fields */}
          <div
            className="w-full h-max flex bg-white p-4 
      md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4
      shadow-md
    "
          >
            {/* Img fields */}
            <div className="md:w-2/6 h-full">
              <img className="w-full" src={courseDetail?.image ? courseDetail?.image : defaultCourse} />
            </div>
            {/* End img */}

            {/* Detail fields */}
            <div className="md:w-4/6 h-full flex flex-col space-y-8">
              {/* Top */}
              <div className="w-full h-max flex flex-col space-y-2">
                <p className="text-3xl font-bold">{courseDetail?.name}</p>
                <p className="text-xl text-gray-500">
                  {courseDetail?.categories?.map((item: any, index: any) => (
                    <React.Fragment key={index}>
                      {index === courseDetail?.categories?.length - 1 ? (
                        <>{item?.categoryName}</>
                      ) : (
                        <>{item?.categoryName}, </>
                      )}
                    </React.Fragment>
                  ))}
                </p>
                <p className="text-2xl font-semibold">${courseDetail?.price}</p>
              </div>
              {/* End top */}

              {/* Bottom */}
              <div className="w-full h-max flex flex-col space-y-3">
                <div className="w-full h-max flex flex-col">
                  <p className="text-lg font-bold text-gray-400">INSTRUCTOR</p>
                  <p className="font-bold text-base">{courseDetail?.account?.fullName}</p>
                </div>

                <div className="w-full h-max flex flex-col">
                  <p className="text-lg font-bold text-gray-400">SUMARY</p>
                  <p>{courseDetail?.summary}</p>
                </div>

                <div className="w-full h-max flex flex-col">
                  <p className="text-lg font-bold text-gray-400">DESCRIPTION</p>
                  {parse(courseDetail?.description)}
                </div>

                <div className="w-full h-max flex flex-col">
                  <p className="text-lg font-bold text-gray-400">DURATION</p>
                  <p className="font-semibold">{courseDetail?.totalDuration} hrs</p>
                </div>
              </div>
              {/* End bottom */}

              {/* Pay fields */}
              {userInfor === null ? (
                <p className='text-lg font-semibold underline italic text-gray-400'>Please login for "Add to Cart"</p>
              ) : (
                <div className="w-full h-max flex space-x-3">
                  {isAvaliable === undefined || props?.hasBougth === undefined ? (
                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                      <CircularProgress color="inherit" />
                    </Stack>
                  ) : !props?.hasBougth ? (
                    isAvaliable === true ? (
                      <div className="w-max h-max text-lg text-emerald-600 font-semibold">
                        <p>This course avaliable in your cart</p>
                      </div>
                    ) : (
                      <>
                        <button
                          className="
                flex items-center space-x-1 text-gray-500 border-[1.5px] border-gray-500
                p-2 hover:text-white hover:bg-gray-500 transition-all delay-0
              "
                          onClick={_onClickAddToCart}
                        >
                          <AddShoppingCartIcon sx={{ fontSize: 15 }} />
                          <p>Add to cart</p>
                        </button>

                        <button
                          className="
                flex items-center bg-emerald-600
                p-2 text-white hover:bg-emerald-500 transition-all delay-0
              "       
                        onClick={() => {
                          context.setTypeOfDialog("buynow")
                          context.handleParamsDialog({
                            courseId: courseId,
                            courseName: courseDetail?.name
                          })
                          context.handleOpenDialog()
                        }}
                        >
                          <AttachMoneyOutlinedIcon sx={{ fontSize: 15 }} />
                          <p>BUY NOW</p>
                        </button>
                      </>
                    )
                  ) : (
                    <>
                      <button
                        className="
                flex items-center bg-gray-600 space-x-1
                p-2 text-white hover:bg-gray-500 transition-all delay-0
              "
                        onClick={() => {
                          navigate(`${STUDENT_URL}/layout/learn/${String(courseId)}`);
                        }}
                      >
                        <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: 20 }} />
                        <p>Learn course</p>
                      </button>

                      {isHasFeedback === undefined ? (
                        <Stack sx={{ color: 'grey.500' }} spacing={5} direction="row">
                          <CircularProgress color="inherit" />
                        </Stack>
                      ) : (
                        <button
                          className={`
                      flex items-center space-x-1 text-amber-500 border-[1.5px] border-amber-500
                      p-2 transition-all delay-0
                      ${isHasFeedback ? 'bg-amber-50' : 'hover:text-white hover:bg-amber-500'}
                    `}
                          disabled={isHasFeedback}
                          onClick={() => {
                            context.setTypeOfDialog('feedback');
                            context.handleParamsDialog({ courseId: courseId, setIsHasFeedback: setIsHasFeedback });
                            context.handleOpenDialog();
                          }}
                        >
                          <ModeCommentOutlinedIcon sx={{ fontSize: 20 }} />
                          <p>{isHasFeedback ? 'All ready feedback this course' : 'Feedback'}</p>
                        </button>
                      )}
                    </>
                  )}
                </div>
              )}
              {/* End pay fields */}
            </div>
            {/* End detail */}
          </div>
          {/* End detail fields */}

          {/* Feedback fields */}
          <div className="w-full h-max flex flex-col space-y-5">
            <p className="text-lg font-semibold">Feedback</p>

            <div className="w-full h-max flex flex-col space-y-3">
              {feedbackList?.length === 0 ?
              <p className='text-gray-400'>No feedback in this course yet.</p>
              :
              feedbackList?.map((item: any, index: any) => (
                <div key={index} className="w-full h-max p-3 bg-white flex flex-col space-y-3">
                  {/* User */}
                  <div className="w-max h-max flex items-center space-x-3">
                    <div className="w-max h-max flex space-x-1 items-center">
                      <PersonIcon sx={{ fontSize: 20 }} />
                      <p className="text-base">{item?.accountId?.fullName}</p>
                      <Rating sx={{ fontSize: 20 }} readOnly value={item?.rating}></Rating>
                    </div>
                  </div>
                  {/* End user */}

                  {/* Description */}
                  <div className="w-full h-max">
                    <p>{item?.description}</p>
                  </div>
                  {/* End description */}
                </div>
              ))}
              {isLoadFeedback ? <LoadingJSX /> : <></>}
            </div>
          </div>
          {/* End feedback fields */}

          {currentPage >= metaData?.totalPages ? (
            <></>
          ) : (
            <div className="w-full h-max flex justify-center items-center">
              <button
                className="w-max h-max text-center flex justify-center items-center space-x-2 hover:underline hover:text-emerald-600"
                onClick={_onClickPlusCurrentPage}
              >
                <KeyboardDoubleArrowDownOutlined sx={{ fontSize: 13 }} />
                <p>View more feedback</p>
                <KeyboardDoubleArrowDownOutlined sx={{ fontSize: 13 }} />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div
          className="w-full h-max flex flex-col justify-center items-center
          text-gray-500
        "
        >
          <SearchOffIcon sx={{ fontSize: 40 }} />
          <p className="text-lg">The course wasn't found</p>
        </div>
      )}
    </>
  );
};

export default DetailView;
