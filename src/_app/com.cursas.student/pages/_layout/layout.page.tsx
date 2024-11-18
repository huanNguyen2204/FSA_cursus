import LayoutView from './layout.view';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '@/api/api.url';
import { AppContext } from '@/App';
import { useLocation, useNavigate } from 'react-router';
import { STUDENT_URL } from '../../settings/setting.app';

const LayoutPage = () => {
  /**
   *
   * state
   *
   * **/
  const url = [
    STUDENT_URL + '/layout' + '/payment-history',
    STUDENT_URL + '/layout' + '/my-course',
    STUDENT_URL + '/layout' + '/profile',
    STUDENT_URL + '/layout' + '/learn',
  ];
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const location = useLocation();
  const userInfor = localStorage.getItem("userInfor")

  /**
   *
   * hooks
   *
   * **/
  useEffect(() => {
    // check accessToken valid
    const accessToken = localStorage.getItem('userInfor');
    context.setTypeOfDialog('loading');
    context.handleOpenDialog();

    const callAPI = async () => {
      if (accessToken !== null) {
        const inforUser = JSON.parse(accessToken);
        const url = apiUrl.accountUrl.id + inforUser?.id;

        // check token still available
        try {
          await axios.get(url, {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${inforUser.accessToken}`,
            },
          });
          context.handleCloseDialog();
        } catch (error) {
          localStorage.removeItem('userInfor');
          context.handleCloseDialog();
        }
      } else {
        // kill token
        localStorage.removeItem('userInfor');
        context.handleCloseDialog();
      }
    };

    callAPI();
  }, []);

  useEffect(() => {
    if (userInfor === null) {
      url.forEach((item) => {
        if (location.pathname.includes(item)) {
          context.setTypeOfAlert('info');
          context.setTitleOfAlert('You must to login at first to do that. Please login');
          context.handleOpenAlert();
          navigate(STUDENT_URL + '/layout' + '/');
        }
      });
    }
  }, [location]);

  return <LayoutView />;
};

export default LayoutPage;
