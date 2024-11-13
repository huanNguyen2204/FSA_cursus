const getCheckCourseToCartUtil = (courseId: string, accountId: string) => {
  const url = import.meta.env.VITE_DB + `/api/cart/check-cart?accountId=${accountId}&courseId=${courseId}`;
  return url;
}

export default getCheckCourseToCartUtil