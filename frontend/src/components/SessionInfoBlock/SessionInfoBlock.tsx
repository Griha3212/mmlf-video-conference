/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-lone-blocks */
import React, { memo, useEffect } from 'react';
import {
  Grid, Typography, Button,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import noAvatar from '../../img/speakersImg/noAvatar.svg';
import { apiUserTakeAPartInRafflePrizes, apiUserUpdateContactedSpeakers, apiVoteForSpeaker } from '../../api/user';
import { capitalizeFirstLetter } from '../../utils/helpers/capitalizeFirstLetter.helper';
import check from '../../img/check.svg';
import reload from '../../img/reload_icon.svg';
import { SpeakerUserContacts } from '../../interfaces/allInterfaces';

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

  const renderSpeakersRate = () => {
    if (currentSpeakerRate) {
      return currentSpeakerRate;
    } else return 0;
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
        if (currentUserData.channelUserInfo.number === 1) {
          return 'Вступительное слово Оргкомитета Форума';
        }

        return `Перерыв... Скоро здесь начнётся сессия: ${currentUserData.channelUserInfo.startChannelSessionDescription}`;
      }

      if (currentUserData.channelUserInfo.activeSession && currentUserData.channelUserInfo.break) {
        if (currentUserData.channelUserInfo.activeSession.name === 'LogistOfTheYear') {
          return 'Завтра здесь будут проходить Онлайн-экскурсии на крупнейшие логистические объекты';
        }
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
        if (currentUserData.channelUserInfo.number === 1) {
          return false;
        }
        return true;
      }

      if (currentUserData.channelUserInfo.activeSession &&
        currentUserData.channelUserInfo.activeSession &&
        currentUserData.channelUserInfo.activeSession.name === 'LogistOfTheYear') {
        return false;
      }

      if (currentUserData.channelUserInfo.activeSession &&
        !currentUserData.channelUserInfo.activeSession.voteFoAllSession) {
        return true;
      }
      return false;
    }
    return true;
  };

  const sendContacts = async () => {
    await apiUserUpdateContactedSpeakers(
      props.currentSpeakerInfo.id,
      props.userId,
      props.token,
    );
  };

  const takeAPartInRafflePrizes = async () => {
    await apiUserTakeAPartInRafflePrizes(
      props.userId,
      props.token,
    );
  };

  const checkAlreadySentContact = () => {
    if (currentUserData && currentUserData.foundUser &&
      currentUserData.foundUser.speakersToWhomContactsWereSent) {
      const foundContactedSpeakers = currentUserData.foundUser.speakersToWhomContactsWereSent.find(
        (speakerUserContacts: SpeakerUserContacts) => speakerUserContacts.speaker.id
          === props.currentSpeakerInfo.id,
      );

      if (foundContactedSpeakers) {
        return true;
      } else {
        return false;
      }
    } else return false;
  };

  const checkAlreadyTookPart = () => {
    if (currentUserData && currentUserData.foundUser &&
      currentUserData.foundUser.wantToTakeAPartInRafflePrizes) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {currentUserData && currentUserData.channelUserInfo.activeSession &&
        currentUserData.channelUserInfo.activeSession.isSessionForSecondDay ? null : (
          <Grid item container className={classes.darkBlueBckg}>
            <Grid item container xs={12} xl={9} lg={9}>
              <Grid item container xs>
                <Grid item xs>
                  <p className={renderSessionLetter().length > 10
                    ? classes.sessionLetterTextLong : classes.sessionLetterText}
                  >
                    {renderSessionLetter()}
                  </p>
                </Grid>

                <Grid item xs>
                  <p className={classes.changeSessionP} onClick={() => props.executeScroll()}>
                    <img src={reload} alt="" />
                    {' '}
                    Сменить сессию
                  </p>
                </Grid>
              </Grid>
              <p className={currentUserData && currentUserData.channelUserInfo.activeSession &&
                currentUserData.channelUserInfo.activeSession.partnerOfTheSessionImgSrc ?
                classes.sessionNameText : classes.sessionNameText100}
              >
                {renderSessionDescription()}
              </p>

            </Grid>

            {currentUserData && currentUserData.channelUserInfo.activeSession
              && currentUserData.channelUserInfo.activeSession.partnerOfTheSessionImgSrc ? (
                <Grid item xl={3} lg={3}>
                  <p className={classes.sessionPartnerWord}>Партнер сессии</p>
                  <p className={classes.sessionPartnerImgP}>
                    <img
                      className={classes.imgFluid}
                      src={currentUserData.channelUserInfo.activeSession.partnerOfTheSessionImgSrc}
                      alt=""
                    />
                  </p>
                </Grid>

              ) : null}

          </Grid>
        )}

      {showSecondBlock() ? (
        <Grid item container justify="space-between" className={classes.lightBlueBckg}>

          <Grid container item className={classes.speakerInfoBlock} sm={7} xl={8} lg={8} xs={12}>
            <Grid item xl={12} lg={12} sm={12} xs={12}>
              <p className={classes.speakerThemeWord}>
                Доклад:
              </p>
            </Grid>
            <Grid item>

              <p className={classes.redLeftLineP}>

                <hr className={classes.redLeftLine} />
              </p>

            </Grid>

            <Grid item xl={11} lg={11} xs={10}>
              <p className={classes.speakerTheme}>
                {currentSpeakerInfo && currentSpeakerInfo.topicName || 'Тема доклада'}
              </p>

            </Grid>

            <Grid container spacing={5}>

              <Grid item xs={4} sm={4} xl={2} lg={2}>
                <img className={classes.speakerAvatarImg} width="100%" src={currentSpeakerInfo && currentSpeakerInfo.linkToImg || noAvatar} alt="" />

              </Grid>
              <Grid className={`${classes.noLeftPadding} ${classes.myAuto}`} item xs={8} sm={7} xl={8} lg={8}>
                <p className={classes.speakerHeaderText}>Спикер</p>
                <p className={classes.speakerFullNameText}>
                  {`${currentSpeakerInfo
                    && currentSpeakerInfo.firstName || 'Имя'} ${currentSpeakerInfo
                    && capitalizeFirstLetter(currentSpeakerInfo.lastName) || 'Фамилия'} `}

                </p>
                <p className={classes.speakerFullCompanyText}>
                  {`${currentSpeakerInfo
                    && currentSpeakerInfo.statusInCompany || 'должность'}, ${currentSpeakerInfo
                    && currentSpeakerInfo.company || 'Компания'}`}
                </p>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} sm={5} md={4} lg={3} xl={3}>

            <div className={classes.textCenter}>
              <Box component="fieldset" mb={1} borderColor="transparent">
                <Typography className={classes.rateSpeakerText} component="legend">Оцените выступление</Typography>
                <Rating
                  classes={{ iconEmpty: 'rateBigDefault' }}
                  className={classes.rateSpeakerStarsImg}
                  name="simple-controlled"
                  value={renderSpeakersRate()}
                  disabled={closedAccess}
                  onChange={async (event, newValue) => {
                    setRate(newValue);
                    sendVoteForSpeaker(newValue);
                  }}
                />
              </Box>
            </div>

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

            {
              currentSpeakerInfo && currentSpeakerInfo.hasSendContactsButton ? (
                <p className={classes.textCenter}>
                  <Button
                    disabled={closedAccess}
                    onClick={() => sendContacts()}
                    className={checkAlreadySentContact()
                      ? classes.sendContactsButtonSuccess : classes.sendContactsButton}
                  >
                    {checkAlreadySentContact() ?

                      (
                        <span>
                          <img alt="check" src={check} />
                          {' '}
                          Готово
                        </span>
                      ) : 'Поделиться контактами'}

                  </Button>
                </p>
              ) : null
            }
            {
              currentSpeakerInfo && currentSpeakerInfo.hasRafflePrizesButton ? (
                <p className={classes.textCenter}>
                  <Button
                    disabled={closedAccess}
                    onClick={() => takeAPartInRafflePrizes()}
                    className={checkAlreadyTookPart()
                      ? classes.takeAPartInRafflePrizesButtonSuccess :
                      classes.takeAPartInRafflePrizesButton}
                  >
                    {checkAlreadyTookPart() ?

                      (
                        <span>
                          <img alt="check" src={check} />
                          {' '}
                          Готово
                        </span>
                      ) : 'Участвовать в розыгрыше'}

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
