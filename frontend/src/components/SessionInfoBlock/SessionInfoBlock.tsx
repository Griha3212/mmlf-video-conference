/* eslint-disable no-lone-blocks */
import React, { memo, useEffect } from 'react';
import {
  Grid, Typography, Button,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import noAvatar from '../../img/speakersImg/noAvatar.svg';
import { apiVoteForSpeaker } from '../../api/user';

const SessionInfoBlock = (props: any) => {
  const {
    currentSpeakerInfo, currentSpeakerRate, currentUserData,
  } = props;

  const classes = useStyles();
  const [rate, setRate] = React.useState<number | null>(currentSpeakerRate || 0);
  const [closedAccess, setClosedAccess] = React.useState(true);

  // check timers logic-----------------------------------------------
  useEffect(() => {
    setRate(currentSpeakerRate);
  }, [currentSpeakerRate]);

  useEffect(() => {
    setClosedAccess(true);

    const currentSpeakerLocalStorageData = localStorage.getItem(
      `${String(currentSpeakerInfo && currentSpeakerInfo.id)}`,
    );

    if (currentSpeakerLocalStorageData === 'viewed') {
      setClosedAccess(false);
    }
  }, [currentSpeakerInfo]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isVisible) {
  //       if (currentSpeakerInfo) {
  //         const currentSpeakerLocalStorageData = localStorage.getItem(
  //           `${String(currentSpeakerInfo && currentSpeakerInfo.id)}`,
  //         );

  //         if (currentSpeakerLocalStorageData === 'viewed') {
  //           setClosedAccess(false);
  //         } else {
  //           setClosedAccess(true);
  //         }
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [currentSpeakerInfo]);

  //-------------------------------------------------------------------

  const sendVoteForSpeaker = async (rateDirectlyFromUI: number | null) => {
    await apiVoteForSpeaker(
      props.currentSpeakerInfo.id,
      props.userId,
      props.token,
      rateDirectlyFromUI,
    );
  };

  const renderSessionLetter = () => {
    if (currentUserData) {
      if (!currentUserData.channelUserInfo.activeSession && currentUserData.channelUserInfo.break) {
        return currentUserData.channelUserInfo.startChannelSessionLetter;
      }

      if (currentUserData.channelUserInfo.activeSession && currentUserData.channelUserInfo.break) {
        return currentUserData.channelUserInfo.activeSession.nextSessionLetter;
      }

      if (props.currentSessionLetter) {
        return props.currentSessionLetter;
      } else return 'Сессия #';
    } else return 'Сессия #';
  };

  const renderSessionDescription = () => {
    if (currentUserData) {
      if (!currentUserData.channelUserInfo.activeSession && currentUserData.channelUserInfo.break) {
        return `Перерыв... Скоро здесь начнётся сессия: ${currentUserData.channelUserInfo.startChannelSessionDescription}`;
      }

      if (currentUserData.channelUserInfo.activeSession && currentUserData.channelUserInfo.break) {
        return `Перерыв... Скоро здесь начнётся сессия: ${currentUserData.channelUserInfo.activeSession.nextSessionDescription}`;
      }

      if (props.currentSessionDescription) {
        return props.currentSessionDescription;
      } else return 'Сессия #';
    } else return 'Сессия #';
  };

  const showSecondBlock = () => {
    if (currentUserData) {
      if (!currentUserData.channelUserInfo.activeSession) {
        return true;
      }

      if (currentUserData.channelUserInfo.activeSession &&
        !currentUserData.channelUserInfo.activeSession.voteFoAllSession) {
        return true;
      }
      return false;
    }
    return true;
  };

  return (
    <>

      <Grid item container className={classes.darkBlueBckg}>
        <Grid item xs={12}>
          <p className={renderSessionLetter().length > 10
            ? classes.sessionLetterTextLong : classes.sessionLetterText}
          >
            {renderSessionLetter()}
          </p>

        </Grid>

        <p className={classes.sessionNameText}>
          {renderSessionDescription()}
        </p>

      </Grid>

      {showSecondBlock() ? (
        <Grid item container justify="space-between" className={classes.lightBlueBckg}>

          <Grid item className={classes.speakerInfoBlock} xl={8} lg={8} xs={12}>
            <p className={classes.speakerTheme}>
              {currentSpeakerInfo && currentSpeakerInfo.topicName || 'Тема доклада'}
            </p>

            <Grid container spacing={5}>

              <Grid item xs={2} xl={2} lg={2}>
                <img className={classes.speakerAvatarImg} width="100%" src={currentSpeakerInfo && currentSpeakerInfo.linkToImg || noAvatar} alt="" />

              </Grid>
              <Grid item xs={8} xl={8} lg={8}>
                <p className={classes.speakerHeaderText}>Спикер</p>
                <p className={classes.speakerFullNameText}>
                  {`${currentSpeakerInfo
                    && currentSpeakerInfo.lastName || 'ФАМИЛИЯ'} ${currentSpeakerInfo
                    && currentSpeakerInfo.firstName || 'Имя'}`}

                </p>
                <p className={classes.speakerFullCompanyText}>
                  {`${currentSpeakerInfo
                    && currentSpeakerInfo.company || 'Компания'}, ${currentSpeakerInfo
                    && currentSpeakerInfo.statusInCompany || 'должность'}`}
                </p>
              </Grid>
            </Grid>

          </Grid>

          <Grid alignItems="center" alignContent="center" xs={3}>

            <p className={classes.textCenter}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography className={classes.rateSpeakerText} component="legend">Оцените выступление</Typography>
                <Rating
                  classes={{ iconEmpty: 'rateBigDefault' }}
                  className={classes.rateSpeakerStarsImg}
                  name="simple-controlled"
                  value={rate}
                  disabled={closedAccess}
                  onChange={async (event, newValue) => {
                    setRate(newValue);
                    sendVoteForSpeaker(newValue);
                  }}
                />
              </Box>
            </p>

            <p className={classes.textCenter}>
              <Button
                disabled={closedAccess}
                onClick={() => window.open(`${currentSpeakerInfo && currentSpeakerInfo.linkToPresentation}`, '_blank')}
                className={classes.loadPresenationButton}
              >
                Скачать презентацию

              </Button>
            </p>

            {
              currentSpeakerInfo && currentSpeakerInfo.linkToZoom ? (
                <p className={classes.textCenter}>
                  <Button
                    disabled={closedAccess}
                    onClick={() => window.open(`${currentSpeakerInfo && currentSpeakerInfo.linkToZoom}`, '_blank')}
                    className={classes.goToZoomButton}
                  >
                    Перейти в Zoom

                  </Button>
                </p>
              ) : null
            }

          </Grid>

        </Grid>
      )
        : null}

    </>
  );
};

export default memo(SessionInfoBlock);
