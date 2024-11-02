import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

const LogoutDiagLogShared = (props: any) => {
  /**
   * 
   * funcs
   * 
   * **/
  const logout = () => {
    localStorage.removeItem("userInfor");
    window.history.pushState({}, "", "/cursus-student/layout/")
    window.location.reload();
  }

  return (
    <>
      <div className="lg:w-[30rem] w-[25rem] bg-white">
        <DialogTitle id="alert-dialog-title">{'Logout Application?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Do you want to logout?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseDialog} sx={{ color: '#16a34a' }}
            onClickCapture={logout}
          >
            Logout
          </Button>
          <Button onClick={props.handleCloseDialog} sx={{ color: 'gray' }}>
            Close
          </Button>
        </DialogActions>
      </div>
    </>
  );
};

export default LogoutDiagLogShared;
