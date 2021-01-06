import React, {
  FC, memo, useEffect, useState,
} from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import AdminPage from '../Admin/AdminPage';

import LoadingPage from '../../components/LoadingPage/LoadingPage';
import ContentContainer from '../ContentContainer/ContentContainer';

import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import { parseToken } from '../../utils/parseToken';
import LoginPage from '../Login/LoginPage';
import UserPage from '../User/UserPage';

interface UserData {
  isAdmin: boolean;
}

export const ProtectedRoutes: FC = () => {
  const [isAuth, setIsAuth] = useState(!!getLocalStorageData().token.accessToken);
  if (!isAuth) return <Redirect to="/signin" />;
  const { token } = getLocalStorageData();

  const [userData, setUserData] = useState(parseToken(token.accessToken as string));

  // const loadUserInfoFromLocalStorage = async () => {
  //   if (token.accessToken && token.refreshToken) {
  //     setUserData(parseToken(token.accessToken as string));
  //     console.log('here admin :>> ');
  //     console.log('userData', parseToken(token.accessToken as string));
  //     setIsAuth(true);
  //   } else {
  //     setIsAuth(false);
  //   }
  // };

  // loadUserInfoFromLocalStorage();

  // useEffect(() => {
  //   loadUserInfoFromLocalStorage();

  //   // if (token.accessToken && token.refreshToken) {
  //   //   setUserData(parseToken(token.accessToken as string));
  //   //   console.log('here admin :>> ');
  //   //   console.log('userData', userData);
  //   //   setIsAuth(true);
  //   // } else {
  //   //   setIsAuth(false);
  //   // }
  // }, []);

  console.log('userData ProtectedRoutes :>> ', userData);

  // // if (!isAdmin) return <Redirect to="/signin" />;
  if (userData.isAdmin) return <Redirect to="/admin" />;
  if (!userData.isStatisticViewer) return <Redirect to="/stats" />;
  if (!userData.isAdmin) return <Redirect to="/user" />;

  // if (isAuth && !userData?.isAdmin) return <Redirect to="/user" />;
  // if (isAuth && userData?.isAdmin) return <Redirect to="/admin" />;

  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isLoggedIn ? (
  //           <Component {...props} />
  //         ) : (
  //             <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  //           )
  //       }
  //     />
  //   )
  // }

  return (

    <ContentContainer>
      <Switch>
        {(!userData?.isAdmin) && <Route path="/user" component={UserPage} />}
        {(userData?.isAdmin) && <Route path="/admin" component={AdminPage} />}
      </Switch>
    </ContentContainer>
  );

  // return (

  //   <Switch>
  //     {(userData && userData.isAdmin) && <Route path="/admin" component={AdminPage} />}
  //   </Switch>

  // );
};

export default memo(ProtectedRoutes);
