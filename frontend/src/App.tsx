import React, {
  memo, FC, useState, useEffect,
} from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import history from './core/history';
import logo from './logo.svg';
import './App.css';

export const App: FC = () => (
  <Router history={history}>
    {/* <CssBaseline /> */}
    {/* <Snackbar /> */}
    <MainContainer>
      <Switch>
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/changePassword" component={PasswordResetEmail} />
        <Route exact path="/new_password/:token+" component={PasswordReset} />
        <Route path="/confirm/:token+" component={ConfirmPage} />
        <Route path="/confirm_new_password/:token?" component={ConfirmNewPasswordPage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/privacyPolicy" component={PrivacyPolicyPage} />
        <Route exact path="/termsOfService" component={TermsAndServicesPage} />
        <Route exact path="/notfound" component={NotFoundPage} />
        <Route path="/" component={isAuth ? PrivateRoute : PublicMarketPlace} />
      </Switch>
    </MainContainer>
  </Router>
);

export default memo(App);
