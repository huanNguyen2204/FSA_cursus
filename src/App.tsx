import { createContext, useState } from "react";

import Routers from "./routers/router";
import SnackBarShared from "./components/shared/student/SnackBarShared/snackBar.shared";
import DialogShared from "./components/shared/student/DialogShared/diaLog.shared";

// create the context 
export const AppContext = createContext<any>(null);

const App = () => {
  /**
   * 
   * states
   * 
   * **/
  
  // alert toastify
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [typeOfAlert, setTypeOfAlert] = useState<string>("");
  const [titleOfAlert, setTitleOfAlert] = useState<string>("");

  // dialog modal
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [typeOfDialog, setTypeOfDialog] = useState<string>("");
  const [paramsDiaglog, setParamsDialog] = useState<any>();

  /**
   * 
   * funcs
   * 
   * **/

  // alert funcs
  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => setOpenAlert(false);

  // dialog funcs
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);  
  const handleTypeOfDialog = (type: string) => setTypeOfDialog(type)
  const handleParamsDialog = (params: any) => setParamsDialog(params) 

  /**
   * 
   * export props
   * 
   * **/
  const snackBarProps = {
    openAlert,
    typeOfAlert,
    titleOfAlert,
    handleOpenAlert,
    handleCloseAlert
  }

  const diaLogProps = {
    openDialog,
    typeOfDialog,
    paramsDiaglog,
    handleCloseDialog,
    handleOpenDialog,
    handleTypeOfDialog
  }

  return (
    <AppContext.Provider value={{
      // alert
      openAlert, 
      setTypeOfAlert,
      setTitleOfAlert,
      handleOpenAlert,
      handleCloseAlert,

      // dialog
      typeOfDialog,
      setTypeOfDialog,
      handleOpenDialog,
      diaLogProps,
      handleParamsDialog
    }}>  
      {/* Page components */}
      <div className="flex xl:text-sm text-xs">
        {/* MAIN OF ROUTER */}
        <Routers />

        {/* Sub component */}
        {/* Loading and toastify */}
        <SnackBarShared {...snackBarProps} />

        {/* Modal */}
        <DialogShared {...diaLogProps} />
      </div>
      {/* End page components */}
    </AppContext.Provider>
  );
};

export default App;
