/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { memo, useEffect } from 'react';
import {
  ClickAwayListener,
  Grid, Hidden, Popover, Tooltip, Typography,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
// import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import useStyles from './style';
import noAvatar from '../../img/speakersImg/noAvatar.svg';
import PDF from '../../img/pdf_icon.svg';
import Zoom from '../../img/zoom_icon.svg';
import ShareContacts from '../../img/contact_icon.svg';
import PDFDisabled from '../../img/pdf_icon_disabled.svg';
import ZoomDisabled from '../../img/zoom_icon_disabled.svg';
import ShareContactsDisabled from '../../img/contact_icon_disabled.svg';
import ShareContactsCompleted from '../../img/contact_icon_completed.svg';
import { apiUserUpdateContactedSpeakers, apiVoteForSpeaker } from '../../api/user';
import { capitalizeFirstLetter } from '../../utils/helpers/capitalizeFirstLetter.helper';
import { Vote, Speaker, SpeakerUserContacts } from '../../interfaces/allInterfaces';

const SpeakersSessionInfoBlock = (props: any) => {
  const classes = useStyles();
  const [value] = React.useState<number | null>(5);
  // const [open, setOpen] = React.useState(false);

  const {
    currentModeratorInfo,
    currentSessionSpeakersInfo,
    currentSessionSpeakersAllRates,
    currentUserData,

  } = props;

  // const handleTooltipClose = () => {
  //   setOpen(false);
  // };

  // const handleTooltipOpen = () => {
  //   console.log('handleTooltipOpen :>> ');
  //   setOpen(true);
  // };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // const [currentSessionSpeakersAllRatesState,
  //   setCurrentSessionSpeakersAllRatesState] =
  //   React.useState<Vote[]>(currentSessionSpeakersAllRates);

  // useEffect(() => {
  //   setCurrentSessionSpeakersAllRatesState(currentSessionSpeakersAllRates);
  // }, [currentSessionSpeakersAllRates]);

  const checkIsWatched = (speakerId: number) => {
    if (currentUserData && currentUserData.foundUser && currentUserData.foundUser.watchedSpeakers) {
      const foundWtchedSpeaker = currentUserData.foundUser.watchedSpeakers.find(
        (speaker: any) => speaker.id === speakerId,
      );

      if (foundWtchedSpeaker) {
        return false;
      } else {
        return true;
      }
    } else return true;
  };

  const checkIsRated = (speakerId: number) => {
    if (currentSessionSpeakersAllRates) {
      const foundRate = currentSessionSpeakersAllRates.find(
        (vote: Vote) => vote.speaker.id === speakerId,
      );

      if (foundRate) {
        return false;
      } else {
        return true;
      }
    } else return true;
  };

  const checkIsWatchedAndSent = (speakerId: number, type: string) => {
    if (currentUserData && currentUserData.foundUser && currentUserData.foundUser.watchedSpeakers) {
      const foundWtchedSpeaker = currentUserData.foundUser.watchedSpeakers.find(
        (speaker: Speaker) => speaker.id === speakerId,
      );

      if (foundWtchedSpeaker) {
        if (currentUserData && currentUserData.foundUser &&
          currentUserData.foundUser.speakersToWhomContactsWereSent) {
          const foundContactedSpeakers = currentUserData.foundUser
            .speakersToWhomContactsWereSent.find(
              (speakerUserContacts: SpeakerUserContacts) => speakerUserContacts.speaker.id
                === speakerId,
            );

          if (foundContactedSpeakers) {
            return type === 'src' ? ShareContactsCompleted : `${classes.sendContactsImg} ${classes.disabledImg}`;
          } else {
            return type === 'src' ? ShareContacts : `${classes.sendContactsImg} ${classes.pointerImg}`;
          }
        } else return type === 'src' ? ShareContacts : `${classes.sendContactsImg} ${classes.pointerImg}`;
      } else {
        return type === 'src' ? ShareContactsDisabled : `${classes.sendContactsImg} ${classes.disabledImg}`;
      }
    } else return type === 'src' ? ShareContactsDisabled : `${classes.sendContactsImg} ${classes.disabledImg}`;
  };

  const renderSpeakersRates = (element: Speaker) => {
    if (currentSessionSpeakersAllRates) {
      if (currentSessionSpeakersAllRates.length > 0) {
        const foundRate = currentSessionSpeakersAllRates.find(
          (vote: Vote) => vote.speaker.id === element.id,
        );

        if (foundRate) {
          return foundRate.rate;
        } else return 0;
      }
    }
  };

  const renderMockedSessionSpeakers = () => {
    const arrayOfMockedSpeakers = [];
    for (let index = 0; index < 5; index += 1) {
      arrayOfMockedSpeakers.push(
        <Grid xs={12} lg={2} xl={2} item className={classes.singleSpeakerBlock}>

          <p className={classes.speakerAvatarInsideSessionParagraph}>
            <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
          </p>
          <p className={classes.speakerNameInsideSession}>Имя</p>
          <p className={classes.speakerNameInsideSession}>Фамилия</p>

          <p className={classes.textCenter}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
            </Box>
          </p>

          <Grid xs={8} lg={12} xl={10} item container className={classes.mxAuto} justify="space-around">
            <Grid lg={4} xs={4} className={classes.zoomPdfIconsItem} item>
              <img className={`${classes.pointerImg} ${classes.loadPDFImg}`} src={PDF} alt="" />
            </Grid>

            <Grid lg={4} xs={4} className={classes.zoomPdfIconsItem} item>
              <img className={`${classes.pointerImg} ${classes.loadZoomImg}`} src={Zoom} alt="" />
            </Grid>

            <Grid lg={4} xs={4} className={classes.zoomPdfIconsItem} item>
              <img className={`${classes.pointerImg} ${classes.sendContactsImg}`} src={ShareContacts} alt="" />
            </Grid>
          </Grid>
        </Grid>,
      );
    }
    return arrayOfMockedSpeakers;
  };

  const sendVoteForSpeaker = async (
    rateDirectlyFromUI: number | null,
    currentSpeakerId: number,
  ) => {
    await apiVoteForSpeaker(
      currentSpeakerId,
      props.userId,
      props.token,
      rateDirectlyFromUI,
    );
  };

  const sendContacts = async (currentSpeakerId: number) => {
    await apiUserUpdateContactedSpeakers(
      currentSpeakerId,
      props.userId,
      props.token,
    );
  };

  const renderSessionSpeakers = () => (

    currentSessionSpeakersInfo.map((element: Speaker) => {
      if (!element.isModerator) {
        return (
          <>
            <Grid className={classes.singleSpeakerBlock} sm={6} md={2} xs={12} lg={2} xl={2} item>

              <p className={classes.speakerAvatarInsideSessionParagraph}>
                <img className={classes.speakerAvatarInsideSession} src={element.linkToImg} alt="" />
              </p>

              <p className={classes.speakerNameInsideSession}>{element.firstName}</p>
              <p className={classes.speakerNameInsideSession}>
                {capitalizeFirstLetter(element.lastName)}
              </p>
              <p className={classes.textCenter}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    id={String(element.id)}
                    classes={{ iconEmpty: 'rateSmallDefault' }}
                    className={classes.smallScoreStarImg}
                    name={String(element.id)}
                    disabled={checkIsWatched(element.id)}
                    value={renderSpeakersRates(element)}
                    readOnly={checkIsWatched(element.id)}
                    onChange={(event, newValue: number | null) => {
                      sendVoteForSpeaker(newValue, +element.id);
                    }}
                  />
                </Box>

              </p>

              <Grid xs={8} lg={12} xl={10} item container className={classes.mxAuto} justify={element.hasSendContactsButton ? 'space-between' : 'center'}>
                <Grid lg={4} xs={4} className={classes.zoomPdfIconsItem} item>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <p className={classes.popoverText}>
                      Cначала оцените выступление
                    </p>
                  </Popover>
                  <img
                    className={checkIsRated(element.id) ? `${classes.loadPDFImg} ${classes.disabledImg}`
                      : `${classes.pointerImg} ${classes.loadPDFImg}`}
                    src={checkIsRated(element.id) ? PDFDisabled : PDF}
                    onClick={(e) => {
                      if (checkIsRated(element.id)) {
                        // return handleTooltipOpen();
                        return handleClick(e);
                      } else {
                        window.open(`${element.linkToPresentation}`, '_blank');
                      }
                    }}
                    alt=""
                  />

                </Grid>

                {
                  element.linkToZoom ? (
                    <Grid lg={4} xs={4} className={classes.zoomPdfIconsItem} item>

                      <img
                        src={checkIsWatched(element.id) ? ZoomDisabled : Zoom}
                        className={
                          checkIsWatched(element.id) ? `${classes.loadZoomImg} ${classes.disabledImg}`
                            : `${classes.pointerImg} ${classes.loadZoomImg}`
                        }
                        onClick={() => window.open(`${element.linkToZoom}`, '_blank')}
                        alt=""
                      />

                    </Grid>
                  ) : null
                }

                {
                  element.hasSendContactsButton ? (
                    <Grid lg={4} xs={4} className={classes.zoomPdfIconsItem} item>

                      <img
                        src={checkIsWatchedAndSent(element.id, 'src')}
                        className={
                          checkIsWatchedAndSent(element.id, 'className')
                        }
                        onClick={() => sendContacts(element.id)}
                        alt=""
                      />

                    </Grid>
                  ) : null
                }

              </Grid>

            </Grid>
          </>
        );
      }
    })
  );

  const renderSpeakers = () => {
    if (currentUserData) {
      if (!currentUserData.channelUserInfo.activeSession
        && currentUserData.channelUserInfo.break) {
        return renderMockedSessionSpeakers();
      }

      if (currentUserData.channelUserInfo.activeSession
        && currentUserData.channelUserInfo.break) {
        return renderMockedSessionSpeakers();
      }

      if (props.currentSessionSpeakersInfo) {
        return renderSessionSpeakers();
      } else renderMockedSessionSpeakers();
    } else renderMockedSessionSpeakers();
  };

  const renderModeratorImgSrc = () => {
    if (currentUserData) {
      if (!currentUserData.channelUserInfo.activeSession
        && currentUserData.channelUserInfo.break) {
        return noAvatar;
      }

      if (currentUserData.channelUserInfo.activeSession
        && currentUserData.channelUserInfo.break) {
        return noAvatar;
      }

      if (currentModeratorInfo) {
        return currentModeratorInfo.linkToImg;
      } else return noAvatar;
    } else return noAvatar;
  };

  const renderModeratorFullName = () => {
    if (currentUserData) {
      if (!currentUserData.channelUserInfo.activeSession
        && currentUserData.channelUserInfo.break) {
        return 'Имя Фамилия';
      }

      if (currentUserData.channelUserInfo.activeSession
        && currentUserData.channelUserInfo.break) {
        return 'Имя Фамилия';
      }

      if (currentModeratorInfo) {
        return `${capitalizeFirstLetter(currentModeratorInfo.lastName)} ${currentModeratorInfo.firstName}`;
      } else return 'Имя Фамилия';
    } else return 'Имя Фамилия';
  };

  return (
    <>

      <Grid xs={12} item container className={classes.mainContainerBckg}>
        {/* mobile */}
        <Hidden only={['lg', 'xl', 'md']}>
          <Grid justify="space-around" item className={classes.moderatorContainerInfoBlock} container xs={12} lg={4} xl={4}>

            <Grid item xs={4} sm={2} xl={3}>
              <img className={classes.moderatorAvatarImg} width="100%" src={renderModeratorImgSrc()} alt="" />

            </Grid>
            <Grid className={classes.moderatorInfoBlock} item xs={6} sm={5} xl={8} lg={8}>

              <p className={classes.moderatorHeaderText}>Модератор</p>
              <p className={classes.moderatorFullName}>{renderModeratorFullName()}</p>

            </Grid>

          </Grid>
        </Hidden>
        <Grid item xs={12} md={8} lg={8} xl={8}>
          <p className={classes.speakersBlockHeader}>Спикеры сессии</p>
        </Grid>
        {/* pc */}
        <Hidden smDown>
          <Grid justify="space-between" item className={classes.moderatorContainerInfoBlock} container xs={4} lg={4} xl={4}>

            <Grid item xs={3} md={3} xl={3}>
              <img className={classes.moderatorImg} width="100%" src={renderModeratorImgSrc()} alt="" />

            </Grid>
            <Grid className={classes.moderatorInfoBlock} item xs={8} xl={8} lg={8}>

              <p className={classes.moderatorHeaderText}>Модератор</p>
              <p className={classes.moderatorFullName}>{renderModeratorFullName()}</p>

            </Grid>

          </Grid>
        </Hidden>
        <Grid className={classes.sessionSpeakersBlock} container item xs={12}>

          {
            renderSpeakers()
          }

        </Grid>

      </Grid>

    </>
  );
};

export default memo(SpeakersSessionInfoBlock);
