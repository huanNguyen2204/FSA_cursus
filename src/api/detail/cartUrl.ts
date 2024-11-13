const cartUrl = {
  getAll: import.meta.env.VITE_DB + "/api/cart/get-all-in-cart?accountId=",
  purchase: import.meta.env.VITE_DB + "/api/cart/purchase-cart"
}

export default cartUrl;