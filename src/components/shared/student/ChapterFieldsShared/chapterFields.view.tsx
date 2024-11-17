import { apiUrl } from '@/api/api.url';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import { Skeleton } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ChapterFieldsView = (props: any) => {
  /**
   *
   * states
   *
   * **/
  const [isShowLesson, setIsShowLesson] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [lessonsList, setLessonsList] = useState<any>();
  const [isLoadLesson, setIsLoadLesson] = useState<boolean>(false);
  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    const callAPI = async () => {
      setIsLoadLesson(true);
      const token = getTokenUtil();
      const url = apiUrl.lessonUrl.lesson + props?.chapterId;

      try {
        axios
          .get(url, {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: token,
            },
          })
          .then((_res) => {
            if (_res.status === 200) {
              setLessonsList(_res.data.payload);
              setIsLoadLesson(false);
            }
          });
      } catch (error) {
        setIsLoadLesson(false);
      }
    };

    if (isClick) {
      callAPI();
    }
  }, [isClick]);

  /**
   *
   * funcs
   *
   * **/
  const _onClickShowLessons = () => {
    setIsShowLesson(!isShowLesson);

    if (!isClick) {
      setIsClick(true);
    }
  };

  // JSX
  const LoadingLessonJSX = () => (
    <div className="w-full h-max flex flex-col space-y-3">
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </div>
  );

  return (
    <div className="w-full h-max flex flex-col border-b-[1.5px] border-gray-400">
      {/* Chapter fields */}
      <button
        className="w-full h-[5rem] bg-gray-200 items-center flex text-lg font-semibold
        hover:text-emerald-600
      "
        onClick={_onClickShowLessons}
      >
        <div
          className="overflow-hidden text-ellipsis flex text-left px-3"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          <p>
            Chapter {props.index + 1}: {props.title}
          </p>
        </div>
      </button>
      {/* End chapter fields */}

      {/* Lessons fields */}
      <div
        className={`w-full h-max p-3 bg-white flex flex-col space-y-3 transition-all duration-500 ease-in-out transform ${isShowLesson ? 'opacity-100' : 'opacity-0 h-0'}`}
        style={{
          display: isShowLesson ? 'flex' : 'none',
        }}
      >
        {isLoadLesson ? (
          <LoadingLessonJSX />
        ) : (
          <>
            {lessonsList?.map((item: any, index: any) => (
              <button className="w-full h-max flex items-center overflow-hidden text-left" key={index}
                onClick={() => {
                  props.setLessonId(item?.lessonId)
                  props.setVideoUrl(item?.video)
                  props.setContent(`<p className="text-xl font-medium">${props.index + 1}.${index + 1}. ${item?.title}</p> <br /> ${item?.content}`)
                }}
              >
                <div
                  className={`overflow-hidden text-ellipsis hover:text-emerald-600 hover:underline ${props.lessonId === item?.lessonId ? "text-emerald-600 underline" : ""}`}
                  style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}
                >
                  <p>
                    {props.index + 1}.{index + 1}. {item?.title}
                  </p>
                </div>
              </button>
            ))}
          </>
        )}
      </div>
      {/* End lessons fields */}
    </div>
  );
};

export default ChapterFieldsView;
