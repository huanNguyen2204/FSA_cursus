const accountController = {
  register: import.meta.env.VITE_DB + "/api/auth/register",
  login: import.meta.env.VITE_DB + "/api/auth/login"
}

export default accountController;