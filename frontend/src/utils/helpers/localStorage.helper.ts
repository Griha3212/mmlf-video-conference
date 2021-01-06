const getLocalStorageData = (): any => {
  const accessToken = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  return {
    token: { accessToken, refreshToken },
  };
};

export default getLocalStorageData;
