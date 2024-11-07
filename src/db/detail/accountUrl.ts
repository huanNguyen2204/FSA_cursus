const accountUrl = {
  register: import.meta.env.VITE_DB + "/api/auth/register",
  login: import.meta.env.VITE_DB + "/api/auth/login",
  id: import.meta.env.VITE_DB + "/api/accounts/id/"
}

export default accountUrl;