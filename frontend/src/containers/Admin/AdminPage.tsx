/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/ban-types */
import React, {
  FC, memo, useState, useEffect,
  ChangeEvent, useCallback,
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
import { apiGetUser } from '../../api/user';
import parseToken from '../../utils/parseToken';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import { apiChangeActiveSpeakerInChannel, apiSetBrakeInChannel } from '../../api/admin';

type Speaker = {

  company: string;
  firstName: string;
  id: number;
  innerSystemName: string;
  isModerator: boolean;
  lastName: string;
  linkToImg: string;
  linkToPresentation: string;
  linkToZoom: string;
  topicName: string;

};

type DataForAdmin = {
  channelForShowing: {
    break: boolean, id: number, link: string,
    number: number
  },
  description: string;
  id: number;
  letter: string;
  name: string;
  speakers: Array<Speaker>

};

type FormData = {
  loginCode: string;
};

interface Props {
  onSubmit: (data: FormData) => void;

}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AdminPage: FC = () => {
  const classes = useStyles();
  const { token } = getLocalStorageData();
  const [userData, setUserData] = useState(parseToken(token.accessToken as string));

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError]: [string, (error: string) => void] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [activeSpeaker, setActiveSpeaker] = React.useState('');

  const [selectedSpeakerToActivate, setSelectedSpeakerToActivate] = React.useState('');

  const [dataForAdmin, setDataForAdmin] = React.useState<DataForAdmin>();

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

    let response;
  };

  const loadDataForAdmin = async () => {
    const response = await apiGetUser(userData.id, token);
    setDataForAdmin(response);
  };

  useEffect(() => {
    loadDataForAdmin();
  }, []);

  const handleClose = async (event: ChangeEvent<unknown>, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    await setOpen(false);
  };

  const activateSelectedSpeaker = async (speakerId: string) => {
    const response = await apiChangeActiveSpeakerInChannel(
      token,
      Number(speakerId),
      Number(dataForAdmin && dataForAdmin.channelForShowing.number),
    );

    setActiveSpeaker(`${response.lastName} ${response.firstName}`);

    console.log('response2 :>> ', response);
    // setDataForAdmin(response);
  };

  const setBreakBetweenSessions = async () => {
    const response = await apiSetBrakeInChannel(
      token,
      Number(dataForAdmin && dataForAdmin.channelForShowing.number),
    );

    setActiveSpeaker('');

    console.log('response3 :>> ', response);
    // setDataForAdmin(response);
  };

  // const sendLoginDataToServer =

  // const renderSpeakersDataForAdmin = () => {
  //   if (dataForAdmin) {
  //     dataForAdmin.speakers.map((element) => {
  //       console.log('element :>> ', element);
  //       if (!element.isModerator) {
  //         <p>
  //           {element.lastName}
  //           {' '}
  //           {element.firstName}
  //         </p>;
  //       }
  //     });
  //   }
  // };

  const renderSpeakersDataForAdmin = (element: Speaker) => {
    if (!element.isModerator) {
      return (

        <Grid container xs={12} justify="center">
          <Button
            onClick={(e) => { setSelectedSpeakerToActivate(e.currentTarget.value); }}
            value={element.id}
            data-id=""
            className={classes.speakerButton}
            variant="outlined"
            color="primary"
          >
            {`${element.lastName}  ${element.firstName}`}
          </Button>
        </Grid>

      );
    }
  };

  return (
    <>
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
            Страница Администратора

          </Typography>
          <p>
            {' '}
            {dataForAdmin && dataForAdmin.letter}
          </p>

        </div>

      </Container>

      <Grid container>
        <Grid item container xs={6}>

          <Grid item xs={6}>
            {
              dataForAdmin && dataForAdmin.speakers.map(
                (element) => renderSpeakersDataForAdmin(element),
              )
            }
          </Grid>

          <Grid item justify="center" xs={6}>
            <p className={classes.textCenter}>
              {' '}
              <Button onClick={() => activateSelectedSpeaker(selectedSpeakerToActivate)} variant="contained" color="primary">Активировать выбранного спикера</Button>
            </p>

            <p className={classes.textCenter}>
              {' '}
              <Button onClick={() => setBreakBetweenSessions()} variant="contained" color="primary">Активировать перерыв</Button>
              {' '}
            </p>
          </Grid>

        </Grid>

        <Grid item xs={6}>
          <p>
            Активный спикер:
            {' '}
            {`${activeSpeaker}`}
          </p>
        </Grid>

      </Grid>

    </>
  );
};

export default memo(AdminPage);
