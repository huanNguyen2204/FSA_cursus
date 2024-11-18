const cartUrl = {
  getAll: import.meta.env.VITE_DB + "/api/cart/get-all-in-cart?accountId=",
  purchase: import.meta.env.VITE_DB + "/api/cart/purchase-cart",
  payment: import.meta.env.VITE_DB + "/api/cart/get-all-cart",
  getAllCourseById: import.meta.env.VITE_DB + "/api/cart/get-my-courses",
  checkCourseHasBought: import.meta.env.VITE_DB + "/api/cart/check-course-has-bought",
  buyNow: import.meta.env.VITE_DB + "/api/cart/buy-now"
}

export default cartUrl;