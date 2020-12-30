const getLocalStorageData = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  return {
    token: { accessToken, refreshToken },
  };
};

export default getLocalStorageData;
