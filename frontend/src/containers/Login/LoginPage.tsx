import React, { FC, memo } from 'react';

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
import useStyles from './style';

type FormData = {
  loginCode: string;
};

interface Props {
  onSubmit: (data: FormData) => void;
}

const LoginPage: FC = () => {
  const classes = useStyles();

  const {
    register, handleSubmit, watch,
    control, errors: fieldsErrors,
  } = useForm<FormData>();
  const onSubmit = (data: any) => console.log(data);

  return (

    <Container component="main" maxWidth="xs">
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>

  );
};

export default memo(LoginPage);
