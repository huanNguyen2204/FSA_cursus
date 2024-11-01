import { createContext, useState } from "react";

import Routers from "./routers/router";
import SnackBarShared from "./components/shared/student/SnackBarShared/snackBar.shared";

// create the context 
export const AppContext = createContext<any>(null);

const App = () => {
  /**
   * 
   * states
   * 
   * **/
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [typeOfAlert, setTypeOfAlert] = useState<string>("");
  const [titleOfAlert, setTitleOfAlert] = useState<string>("");
  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => setOpenAlert(false);

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

  return (
    <AppContext.Provider value={{
      openAlert, 
      setTypeOfAlert,
      setTitleOfAlert,
      handleOpenAlert,
      handleCloseAlert
    }}>  
      {/* Page components */}
      <div className="flex xl:text-sm text-xs">
        <Routers />
        <SnackBarShared 
          {...snackBarProps}
        />
      </div>
      {/* End page components */}
    </AppContext.Provider>
  );
};

export default App;
