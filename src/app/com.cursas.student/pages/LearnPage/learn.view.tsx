import jsVideo from '@/assets/js-test.mp4';
import ChapterFieldsShared from '@/components/shared/student/ChapterFieldsShared/chapterFields.shared';

const LearnView = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-2">
      {/* Title */}
      <p className="text-2xl font-semibold xl:text-left text-center">Javascript complete full course</p>
      {/* End title */}

      {/* Course fields */}
      <div className="w-full h flex xl:flex-row flex-col xl:space-x-4 xl:space-y-0 space-y-4">
        {/* Video */}
        <div className="flex xl:w-3/4 h-max flex-col space-y-4">
          {/* Clip */}
          <div className="flex w-full xl:h-[40rem] h-[20rem] bg-black shadow-xl">
            <video className="w-full h-full" controls>
              <source src={jsVideo} className="w-full h-full" type="video/mp4" />
            </video>
          </div>
          {/* End clip */}

          {/* Lesson title */}
          <div className='w-full h-max flex bg-white p-4'>
            <p className='text-lg font-medium'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis qui inventore est rem architecto iusto, aliquid repellat, pariatur deleniti reprehenderit veniam, facere facilis quidem. Ipsam architecto quo iusto expedita?</p>
          </div>
          {/* End lesson title */}
        </div>

        {/* End video */}

        {/* Choose lessons */}
        <div className="flex xl:w-1/4 xl:h-full h-max max-h-[70rem] flex-col overflow-scroll">
          <ChapterFieldsShared />
          <ChapterFieldsShared />

          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />
          <ChapterFieldsShared />

          <ChapterFieldsShared />
        </div>
        {/* End choose lessons */}
      </div>
      {/* End course fields */}
    </div>
  );
};

export default LearnView;
