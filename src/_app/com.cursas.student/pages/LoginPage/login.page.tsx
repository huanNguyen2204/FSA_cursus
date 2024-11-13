import { useNavigate } from "react-router";
import LoginView from "./login.view"
import { useEffect } from "react";
import { STUDENT_URL } from "../../settings/setting.app";

const LoginPage = () => {
  /**
   * 
   * states
   * 
   * **/
  const navigate = useNavigate();

  /**
   * 
   * hooks
   * 
   * **/
  useEffect(() => {
    const temp = localStorage.getItem("userInfor")

    if (temp) {
      navigate(STUDENT_URL + "/layout" + "/")
    }
  }, [])
  
  return <LoginView />
}

export default LoginPage;