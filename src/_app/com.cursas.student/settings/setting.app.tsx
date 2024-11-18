import { RouterModel } from "@/models/router.model";

// Layout page of app
import LayoutPage from "../pages/_layout/layout.page";

// Page list
import LoginPage from "../pages/LoginPage/login.page";
import HomePage from "../pages/HomePage/home.page";
import DetailPage from "../pages/DetailPage/detail.page";
import ProfilePage from "../pages/ProfilePage/profile.page";
import ShoppingCartPage from "../pages/ShoppingCartPage/shoppingCart.page";
import LearnPage from "../pages/LearnPage/learn.page";
import RegisterPage from "../pages/RegisterPage/register.page";
import PaymentHistoryPage from "../pages/PaymentHistoryPage/paymentHistory.page";
import MyCoursePage from "../pages/MyCoursePage/myCourse.page";
import ErrorPage from "../pages/ErrorPage/error.page";

// Str for url router
const STUDENT_URL = "/cursus-student";

// Router from other sublist
const STUDENT_OTHERLIST: RouterModel[] = import.meta.env.VITE_APP != "com.cursus.student" ? [] : [
  {
    url: STUDENT_URL + "/register" ,
    page: <RegisterPage />,
  },
  {
    url: STUDENT_URL + "/login",
    page: <LoginPage />
  }
]

// Router sub list
const STUDENT_SUBLIST: RouterModel[] = import.meta.env.VITE_APP != "com.cursus.student" ? [] : [
  {
    url: STUDENT_URL + "/layout" + "/" ,
    page: <HomePage />,
    title: "Home"
  },
  {
    url: STUDENT_URL + "/layout" + "/detail/:courseId" ,
    page: <DetailPage />,
    title: "Detail"
  },
  {
    url: STUDENT_URL + "/layout" + "/payment-history" ,
    page: <PaymentHistoryPage />,
    title: "Payment History"
  },
  {
    url: STUDENT_URL + "/layout" + "/my-course" ,
    page: <MyCoursePage />,
    title: "My Course"
  },
  {
    url: STUDENT_URL + "/layout" + "/profile" ,
    page: <ProfilePage />,
    title: "Profile"
  },
  {
    url: STUDENT_URL + "/layout" + "/shopping-cart" ,
    page: <ShoppingCartPage />,
    title: "Shopping Cart"
  },
  {
    url: STUDENT_URL + "/layout" + "/learn/:courseId" ,
    page: <LearnPage />,
    title: "Learn"
  },
  {
    url: STUDENT_URL + "/layout" + "/error" ,
    page: <ErrorPage />,
    title: "Error"
  },
]

// Router at first come
const STUDENT_FIRSTCOME: RouterModel | null = import.meta.env.VITE_APP != "com.cursus.student" ? null : {
  url: STUDENT_URL + "/layout" + "/",
  page: <HomePage />,
  title: "Home"
}

export {
  STUDENT_URL,
  STUDENT_OTHERLIST,
  STUDENT_SUBLIST,
  STUDENT_FIRSTCOME,
  LayoutPage as LayoutStudentPage
}