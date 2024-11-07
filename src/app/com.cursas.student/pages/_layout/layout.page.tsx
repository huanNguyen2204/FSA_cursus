import LayoutView from "./layout.view"
import { useContext, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/db/api.url";
import { AppContext } from "@/App";

const LayoutPage = () => {
  /**
   * 
   * state
   * 
   * **/
  const context = useContext(AppContext);


  /**
   * 
   * hooks
   * 
   * **/
  useEffect(() => {
    // check accessToken valid
    const accessToken = localStorage.getItem("userInfor")
    context.setTypeOfDialog('loading');
    context.handleOpenDialog();

    const callAPI = async () => {
      if (accessToken !== null) {
        const inforUser = JSON.parse(accessToken);
        const url = apiUrl.accountUrl.id + inforUser?.id
        
        // check token still available
        try {
          await axios.get(
            url, 
            {
              headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${inforUser.accessToken}`
              }
            }
          )
          context.handleCloseDialog();
        } catch (error) {
          localStorage.removeItem("userInfor")
          context.handleCloseDialog();
        }
      } else {
        // kill token
        localStorage.removeItem("userInfor")
        context.handleCloseDialog();
      }
    }

    callAPI();

  }, [])

  return <LayoutView />
}

export default LayoutPage