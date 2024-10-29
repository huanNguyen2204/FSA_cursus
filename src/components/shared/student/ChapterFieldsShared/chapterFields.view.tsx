import { useState } from 'react';

const ChapterFieldsView = (props: any) => {
  /**
   *
   * states
   *
   * **/
  const [isShowLesson, setIsShowLesson] = useState<boolean>(false);

  /**
   *
   * funcs
   *
   * **/
  const _onClickShowLessons = () => {
    setIsShowLesson(!isShowLesson);
  };

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
            Chapter 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aut neque numquam reiciendis
            eligendi aspernatur assumenda, rem tenetur ex maxime voluptatibus ipsum ab quibusdam blanditiis nesciunt
            reprehenderit consequatur ipsam quae.
          </p>
        </div>
      </button>
      {/* End chapter fields */}

      {/* Lessons fields */}
      <div
        className={`w-full h-max p-3 bg-white flex flex-col space-y-1 transition-all duration-500 ease-in-out transform ${isShowLesson ? 'opacity-100' : 'opacity-0 h-0'}`}
        style={{
          display: isShowLesson ? 'flex' : 'none',
        }}
      >
        {/* Elements */}
        <button className="w-full h-[2rem] flex items-center overflow-hidden">
          <div
            className="overflow-hidden text-ellipsis hover:text-emerald-600 hover:underline"
            style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}
          >
            <p>
              1. Lorem ipsum dolor sit amet nm ipsum dolor sit amet nm ipsum dolor sit amet nm ipsum dolor sit amet
              nemo.
            </p>
          </div>
        </button>

        <button className="w-full h-[2rem] flex items-center overflow-hidden">
          <div
            className="overflow-hidden text-ellipsis hover:text-emerald-600 hover:underline"
            style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}
          >
            <p>
              2. Lorem ipsum dolor sit amet nm ipsum dolor sit amet nm ipsum dolor sit amet nm ipsum dolor sit amet
              nemo.
            </p>
          </div>
        </button>

        <button className="w-full h-[2rem] flex items-center overflow-hidden">
          <div
            className="overflow-hidden text-ellipsis hover:text-emerald-600 hover:underline"
            style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}
          >
            <p>
              3. Lorem ipsum dolor sit amet nm ipsum dolor sit amet nm ipsum dolor sit amet nm ipsum dolor sit amet
              nemo.
            </p>
          </div>
        </button>
        {/* End elements */}
      </div>
      {/* End lessons fields */}
    </div>
  );
};

export default ChapterFieldsView;
