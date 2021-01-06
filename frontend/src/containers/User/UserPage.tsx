import React, {
  FC, memo, useState, useEffect,
  ChangeEvent,
} from 'react';

import { Copyright } from '@material-ui/icons';
// import ContentContainer from '../ContentContainer/ContentContainer';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm, Controller } from 'react-hook-form';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';
import useStyles from './style';
import { apiLogin } from '../../api/login';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import parseToken from '../../utils/parseToken';

type FormData = {
  loginCode: string;
};

interface Props {
  onSubmit: (data: FormData) => void;

}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const UserPage: FC = () => {
  const [isAuth, setIsAuth] = useState(!!getLocalStorageData().token.accessToken);
  if (!isAuth) return <Redirect to="/signin" />;
  const { token } = getLocalStorageData();
  const [userData, setUserData] = useState(parseToken(token.accessToken as string));

  if (userData.isAdmin) {
    return <Redirect to="/admin" />;
  }

  if (userData.isStatisticViewer) {
    return <Redirect to="/stats" />;
  }

  const classes = useStyles();

  const [user, setUser] = useState();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError]: [string, (error: string) => void] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const {
    handleSubmit,
    control, errors: fieldsErrors,
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    const response = await apiLogin(data.loginCode);

    console.log('response :>> ', response);

    if (response && response.status === 404) {
      setError('Нет соединения');
      setOpen(true);
      setSuccess(false);
      setLoading(false);
    }

    if (response && response.status === 400) {
      setError('Ошибка');
      setOpen(true);
      setSuccess(false);
      setLoading(false);
    }

    if (!response) {
      setError('Нет соединения');
      setOpen(true);
      setSuccess(false);
      setLoading(false);
    }

    if (response && response.status === 500) {
      setError(`${response.data}`);
      setOpen(true);
      setSuccess(false);
      setLoading(false);
    }
    if (response && response.token && response.refreshToken) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
      setSuccess(true);
      setLoading(false);
    }
  };

  const handleClose = async (event: ChangeEvent<unknown>, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    await setOpen(false);
  };

  // const sendLoginDataToServer =

  return (

    <Container component="main" maxWidth="xs">

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Страница Пользователя
        </Typography>

      </div>
    </Container>

  );
};

export default memo(UserPage);
