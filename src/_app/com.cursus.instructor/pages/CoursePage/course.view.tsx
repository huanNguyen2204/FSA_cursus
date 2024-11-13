import CartCourseShared from '@/components/shared/instructor/CartCourse/cartCourse.shared';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';

import { INSTRUCTOR_URL } from '../../settings/setting.app';


const CourseView = () => {
  /**
   * 
   * states
   * 
   * **/
  const navigate = useNavigate();


  return (
    <div className="w-full h-max flex flex-col space-y-10">
      {/* Create button */}
      <button
        className="w-max h-[35px] py-1 pl-1 pr-2 flex justify-center items-center
        space-x-1 bg-emerald-600 text-white hover:bg-emerald-500  rounded-sm 
      "
        onClick={() => navigate(INSTRUCTOR_URL + "/layout" + "/course/add-new")}
      >
        <AddIcon sx={{ fontSize: 20 }} />
        <p>Add new course</p>
      </button>
      {/* End create button */}

      {/* List of courses */}
      <div className="w-full h-max flex flex-col">
        {/* Title */}
        <p className="text-lg text-gray-400 font-semibold">List of courses</p>
        {/* End title */}

        {/* Course fields */}
        <div className="w-full h-max flex space-x-4">
          {/* Card elements */}
          <CartCourseShared />
          {/* End card elements */}
        </div>
        {/* End course fields */}
      </div>
      {/* End list of courses */}
    </div>
  );
};

export default CourseView;
