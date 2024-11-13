const getDeleteCartUtil = (courseId: string, accountId: string) => {
  const url = import.meta.env.VITE_DB + `/api/cart/delete-course-in-cart?accountId=${accountId}&courseId=${courseId}`;
  return url;
}

export default getDeleteCartUtil