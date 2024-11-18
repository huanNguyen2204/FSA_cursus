import { apiUrl } from '@/api/api.url';
import { AppContext } from '@/App';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import { Button, CircularProgress, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useContext, useState } from 'react';

const FeedbackDialogShared = (props: any) => {
  /**
   *
   * states
   *
   * **/
  const context = useContext(AppContext);

  const [rating, setRating] = useState<any>(0);
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   *
   * funcs
   *
   * **/
  const _onClickConfirmRating = async () => {
    setIsLoading(true);

    const url = apiUrl.feedbackUrl.create;
    const userInfor = localStorage.getItem('userInfor');
    let userId;
    const token = getTokenUtil();

    if (userInfor != null) {
      userId = JSON.parse(userInfor).id;
    }

    const data = {
      feedbackDescription: description,
      feedbackRating: rating,
      courseId: props.paramsDiaglog?.courseId,
      accountId: userId,
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
            context.setTitleOfAlert('Save feedback successful');
            props.setIsHasFeedback(false);
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
    <form onSubmit={_onClickConfirmRating} className="lg:w-[30rem] w-[25rem] bg-white">
      <DialogTitle id="alert-dialog-title">{'Feedback for course'}</DialogTitle>
      <>
        {isLoading ? (
          <div className='w-full h-max flex justify-center items-center'>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
              <CircularProgress color="inherit" />
            </Stack>
          </div>
        ) : (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="w-full h-max flex flex-col text-sm space-y-8">
                {/* Description */}
                <div className="w-full h-max flex flex-col space-y-1">
                  <p>Description</p>
                  <textarea
                    className="w-full h-[10rem] border-[2px] border-gray-300 resize-none
                  p-2 focus:border-amber-300 text-black
                "
                    value={description}
                    onChange={(e: any) => {
                      e.preventDefault();
                      setDescription(e.target.value);
                    }}
                    required
                  ></textarea>
                </div>
                {/* End description */}

                {/* Rating */}
                <div className="w-full h-max flex flex-col space-y-1">
                  <p>Rating</p>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(_event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                </div>
                {/* End rating */}
              </div>
            </DialogContentText>
          </DialogContent>
        )}
      </>

      <DialogActions>
        <Button type="submit" sx={{ color: '#f59e0b' }}>
          Confirm
        </Button>
        <Button onClick={props.handleCloseDialog} sx={{ color: 'gray' }}>
          Close
        </Button>
      </DialogActions>
    </form>
  );
};

export default FeedbackDialogShared;
