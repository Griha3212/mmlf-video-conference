/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {
  FC, memo, useState, useEffect,
  ChangeEvent,
  useReducer,
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
import { Redirect, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import useStyles from './style';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import parseToken from '../../utils/parseToken';
import VideoPlayerMain from '../../components/VideoPlayerMain/VideoPlayerMain';
import SessionInfoBlock from '../../components/SessionInfoBlock/SessionInfoBlock';
import topMMLFLogo from '../../img/mmlfLogo2021.svg';
import SpeakersSessionInfoBlock from '../../components/SpeakersSessionInfoBlock/SpeakersSessionInfoBlock';
import { apiGetUser, apiUserUpdateWatchedSpeakers, apiGetAllChannels } from '../../api/user';

type DataForUser = {
  channelUserInfo: {
    break: boolean, id: number, link: string,
    number: number
  },
  channelForShowing: {
    break: boolean, id: number, link: string,
    number: number
  },
  description: string;
  id: number;
  letter: string;
  name: string;
  speakers: Array<Speaker>

  foundUser: {
    votes: Array<Vote>
    id: number;
  }

};

type Vote = {

  createdAt: Date;
  id: number;
  rate: number;
  speaker: Speaker

};

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

type Channel = {

  break: boolean, id: number, link: string,
  number: number

};

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const socket = io(`${process.env.REACT_APP_API_URL}`);

const UserPage: FC = () => {
  const [isAuth] = useState(!!getLocalStorageData().token.accessToken);
  if (!isAuth) return <Redirect to="/signin" />;
  const { token } = getLocalStorageData();
  const [userData] = useState(parseToken(token.accessToken as string));

  if (userData.isAdmin) {
    return <Redirect to="/admin" />;
  }

  if (userData.hasAccessToStatisticPage) {
    return <Redirect to="/stats" />;
  }

  const classes = useStyles();

  const [user] = useState(parseToken(token.accessToken as string));
  const history = useHistory();

  const [error]: [string, (error: string) => void] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [dataForUser, setDataForUser] = React.useState<DataForUser>();

  // active session info
  const [activeSessionLetter, setActiveSessionLetter] = React.useState<DataForUser>();
  const [activeSessionDescription, setActiveSessionDescription] = React.useState<DataForUser>();

  // active speaker info
  const [activeSpeakerInfo, setActiveSpeakerInfo] = React.useState<DataForUser>();
  const [activeSpeakerRate, setActiveSessionSpeakersRate] = React.useState<number>();

  // active moderator info
  const [activeModeratorInfo, setActiveModeratorInfo] = React.useState<DataForUser>();

  // active session speakers info
  const [activeSessionSpeakersInfo, setActiveSessionSpeakersInfo] = React.useState<DataForUser>();
  const [activeSessionSpeakersAllRates, setActiveSessionSpeakersAllRates]
    = React.useState<Vote[]>();

  // all channels info

  const [allChannelsInfo, setAllChannelsInfo] = React.useState<Channel[]>();

  // will start hook again if user will be changed
  useEffect(() => {
    socket.emit('connectToPersonalRoom', user.id);
  }, []);

  // on reconnect of socket
  useEffect(() => {
    socket.on('giveMeConnectionInfo', () => {
      // connect to personalRoom
      socket.emit('connectToPersonalRoom', user.id);
      // connect to channelRoom
      socket.emit('connectToChannelRoom', user.activeChannel);
    });
    return () => {
      socket.off('giveMeConnectionInfo');
    };
  }, []);

  console.log('dataForUser :>> ', dataForUser);

  const findAndSetCurrentSpeakerRate = (votes: any) => {
    if (activeSpeakerInfo && votes) {
      const currentSpeakerRate2 = votes.find((element: any) => element.speaker.id
        === activeSpeakerInfo.id);

      setActiveSessionSpeakersRate(currentSpeakerRate2 && currentSpeakerRate2.rate);
    }
  };

  const loadDataForUser = async () => {
    const response = await apiGetUser(userData.id, token);
    setDataForUser(response);

    const response2 = await apiGetAllChannels(userData.id, token);
    setAllChannelsInfo(response2);

    if (response) {
      setActiveSessionLetter(response && response.channelUserInfo
        && response.channelUserInfo.activeSession && response.channelUserInfo.activeSession.letter);

      setActiveSessionDescription(response && response.channelUserInfo
        && response.channelUserInfo.activeSession
        && response.channelUserInfo.activeSession.description);

      setActiveSpeakerInfo(response && response.channelUserInfo
        && response.channelUserInfo.activeSpeaker);

      setActiveModeratorInfo(response && response.channelUserInfo
        && response.channelUserInfo.activeSession &&
        response.channelUserInfo.activeSession.speakers.find(
          (element: any) => element.isModerator,
        ));

      setActiveSessionSpeakersInfo(response && response.channelUserInfo
        && response.channelUserInfo.activeSession
        && response.channelUserInfo.activeSession.speakers);

      socket.emit('connectToChannelRoom', response.foundUser.activeChannel);
    }
  };

  const updateWatchedSpeakers = async (speakerId: number) => {
    await apiUserUpdateWatchedSpeakers(speakerId, userData.id, token);
    loadDataForUser();
  };

  // watch timer functional

  // if there is active speaker, update timer every seconds,
  // until 10, then speaker status set to viewed
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSpeakerInfo) {
        console.log('This will run every second!');
        let initialValueCurrentSpeaker = localStorage.getItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`);

        if (!initialValueCurrentSpeaker) {
          localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, '0');
        } else {
          if (initialValueCurrentSpeaker !== 'viewed') {
            if (initialValueCurrentSpeaker === '5') {
              localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, 'viewed');
              // TO DO, send to back viewed status
              updateWatchedSpeakers(activeSpeakerInfo.id);
            } else {
              initialValueCurrentSpeaker = String(+initialValueCurrentSpeaker + 1);
              localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, initialValueCurrentSpeaker);
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [activeSpeakerInfo]);

  console.log('activeSpeakerInfo :>> ', activeSpeakerInfo);

  useEffect(() => {
    socket.on('connectToPersonalRoom', (data: any) => {
      if (data.message === 'disconnect current user') {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        history.push('/');
      }

      if (data.message === 'update current speakers votes') {
        loadDataForUser();
        setActiveSessionSpeakersAllRates(data.votes);

        // findAndSetCurrentSpeakerRate(data.votes);
        // forceUpdate();
      }
    });
    return () => {
      socket.off('connectToPersonalRoom');
    };
  });

  useEffect(() => {
    socket.on('connectToChannelRoom', (data: any) => {
      setActiveSpeakerInfo(data.updatedSpeaker);
      loadDataForUser();
    });
    return () => {
      socket.off('connectToChannelRoom');
    };
  });

  const handleClose = async (event: ChangeEvent<unknown>, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    await setOpen(false);
  };

  useEffect(() => {
    loadDataForUser();
  }, []);

  useEffect(() => {
    // loadDataForUser();
    findAndSetCurrentSpeakerRate(dataForUser && dataForUser.foundUser.votes);
    setActiveSessionSpeakersAllRates(dataForUser && dataForUser.foundUser.votes);
  }, [activeSpeakerInfo]);

  // const sendLoginDataToServer =

  const renderOtherSessions = (channel: any) => {
    if (channel.number !== dataForUser!.channelUserInfo.number) {
      return (

        <Grid item container className={classes.channelContainer}>

          <Grid item xs={12}>
            {' '}
            <VideoPlayerMain classNameInner="channelVideoContainer" videoURL={channel.link} />
          </Grid>
          <Grid item xs={12} className={classes.channelContainerBottomPart}>

            <p>Сессия #</p>
            <p>
              Название сессии
              до 70 символов

            </p>

          </Grid>

        </Grid>

      );
    }
  };

  // null

  console.log('AllChannelsInfo :>> ', allChannelsInfo);

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
            Страница Пользователя
          </Typography>

        </div>

      </Container>

      {/* header */}
      <Grid container xl justify="space-between" className={`${classes.mainContainer} ${classes.darkBlueBckg} ${classes.topPart}`}>

        <Grid item className={classes.myAuto} xl={3}>
          <img className={classes.mmlfTopLogoImg} src={topMMLFLogo} alt="" />
        </Grid>

        <Grid item className={classes.myAuto} xl={6}>
          <Typography className={classes.conferenceTopText} align="center">Конференция</Typography>
        </Grid>

        <Grid item className={classes.myAuto} xl={3}>
          <Button className={classes.loadProgramButton}>Скачать программу</Button>
        </Grid>

      </Grid>

      <Grid container xl justify="center">

        <VideoPlayerMain videoURL="https://facecast.net/v/pybh3r" />

      </Grid>

      <Grid className={classes.redBckgContainer} container item justify="center">

        <Grid item className={classes.innerContainer} justify="center">
          {/* first block (active speaker) info */}
          <SessionInfoBlock
            currentSessionLetter={activeSessionLetter}
            currentSessionDescription={activeSessionDescription}
            currentSpeakerInfo={activeSpeakerInfo}
            token={token}
            userId={user.id}
            currentSpeakerRate={activeSpeakerRate}

          />

        </Grid>

        <Grid item className={classes.innerContainer} justify="center">
          {console.log('activeSessionSpeakersAllRates :>> ', activeSessionSpeakersAllRates)}
          {/* block with all speakers in session */}
          <SpeakersSessionInfoBlock
            currentModeratorInfo={activeModeratorInfo}
            currentSessionSpeakersInfo={activeSessionSpeakersInfo}
            currentSessionSpeakersAllRates={activeSessionSpeakersAllRates}
            dataForUser={dataForUser}
            key={activeSessionSpeakersAllRates}
          />

        </Grid>
      </Grid>

      <Grid container className={classes.changeSessionMainContainer} xl>

        <Grid item className={classes.innerContainer}>
          <Grid xs={12} item container className={classes.mainContainerBckg}>
            <p className={classes.speakersBlockHeader}>Сменить сессию</p>
          </Grid>

          <Grid xs={12} item justify="space-between" container className={classes.mainContainerBckg}>
            {allChannelsInfo && dataForUser
              && allChannelsInfo.map((element) => renderOtherSessions(element))}
          </Grid>

        </Grid>

      </Grid>

    </>
  );
};

export default memo(UserPage);
