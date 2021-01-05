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
import useStyles from './style';
import { apiLogin } from '../../api/login';

type FormData = {
  loginCode: string;
};

interface Props {
  onSubmit: (data: FormData) => void;

}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginPage: FC = () => {
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
          Вход
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="loginCode"
            as={(
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="loginCode"
                label="Полученный код"
                autoFocus
              // error={!!fieldsErrors.loginCode?.message}
              // helperText={fieldsErrors.loginCode ? fieldsErrors.loginCode.message : null}
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required: 'Введите пожалуйста код',
              // pattern: {
              //   value: /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/i,
              //   message: 'Incorrect value',
              // },
            }}
          />
          {fieldsErrors.loginCode && <Typography variant="caption" color="error">{fieldsErrors.loginCode.message}</Typography>}
          <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              className={buttonClassname}
              disabled={loading}
            >
              Войти
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </form>
      </div>
    </Container>

  );
};

export default memo(LoginPage);
