import { useNavigate } from "react-router";
import LoginView from "./login.view"
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/cursus-student/layout/")
  }, []) 

  return <LoginView />
}

export default LoginPage;