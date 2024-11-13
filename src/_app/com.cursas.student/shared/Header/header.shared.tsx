import { useContext, useEffect } from "react";
import HeaderView from "./header.view"
import { AppContext } from "@/App";
import getTokenUtil from "@/utils/shared/getTokenUtil";
import { apiUrl } from "@/api/api.url";
import axios from "axios";

const HeaderShared = (props: any) => {
  /**
   * 
   * states
   * 
   * **/
  const context = useContext(AppContext);
  const userInfor = localStorage.getItem("userInfor");

  /**
   * 
   * hooks
   * 
   * **/
  useEffect(() => {
    const callCheckToCart = async () => {
      if (userInfor !== null) {
        const inforUser = JSON.parse(userInfor)
        const token = getTokenUtil();
        const url = apiUrl.cartUrl.getAll + String(inforUser.id);

        try {
          const res =  await axios.get(
            url, 
            {
              headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': token
              }
            }
          )

          if (res.status === 200) {
            context.setListOfCart(res.data.payload)
            context.setBadgeCart(res.data.payload.length) 
          }
        } catch (error) {
    
        }
      }
    }
    
    callCheckToCart();
  }, [])

  /**
   * 
   * funcs
   * 
   * **/

  return <HeaderView {...props} />
}

export default HeaderShared;