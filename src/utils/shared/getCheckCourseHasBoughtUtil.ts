import { apiUrl } from "@/api/api.url"

const getCheckCourseHasBoughtUtil = (accountId: any, courseId: any) => {
  const url = apiUrl.cartUrl.checkCourseHasBought + "?" +`accountId=${accountId}&courseId=${courseId}`
  return url;
}

export default getCheckCourseHasBoughtUtil