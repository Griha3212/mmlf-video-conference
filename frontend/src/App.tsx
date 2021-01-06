import React, {
  memo, FC, useState, useEffect,
} from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import history from './core/history';
import logo from './logo.svg';
import './App.css';
import getLocalStorageData from './utils/helpers/localStorage.helper';
import LoginPage from './containers/Login/LoginPage';
import { ProtectedRoutes } from './containers/ProtectedRoutes/ProtectedRoutes';
import parseToken from './utils/parseToken';
import AdminPage from './containers/Admin/AdminPage';
import UserPage from './containers/User/UserPage';

console.log('process.env.API_URL :>> ', process.env.REACT_APP_API_URL);

export const App: FC = () => {
  const [isAuth, setIsAuth] = useState(getLocalStorageData().token.accessToken);

  console.log('APP isAuth :>> ', isAuth);

  // useEffect(() => {
  //   const { token } = getLocalStorageData();

  //   if (token.accessToken && token.refreshToken) {
  //     const userData = parseToken(token.accessToken as string);
  //     console.log('userData :>> ', userData);
  //     console.log('isAuth App :>> ', isAuth);
  //     setIsAuth(true);
  //   } else {
  //     setIsAuth(false);
  //   }

  //   // if (token.accessToken && Object.keys(currentUser).length === 0) {
  //   //   // const userData = parseToken(token.accessToken as string);
  //   //   // const key = new Date().getTime() + Math.random();
  //   //   // dispatch(checkLogin(userData.data.clientData?.id, userData.data.id, token, key));
  //   //   setIsAuth(true);
  //   // } else if (token.accessToken && Object.keys(currentUser).length > 0) {
  //   //   setIsAuth(true);
  //   // } else {
  //   //   setIsAuth(false);
  //   // }
  // });

  return (

    <Router history={history}>
      <CssBaseline />
      {/* <Snackbar /> */}

      <Switch>
        <Route path="/signin" component={LoginPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/user" component={UserPage} />
        {/* TO DO page for stats viewing */}
        <Route path="/stats" component={UserPage} />

        <Route path="/" component={ProtectedRoutes} />
      </Switch>

    </Router>
  );
};

export default memo(App);
