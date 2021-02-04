/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {
  FC, memo, useState, useEffect,
} from 'react';
import {
  useMediaQuery, Grid, Typography, Button, Hidden,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Redirect, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import useStyles from './style';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import parseToken from '../../utils/parseToken';
import VideoPlayerMain from '../../components/VideoPlayerMain/VideoPlayerMain';
import SessionInfoBlock from '../../components/SessionInfoBlock/SessionInfoBlock';
import topMMLFLogo from '../../img/mmlfLogo2021.svg';
import SpeakersSessionInfoBlock from '../../components/SpeakersSessionInfoBlock/SpeakersSessionInfoBlock';
import {
  apiGetUser, apiUserUpdateWatchedSpeakers,
  apiGetAllChannels, apiUserChangeActiveChannel,
  apiUserUpdateWatchedSpeakersAllInSession,
} from '../../api/user';
import lerua from '../../img/partnersImg/lerua.svg';
import severstal from '../../img/partnersImg/severstal.svg';
import cocalCola from '../../img/partnersImg/coca-cola.svg';
import footerMMLFLogo from '../../img/footerMMLFLogo.svg';
import vk from '../../img/socialImg/vk.svg';
import facebook from '../../img/socialImg/facebook.svg';
import youtube from '../../img/socialImg/youtube.svg';
import cclFooter from '../../img/ccl_footer.svg';
import {
  DataForUser, Vote, Channel, Speaker, DataFromSocket,
} from '../../interfaces/allInterfaces';

const socket = io(`${process.env.REACT_APP_API_URL}`, { transports: ['websocket'] });

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

  const findAndSetCurrentSpeakerRate = (votes: Vote[] | undefined) => {
    if (activeSpeakerInfo && votes) {
      const currentSpeakerRate2 = votes.find((element: Vote) => element.speaker.id
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
          (element: Speaker) => element.isModerator,
        ));

      setActiveSessionSpeakersInfo(response && response.channelUserInfo
        && response.channelUserInfo.activeSession
        && response.channelUserInfo.activeSession.speakers);

      socket.emit('connectToChannelRoom', response.foundUser.activeChannel);
    }
  };

  const updateWatchedSpeakersSingleSpeaker = async (speakerId: number) => {
    await apiUserUpdateWatchedSpeakers(speakerId, userData.id, token);
    loadDataForUser();
  };

  const updateWatchedSpeakersAllSpeakersInSession = async (sessionId: number) => {
    await apiUserUpdateWatchedSpeakersAllInSession(sessionId, userData.id, token);
    loadDataForUser();
  };

  // watch timer functional

  // if there is active speaker, update timer every seconds,
  // until 10, then speaker status set to viewed
  // if type of session voteForAllSession another logic
  useEffect(() => {
    const interval = setInterval(() => {
      // count for single speaker
      if (activeSpeakerInfo && dataForUser &&
        !dataForUser.channelUserInfo.activeSession.voteFoAllSession) {
        let initialValueCurrentSpeaker = localStorage.getItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`);

        if (!initialValueCurrentSpeaker) {
          localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, '0');
        } else {
          if (initialValueCurrentSpeaker !== 'viewed') {
            if (initialValueCurrentSpeaker === '5') {
              localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, 'viewed');
              // send to back viewed status
              updateWatchedSpeakersSingleSpeaker(activeSpeakerInfo.id);
            } else {
              initialValueCurrentSpeaker = String(+initialValueCurrentSpeaker + 1);
              localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, initialValueCurrentSpeaker);
            }
          }
        }
      }

      // count for complete session
      if (activeSpeakerInfo && dataForUser &&
        dataForUser.channelUserInfo.activeSession.voteFoAllSession) {
        let initialValueCurrentSession = localStorage.getItem(`${String(dataForUser.channelUserInfo.activeSession.name)}`);

        if (!initialValueCurrentSession) {
          localStorage.setItem(`${String(dataForUser.channelUserInfo.activeSession.name)}`, '0');
        } else {
          if (initialValueCurrentSession !== 'viewed') {
            if (initialValueCurrentSession === '5') {
              localStorage.setItem(`${String(dataForUser.channelUserInfo.activeSession.name)}`, 'viewed');
              // send to back viewed status
              updateWatchedSpeakersAllSpeakersInSession(
                dataForUser.channelUserInfo.activeSession.id,
              );
            } else {
              initialValueCurrentSession = String(+initialValueCurrentSession + 1);
              localStorage.setItem(`${String(dataForUser.channelUserInfo.activeSession.name)}`, initialValueCurrentSession);
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [activeSpeakerInfo]);

  useEffect(() => {
    socket.on('connectToPersonalRoom', (dataFromSocket: DataFromSocket) => {
      if (dataFromSocket.message === 'disconnect current user') {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        history.push('/');
      }

      if (dataFromSocket.message === 'update current speakers votes') {
        loadDataForUser();
        // setActiveSessionSpeakersAllRates(data.votes);
      }

      if (dataFromSocket.message === 'update user info') {
        loadDataForUser();
      }
    });
    return () => {
      socket.off('connectToPersonalRoom');
    };
  });

  useEffect(() => {
    socket.on('connectToChannelRoom', (dataFromSocket: DataFromSocket) => {
      loadDataForUser();

      if (dataFromSocket.message === 'update') {
        loadDataForUser();
      }
    });
    return () => {
      socket.off('connectToChannelRoom');
    };
  });

  useEffect(() => {
    loadDataForUser();
  }, []);

  useEffect(() => {
    // loadDataForUser();
    findAndSetCurrentSpeakerRate(dataForUser && dataForUser.foundUser.votes);
    setActiveSessionSpeakersAllRates(dataForUser && dataForUser.foundUser.votes);
  }, [activeSpeakerInfo]);

  // const sendLoginDataToServer =

  const changeActiveChannel = async (channelNumber: number) => {
    await apiUserChangeActiveChannel(channelNumber, userData.id, token);
    loadDataForUser();
  };

  const renderSessionLetterOfTheSessionInChannel = (channel: any) => {
    if (channel) {
      if (!channel.activeSession && channel.break) {
        return channel.startChannelSessionLetter;
      }

      if (channel.activeSession && channel.break) {
        return channel.activeSession.nextSessionLetter;
      }

      if (channel.activeSession.letter) {
        return channel.activeSession.letter;
      } else return 'Сессия #';
    } else return 'Сессия #';
  };

  const renderSessionDescriptionOfTheSessionInChannel = (channel: any) => {
    if (channel) {
      if (!channel.activeSession && channel.break) {
        return channel.startChannelSessionDescription;
      }

      if (channel.activeSession && channel.break) {
        return channel.activeSession.nextSessionDescription;
      }

      if (channel.activeSession.description) {
        return channel.activeSession.description;
      } else return 'Назавание сессии';
    } else return 'Назавание сессии';
  };

  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isXs = useMediaQuery(theme.breakpoints.up('xs'));

  const calculateHeightOfSmallChannelWindow = () => {
    if (isXl) return '290px';
    if (isLg) return '193px';
    if (isMd) return '160px';
    if (isXs) return '227px';
  };

  const calculateHeightOfBigChannelWindow = () => {
    if (isXl) return '720px';
    if (isLg) return '720px';
    if (isMd) return '720px';
    if (isSm) return '300px';
    if (isXs) return '300px';
  };

  const renderOtherSessions = (channel: any) => {
    if (channel.number !== dataForUser!.channelUserInfo.number) {
      return (
        <>
          <Grid
            item
            container
            className={classes.channelContainer}
            id={channel.number}
            onClick={(e) => changeActiveChannel(+e.currentTarget.id)}
          >

            <VideoPlayerMain height={calculateHeightOfSmallChannelWindow()} classNameInner="channelVideoContainer" videoURL={channel.link} />

            <Grid item xs={12} className={classes.channelContainerBottomPart}>

              <p className={classes.chooseChannelSessionLetter}>
                {renderSessionLetterOfTheSessionInChannel(channel)}
              </p>
              <p className={classes.chooseChannelSessionDescription}>
                {renderSessionDescriptionOfTheSessionInChannel(channel)}
              </p>

            </Grid>

          </Grid>
        </>
      );
    }
  };

  return (
    <>
      {/* header pc */}
      <Hidden xsDown>
        <Grid
          container
          xl={12}
          justify="space-between"
          className={`${classes.mainContainer} ${classes.darkBlueBckgTop} ${classes.topPart}`}
        >

          <Grid item className={classes.myAuto} lg={3} xl={3} sm={4}>
            <img
              onClick={() => { window.open('https://mmlf.ru/', '_blank'); }}
              className={classes.mmlfTopLogoImg}
              src={topMMLFLogo}
              alt=""
            />
          </Grid>

          <Grid item className={classes.myAuto} xl={6} lg={6} sm={4}>
            <Typography className={classes.conferenceTopText} align="center">Конференция</Typography>
          </Grid>

          <Grid item className={classes.myAuto} xl={3} lg={3} sm={4}>
            <Button
              onClick={() => { window.open('https://www.mmlf.ru/programma-mmlf-2021.html', '_blank'); }}
              className={classes.loadProgramButton}
            >
              Скачать программу
            </Button>
          </Grid>

        </Grid>
      </Hidden>

      {/* header mobile */}
      <Hidden only={['lg', 'xl', 'md', 'sm']}>
        <Grid
          container
          xl={12}
          justify="space-between"
          className={`${classes.mainContainer} ${classes.darkBlueBckgTop} ${classes.topPart}`}
        >

          <Grid item className={classes.myAuto} xs={6}>
            <p style={{ marginBottom: '0px' }}>
              <img
                onClick={() => { window.open('https://mmlf.ru/', '_blank'); }}
                className={classes.mmlfTopLogoImg}
                src={topMMLFLogo}
                alt=""
              />

            </p>
            <p style={{ marginTop: '5px' }}><Typography className={classes.conferenceTopText} align="center">Конференция</Typography></p>

          </Grid>

          <Grid item className={classes.myAuto} sm={6} xs={6}>
            <Button
              onClick={() => { window.open('https://www.mmlf.ru/programma-mmlf-2021.html', '_blank'); }}
              className={classes.loadProgramButton}
            >
              Скачать программу
            </Button>
          </Grid>

        </Grid>
      </Hidden>

      <Grid container className={classes.mainVideoContainer} xl justify="center">

        <VideoPlayerMain
          height={calculateHeightOfBigChannelWindow()}
          classNameInner="mainVideoContainerBig"
          videoURL={dataForUser && dataForUser.channelUserInfo.link}
        />

      </Grid>

      <Grid
        className={dataForUser && dataForUser.channelUserInfo.activeSession
          && dataForUser.channelUserInfo.activeSession.name === 'LogistOfTheYear' ?
          classes.redBckgContainerShort : classes.redBckgContainer}
        container
        item
        justify="center"
      />

      {/* first block (active speaker) info ---------------------------*/}
      <Grid item className={classes.innerContainer}>
        <SessionInfoBlock
          currentSessionLetter={activeSessionLetter}
          currentSessionDescription={activeSessionDescription}
          currentSpeakerInfo={activeSpeakerInfo}
          token={token}
          userId={user.id}
          currentSpeakerRate={activeSpeakerRate}
          currentUserData={dataForUser}
          key={dataForUser}
        />

      </Grid>

      {/* block with all speakers in session---------------------------------------------------
      render if not LogistOfTheYear */}
      {dataForUser && dataForUser.channelUserInfo.activeSession
        && dataForUser.channelUserInfo.activeSession.name === 'LogistOfTheYear' ? null : (
          <Grid item className={classes.innerContainer}>

            <SpeakersSessionInfoBlock
              currentModeratorInfo={activeModeratorInfo}
              currentSessionSpeakersInfo={activeSessionSpeakersInfo}
              currentSessionSpeakersAllRates={activeSessionSpeakersAllRates}
              currentUserData={dataForUser}
              token={token}
              userId={user.id}
              key={activeSessionSpeakersAllRates}
            />

          </Grid>
        )}

      {/* show/hide OtherChannelsBlock-------------------------------------------------------- */}
      {dataForUser && dataForUser.foundUser.showOtherChannelsBlock ? (
        <Grid container className={classes.changeSessionMainContainer} xl>

          <Grid item className={classes.innerContainer}>
            <Grid xs={12} item container className={`${classes.mainContainerBckgChangeSession} ${classes.mainContainerBckgChangeSessionFirst}`}>
              <p className={classes.speakersBlockHeader}>Сменить сессию</p>
            </Grid>

            <Grid xs={12} item justify="space-between" container className={classes.mainContainerBckgChangeSession}>
              {allChannelsInfo && dataForUser
                && allChannelsInfo.map((element) => renderOtherSessions(element))}
            </Grid>

          </Grid>

        </Grid>
      ) : null}

      <Grid container className={classes.partnersContainer} justify="space-around">

        <Grid item className={classes.innerContainer}>
          <Grid xs={12} item container className={classes.mainContainerBckgChangeSession}>
            <p className={`${classes.speakersBlockHeader} ${classes.partnersHeader}`}>Партнеры сессии</p>
          </Grid>

          <Grid justify="space-between" container item className={`${classes.mainContainerBckgChangeSession} ${classes.partnersContainerImg}`}>
            <Grid
              className={`${classes.myAuto} ${classes.partnerImgContainer}`}
              item
              xs={8}
              sm={12}
              md={4}
              xl={3}
              lg={3}
            >

              <img className={`${classes.imgFluid} ${classes.imgPartner}`} src={lerua} alt="" />

            </Grid>

            <Grid
              className={`${classes.myAuto} ${classes.partnerImgContainer}`}
              item
              xs={8}
              sm={12}
              md={4}
              xl={3}
              lg={3}
            >

              <img className={`${classes.imgFluid} ${classes.imgPartner}`} src={severstal} alt="" />

            </Grid>

            <Grid
              className={`${classes.myAuto} ${classes.partnerImgContainer}`}
              item
              xs={8}
              sm={12}
              md={4}
              xl={3}
              lg={3}
            >

              <img className={`${classes.imgFluid} ${classes.imgPartner}`} src={cocalCola} alt="" />

            </Grid>
          </Grid>
        </Grid>

      </Grid>

      {/* footer--------------------------------------------------------------------------- */}
      <Grid container>

        <Grid item container justify="space-around" className={classes.footerContainer}>

          <Grid justify="space-between" container item className={classes.footerContainerInner}>

            <Grid xs={12} md={3} xl={3} lg={3} className={`${classes.myAuto} ${classes.footerLogoContainer}`} item>
              <img
                onClick={() => { window.open('https://mmlf.ru/', '_blank'); }}
                className={`${classes.cursorPointer} ${classes.mmlfFooterLogo}`}
                src={footerMMLFLogo}
                alt=""
              />

            </Grid>
            <Grid xs={12} md={4} xl={3} lg={3} className={classes.myAuto} item>
              <p className={classes.footerTextDate}>15-19 февраля 2021</p>
            </Grid>
            <Grid xs={8} sm={4} md={2} xl={2} lg={2} className={classes.myAuto} item>
              <Grid container item justify="space-around">
                <Grid item>
                  <img
                    onClick={() => { window.open('https://vk.com/ccl_logistics', '_blank'); }}
                    className={`${classes.cursorPointer} ${classes.socialFooterImg}`}
                    src={vk}
                    alt=""
                  />
                </Grid>
                <Grid item>
                  <img
                    onClick={() => { window.open('https://www.facebook.com/logcouncil/', '_blank'); }}
                    className={`${classes.cursorPointer} ${classes.socialFooterImg}`}
                    src={facebook}
                    alt=""
                  />
                </Grid>
                <Grid item>
                  <img
                    onClick={() => { window.open('https://www.youtube.com/channel/UCtWoEZ_O5QBtBQHg4Z5OM2A', '_blank'); }}
                    className={`${classes.cursorPointer} ${classes.socialFooterImg}`}
                    src={youtube}
                    alt=""
                  />
                </Grid>

              </Grid>

            </Grid>
            <Grid xs={12} md={3} xl={2} lg={2} className={`${classes.myAuto} ${classes.footerLogoAndPhone}`} item>
              <p>
                <img
                  onClick={() => { window.open('https://ccl-logistics.ru/', '_blank'); }}
                  className={classes.cursorPointer}
                  src={cclFooter}
                  alt=""
                />

              </p>
              <p><a className={classes.bottomLink} href="tel:+7 (495) 763-91-95">+7 (495) 763-91-95</a></p>

            </Grid>
          </Grid>

        </Grid>

      </Grid>

    </>
  );
};

export default memo(UserPage);
