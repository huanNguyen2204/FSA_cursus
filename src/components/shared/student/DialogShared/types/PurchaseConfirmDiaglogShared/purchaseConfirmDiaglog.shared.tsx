import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { apiUrl } from '@/api/api.url';
import getTokenUtil from '@/utils/shared/getTokenUtil';
import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from '@/App';

const PurchaseConfirmDiaglogShared = (props: any) => {
  /**
   * 
   * states
   * 
   * **/
  const context = useContext(AppContext);

  /**
   * 
   * funcs
   * 
   * **/
  const _onClickConfirmPurchase = async () => {
    context.setTypeOfDialog('loading');
    context.handleOpenDialog();
    
    const userInfor = localStorage.getItem("userInfor");

    if (userInfor !== null) {
      const accountId = JSON.parse(userInfor).id;
      const url = apiUrl.cartUrl.purchase + `/${String(accountId)}`;
      const token = getTokenUtil();

      try {
        await axios.post(
          url,
          {
            headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json',
              'Authorization': token
            }
          }
        )
        .then(res => {
          console.log(res);
        })
      } catch (_error) {

      }
    }
  }

  return (
    <>
      <div className="lg:w-[30rem] w-[25rem] bg-white">
        <DialogTitle id="alert-dialog-title">{'Confirm for purchase'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Are you sure to purchase shopping-cart</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={_onClickConfirmPurchase} sx={{ color: '#16a34a' }}
            
          >
            Yes
          </Button>
          <Button onClick={props.handleCloseDialog} sx={{ color: 'gray' }}>
            No
          </Button>
        </DialogActions>
      </div>
    </>
  );
};

export default PurchaseConfirmDiaglogShared;
