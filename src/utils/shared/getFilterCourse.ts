import { apiUrl } from "@/api/api.url"

const getFilterUtil = (page: any) => {
  const url = apiUrl.filterUrl.filterAll + `/${page}/12`
  return url;
}

export default getFilterUtil