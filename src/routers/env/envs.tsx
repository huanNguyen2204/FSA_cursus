import { INSTRUCTOR_URL, INSTRUCTOR_SUBLIST, INSTRUCTOR_FIRSTCOME, LayoutInstructorPage } from "@/app/com.cursus.instructor/settings/setting.app";
import { STUDENT_URL, STUDENT_OTHERLIST, STUDENT_SUBLIST, STUDENT_FIRSTCOME, LayoutStudentPage } from "@/app/com.cursas.student/settings/setting.app";

import { RouterModel } from "@/models/router.model";

// Setting url
const ENV_URL = 
  import.meta.env.VITE_APP == "com.cursus.instructor" ? INSTRUCTOR_URL
    : import.meta.env.VITE_APP == "com.cursus.student" ? STUDENT_URL : ""

// Setting LayoutPage
const ENV_LAYOUT =
  import.meta.env.VITE_APP == "com.cursus.instructor" ? <LayoutInstructorPage /> 
  : import.meta.env.VITE_APP == "com.cursus.student" ? <LayoutStudentPage /> : ""

// Setting first come
const ENV_FIRSTCOME: any = 
  import.meta.env.VITE_APP == "com.cursus.instructor" ? INSTRUCTOR_FIRSTCOME
  : import.meta.env.VITE_APP == "com.cursus.student" ? STUDENT_FIRSTCOME : ""

// Setting subList
const ENV_SUBLIST: RouterModel[] = [
  ...INSTRUCTOR_SUBLIST,
  ...STUDENT_SUBLIST
]

// Setting otherList:
const ENV_OTHERLIST: RouterModel[] = [
  ...STUDENT_OTHERLIST
]

export {
  ENV_SUBLIST,
  ENV_OTHERLIST,
  ENV_URL,
  ENV_LAYOUT,
  ENV_FIRSTCOME
};