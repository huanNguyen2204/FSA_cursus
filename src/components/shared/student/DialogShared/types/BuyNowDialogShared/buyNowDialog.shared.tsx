import { apiUrl } from '@/api/api.url';
import { AppContext } from '@/App';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';

const BuyNowDialogShared = (props: any) => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  /**
   *
   * funcs
   *
   * **/
  const _onClickBuyNow = async () => {
    setIsLoading(true);

    const url = apiUrl.cartUrl.buyNow;
    const userInfor = localStorage.getItem('userInfor');
    let userId;
    const token = getTokenUtil();

    if (userInfor != null) {
      userId = JSON.parse(userInfor).id;
    }

    const data = {
      accountId: userId,
      courseId: Number(props.paramsDiaglog.courseId),
    };

    try {
      axios
        .post(url, data, {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: token,
          },
        })
        .then((_res) => {
          if (_res.status === 200) {
            context.handleOpenAlert();
            context.setTypeOfAlert('success');
            context.setTitleOfAlert('Buy course successful');
            props.handleCloseDialog();
            window.location.reload();
          }
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div onSubmit={_onClickBuyNow} className="lg:w-[30rem] w-[25rem] bg-white">
      <DialogTitle id="alert-dialog-title">{'Buy the course?'}</DialogTitle>
      {isLoading ? (
        <div className="w-full h-max flex justify-center items-center">
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
          </Stack>
        </div>
      ) : (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to buy the {props.paramsDiaglog.courseName} now?
          </DialogContentText>
        </DialogContent>
      )}

      <DialogActions>
        <Button onClick={_onClickBuyNow} sx={{ color: '#16a34a' }}>
          Buy now
        </Button>
        <Button onClick={props.handleCloseDialog} sx={{ color: 'gray' }}>
          Close
        </Button>
      </DialogActions>
    </div>
  );
};

export default BuyNowDialogShared;
