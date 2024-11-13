const getAddToCartUtil = (courseId: string, accountId: string) => {
  const url = import.meta.env.VITE_DB + `/api/cart/add-to-cart?accountId=${accountId}&courseId=${courseId}`;
  return url;
}

export default getAddToCartUtil