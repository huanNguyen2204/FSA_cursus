import { RouterModel } from "@/models/router.model";

// Layout page of app
import LayoutPage from "../pages/_LayoutPage/layout.page";

// Page list
import LoginPage from "../pages/LoginPage/login.page";
import DashboardPage from "../pages/DashboardPage/dashboard.page";
import CoursePage from "../pages/CoursePage/course.page";
import EarningAnalyticsPage from "../pages/EarningAnalyticsPage/earningAnalytics.page";
import PayoutHistoryPage from "../pages/PayoutHistoryPage/payoutHistory.page";
import InformationPage from "../pages/InformationPage/information.page";
import AddNewCoursePage from "../pages/CoursePage/AddNewCoursePage/addNewCourse.page";

// Str for url router
const INSTRUCTOR_URL = "/cursus-instructor";

// Router sub list
const INSTRUCTOR_SUBLIST: RouterModel[] = import.meta.env.VITE_APP != "com.cursus.instructor" ? [] : [
  {
    url: INSTRUCTOR_URL + "/layout" + "/dashboard" ,
    page: <DashboardPage />,
    title: "Dashboard"
  },
  {
    url: INSTRUCTOR_URL + "/layout" + "/course",
    page: <CoursePage />,
    title: "Manage Course"
  },
  {
    url: INSTRUCTOR_URL + "/layout" + "/earning-analytics",
    page: <EarningAnalyticsPage />,
    title: "Earning Analytics"
  },
  {
    url: INSTRUCTOR_URL + "/layout" + "/payout-history",
    page: <PayoutHistoryPage />,
    title: "Payout History"
  },
  {
    url: INSTRUCTOR_URL + "/layout" + "/information",
    page: <InformationPage />,
    title: "Information"
  },
  {
    url: INSTRUCTOR_URL + "/layout" + "/course/add-new",
    page: <AddNewCoursePage />,
    title: "Manage Course"
  },
]

// Router at first come
const INSTRUCTOR_FIRSTCOME: RouterModel | null = import.meta.env.VITE_APP != "com.cursus.instructor" ? null : {
  url: INSTRUCTOR_URL + "/login",
  page: <LoginPage />
}

export {
  INSTRUCTOR_URL,
  INSTRUCTOR_SUBLIST,
  INSTRUCTOR_FIRSTCOME,
  LayoutPage as LayoutInstructorPage
}