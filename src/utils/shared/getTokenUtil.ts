const getTokenUtil = () => {
  const lcStr = localStorage.getItem('userInfor');

  let token = 'Bearer ';

  if (lcStr != null) {
    token += JSON.parse(lcStr).accessToken;
  }

  return token;
};

export default getTokenUtil;
