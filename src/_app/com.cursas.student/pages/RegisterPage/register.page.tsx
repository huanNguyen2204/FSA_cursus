import { useNavigate } from "react-router";
import RegisterView from "./register.view"
import { useEffect } from "react";
import { STUDENT_URL } from "../../settings/setting.app";

const RegisterPage = () => {
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
  
  return <RegisterView />
}

export default RegisterPage