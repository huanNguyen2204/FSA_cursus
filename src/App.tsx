import { createContext } from "react";

import Routers from "./routers/router";

// create the context 
export const AppContext = createContext<any>(null);

const App = () => {
  return (
    <AppContext.Provider value={{}}>
      {/* Page components */}
      <div className="flex xl:text-sm text-xs">
        <Routers />
      </div>
      {/* End page components */}
    </AppContext.Provider>
  );
};

export default App;
