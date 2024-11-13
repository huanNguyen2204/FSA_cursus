import { useNavigate } from 'react-router-dom';
import { STUDENT_URL } from '@/_app/com.cursas.student/settings/setting.app';
import { useContext } from 'react';
import { AppContext } from '@/App';

const useNavigateToLogin = () => {
  /**
   * 
   * states
   * 
   * **/
  const navigate = useNavigate();

  const context = useContext(AppContext)

  /**
   * 
   * navigate
   * 
   * **/
  const navigateToLogin = () => {
    const checkToken = localStorage.getItem("userInfor")

    if (checkToken === null) {
      context.handleOpenAlert();
      context.setTypeOfAlert('info');
      context.setTitleOfAlert('YOU MUST LOGIN FIRST TO USE METHOD');
      navigate(STUDENT_URL + '/login');
    }
  };

  return navigateToLogin;
};

export default useNavigateToLogin;
