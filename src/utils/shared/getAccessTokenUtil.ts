const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken;
}

export default getAccessToken;