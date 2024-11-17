import { useEffect, useState } from "react"
import DetailView from "./detail.view"
import { useParams } from "react-router";
import getTokenUtil from "@/utils/shared/getTokenUtil";
import getCheckCourseHasBoughtUtil from "@/utils/shared/getCheckCourseHasBoughtUtil";
import axios from "axios";

const DetailPage = () => {
  /**
   * 
   * states
   * 
   * **/
  const { courseId } = useParams();
  const [hasBougth, setHasBought] = useState<any>(undefined);

  /**
   * 
   * hooks
   * 
   * **/
  useEffect(() => {
    const userInfor = localStorage.getItem("userInfor")

    const checkIsBought = async () => {
      if (userInfor !== null) {
        const userId = JSON.parse(userInfor).id
        const token = getTokenUtil();
        const url = getCheckCourseHasBoughtUtil(userId, courseId)

        await axios.get(
          url,
          {
            headers: {
              'Accept': '*/*',
              'Authorization': token
            }
          }
        )
        .then(_res => {
          if (_res.status === 200) {
            setHasBought(_res.data.payload)
          }
        })
      }
    }

    checkIsBought();

  }, [])

  /**
   * 
   * props
   * 
   * **/
  const props = {
    hasBougth
  }

  return <DetailView {...props} />
}

export default DetailPage