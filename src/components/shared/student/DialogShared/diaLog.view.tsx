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
        ) : (
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
        >
          <DialogJSX />
        </Dialog>
      </ThemeProvider>
    </React.Fragment>
  );
}
