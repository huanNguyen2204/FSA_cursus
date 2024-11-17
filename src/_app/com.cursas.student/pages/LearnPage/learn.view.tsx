import { apiUrl } from '@/api/api.url';
import ChapterFieldsShared from '@/components/shared/student/ChapterFieldsShared/chapterFields.shared';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import parse from 'html-react-parser';
import { CircularProgress, Stack } from '@mui/material';
import getCheckCourseHasBoughtUtil from '@/utils/shared/getCheckCourseHasBoughtUtil';

const LearnView = () => {
  /**
   *
   * states
   *
   * **/
  const { courseId } = useParams();
  const [chapterList, setChapterList] = useState<any>();
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [lessonId, setLessonId] = useState<any>(0);
  const [title, setTitle] = useState<any>(undefined);
  const [hasBought, setHasBought] = useState<any>(undefined);

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    const checkIsBought = async () => {
      const userInfor = localStorage.getItem('userInfor');

      if (userInfor !== null) {
        const userId = JSON.parse(userInfor).id;
        const token = getTokenUtil();
        const url = getCheckCourseHasBoughtUtil(userId, courseId);

        await axios
          .get(url, {
            headers: {
              Accept: '*/*',
              Authorization: token,
            },
          })
          .then((_res) => {
            if (_res.status === 200) {
              setHasBought(_res.data.payload);
            }
          });
      }
    };

    const callAPI = async () => {
      const token = getTokenUtil();
      const url = apiUrl.chapterUrl.chapter + String(courseId);

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
            setChapterList(_res.data.payload);
          }
        });
    };

    const callTitle = async () => {
      const token = getTokenUtil();
      const url = apiUrl.courseUrl.detail + String(courseId);

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
            setTitle(_res.data.payload.name);
          }
        });
    };

    checkIsBought();
    callAPI();
    callTitle();
  }, []);

  return (
    <>
      {title === undefined ? (
        <div className="w-full h-max flex justify-center items-center">
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
          </Stack>
        </div>
      ) : (
        <>
          {hasBought === false ? (
            <div className="w-full h-max flex">
              <p className='text-lg'>You haven't bought this course yet. Please buy it and get learn.</p>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col space-y-2">
              {/* Title */}
              <p className="text-2xl font-semibold xl:text-left text-center">{title}</p>
              {/* End title */}

              {/* Course fields */}
              <div className="w-full h flex xl:flex-row flex-col xl:space-x-4 xl:space-y-0 space-y-4">
                {/* Video */}
                <div className="flex xl:w-3/4 h-max flex-col space-y-4">
                  {/* Clip */}
                  <div className="flex w-full xl:h-[40rem] h-[20rem] bg-black shadow-xl">
                    <video className="w-full h-full" controls key={videoUrl} autoPlay>
                      <source src={videoUrl} className="w-full h-full" type="video/mp4" />
                    </video>
                  </div>
                  {/* End clip */}

                  {/* Lesson title */}
                  <div className="w-full h-max flex bg-white p-4">
                    <div>{parse(content)}</div>
                  </div>
                  {/* End lesson title */}
                </div>

                {/* End video */}

                {/* Choose lessons */}
                <div className="flex xl:w-1/4 xl:h-full h-max max-h-[70rem] flex-col overflow-y-scroll">
                  {chapterList?.map((item: any, index: any) => (
                    <React.Fragment key={index}>
                      <ChapterFieldsShared
                        {...item}
                        index={index}
                        setVideoUrl={setVideoUrl}
                        setContent={setContent}
                        setLessonId={setLessonId}
                        lessonId={lessonId}
                      />
                    </React.Fragment>
                  ))}
                </div>
                {/* End choose lessons */}
              </div>
              {/* End course fields */}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default LearnView;
