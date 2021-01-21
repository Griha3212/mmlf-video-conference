/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/ban-types */
import React, {
  FC, memo, useState, useEffect,
  ChangeEvent,
} from 'react';

// import ContentContainer from '../ContentContainer/ContentContainer';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './style';
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

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AdminPage: FC = () => {
  const classes = useStyles();
  const { token } = getLocalStorageData();
  const [userData] = useState(parseToken(token.accessToken as string));

  const [error]: [string, (error: string) => void] = useState('');
  const [open, setOpen] = useState(false);

  const [activeSpeaker, setActiveSpeaker] = useState('');

  const [selectedSpeakerToActivate, setSelectedSpeakerToActivate] = useState('');

  const [dataForAdmin, setDataForAdmin] = useState<DataForAdmin>();
  const [activeButtonId, setActiveButtonId] = useState<number>();

  const loadDataForAdmin = async () => {
    const response = await apiGetUser(userData.id, token);
    setDataForAdmin(response);

    if (response && response.channelForShowing && response.channelForShowing.activeSpeaker) {
      setActiveSpeaker(`${response.channelForShowing.activeSpeaker.lastName} ${response.channelForShowing.activeSpeaker.firstName}`);
      setActiveButtonId(response.channelForShowing.activeSpeaker.id);
    }
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
  };

  const setBreakBetweenSessions = async () => {
    setActiveSpeaker('');
  };

  const renderSpeakersDataForAdmin = (element: Speaker) => {
    if (!element.isModerator) {
      return (

        <Grid container xs={12} justify="center">
          <Button
            onClick={(e) => {
              setSelectedSpeakerToActivate(e.currentTarget.value);
              setActiveButtonId(Number(e.currentTarget.value));
            }}
            value={element.id}
            data-id=""
            className={activeButtonId === element.id ?
              classes.speakerButtonActive : classes.speakerButton}
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
          <p className={classes.sessionLetter}>
            {dataForAdmin && dataForAdmin.letter}
          </p>

        </div>

      </Container>

      <Grid container justify="space-around">

        <Grid item xs={4}>
          {
            dataForAdmin && dataForAdmin.speakers.map(
              (element) => renderSpeakersDataForAdmin(element),
            )
          }
        </Grid>

        <Grid item justify="center" xs={4}>
          <p className={`${classes.textCenter} ${classes.activateSelectedSpeakerP}`}>
            <Button onClick={() => activateSelectedSpeaker(selectedSpeakerToActivate)} variant="contained" color="primary">Активировать выбранного спикера</Button>
          </p>

          <p className={classes.textCenter}>
            <Button onClick={() => setBreakBetweenSessions()} variant="contained" color="primary">Активировать перерыв</Button>
          </p>
        </Grid>

        <Grid item xs={4}>
          <p className={classes.activeSpeakerText}>
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
