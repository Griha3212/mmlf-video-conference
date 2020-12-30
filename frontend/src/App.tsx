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

export const App: FC = () => {
  const [isAuth, setIsAuth] = useState(!!getLocalStorageData().token);
  return (
    <Router history={history}>
      <CssBaseline />
      {/* <Snackbar /> */}

      <Switch>
        <Route path="/" component={isAuth ? LoginPage : LoginPage} />
      </Switch>

    </Router>
  );
};

export default memo(App);
