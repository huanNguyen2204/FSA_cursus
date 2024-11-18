import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/**
 *
 * logout dialog importing
 *
 * **/
import LogoutDiagLogShared from './types/LogoutDialogShared/logoutDialog.shared';
import LoadingDiagGlobalShared from './types/LoadingDialogGlobalShared/loadingDialogGlobal.shared';
import PurchaseConfirmDiaglogShared from './types/PurchaseConfirmDiaglogShared/purchaseConfirmDiaglog.shared';
import FeedbackDialogShared from './types/FeedbackDialogShared/feedbackDiaglog.shared';
import BuyNowDialogShared from './types/BuyNowDialogShared/buyNowDialog.shared';

const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Lighter overlay color
        },
      },
    },
  },
});

export default function DialogView(props: any) {
  /**
   *
   * funcs
   *
   * **/
  const handleClose = (_event: any, reason: any) => {
    if (reason !== 'backdropClick') {
      props.handleCloseDialog;
    }
  };

  /**
   *
   * jsx rendering
   *
   * **/
  const DialogJSX = () => {
    return (
      <>
        {props.typeOfDialog === 'logout' ? (
          <LogoutDiagLogShared {...props} />
        ) : props.typeOfDialog === 'loading' ? (
          <LoadingDiagGlobalShared {...props} />
        ) : props.typeOfDialog === 'purchase' ? (
          <PurchaseConfirmDiaglogShared {...props} />
        ) : props.typeOfDialog === 'feedback' ? (
          <FeedbackDialogShared {...props} />
        ) : props.typeOfDialog === 'buynow' ? (
          <BuyNowDialogShared {...props} />
        ) :(
          <></>
        )}
      </>
    );
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Dialog
          open={props.openDialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ fontFamily: "Source Sans 3" }}
        >
          <DialogJSX />
        </Dialog>
      </ThemeProvider>
    </React.Fragment>
  );
}
