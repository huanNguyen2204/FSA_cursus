import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const SnackBarView = (props: any) => {
  return (
    <Snackbar
      open={props.openAlert}
      autoHideDuration={3000}
      onClose={props.handleCloseAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={props.handleCloseAlert} severity={props.typeOfAlert} variant="filled" sx={{ width: '100%' }}>
        {props.titleOfAlert}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarView;
