import { RouterModel } from "@/models/router.model";

// Layout page of app
import LayoutPage from "../pages/_layout/layout.page";

// Page list
import LoginPage from "../pages/LoginPage/login.page";
import HomePage from "../pages/HomePage/home.page";
import DetailPage from "../pages/DetailPage/detail.page";
import ProfilePage from "../pages/ProfilePage/profile.page";
import ShoppingCartPage from "../pages/ShoppingCartPage/shoppingCart.page";

// Str for url router
const STUDENT_URL = "/cursus-student";

// Router sub list
const STUDENT_SUBLIST: RouterModel[] = import.meta.env.VITE_APP != "com.cursus.student" ? [] : [
  {
    url: STUDENT_URL + "/layout" + "/" ,
    page: <HomePage />,
    title: "Home"
  },
  {
    url: STUDENT_URL + "/layout" + "/detail" ,
    page: <DetailPage />,
    title: "Detail"
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
]

// Router at first come
const STUDENT_FIRSTCOME: RouterModel | null = import.meta.env.VITE_APP != "com.cursus.student" ? null : {
  url: STUDENT_URL + "/login",
  page: <LoginPage />
}

export {
  STUDENT_URL,
  STUDENT_SUBLIST,
  STUDENT_FIRSTCOME,
  LayoutPage as LayoutStudentPage
}