/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { memo, useEffect } from 'react';
import {
  Grid, Hidden,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
// import { useEffect } from 'react';
import useStyles from './style';
import noAvatar from '../../img/speakersImg/noAvatar.svg';
import PDF from '../../img/pdf_icon.svg';
import Zoom from '../../img/zoom_icon.svg';
import ShareContacts from '../../img/contact_icon.svg';
import PDFDisabled from '../../img/pdf_icon_disabled.svg';
import ZoomDisabled from '../../img/zoom_icon_disabled.svg';
import ShareContactsDisabled from '../../img/contact_icon_disabled.svg';
import { apiVoteForSpeaker } from '../../api/user';

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

const SpeakersSessionInfoBlock = (props: any) => {
  const classes = useStyles();
  const [value] = React.useState<number | null>(5);

  const {
    currentModeratorInfo,
    currentSessionSpeakersInfo,
    currentSessionSpeakersAllRates,
    currentUserData,

  } = props;

  const [currentSessionSpeakersAllRatesState,
    setCurrentSessionSpeakersAllRatesState] =
    React.useState<Vote[]>(currentSessionSpeakersAllRates);

  useEffect(() => {
    setCurrentSessionSpeakersAllRatesState(currentSessionSpeakersAllRates);
  }, [currentSessionSpeakersAllRates]);

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

  const renderSpeakersRates = (element: any) => {
    if (currentSessionSpeakersAllRatesState) {
      if (currentSessionSpeakersAllRatesState!.length > 0) {
        const foundRate = currentSessionSpeakersAllRatesState!.find(
          (vote: any) => vote.speaker.id === element.id,
        );

        if (foundRate) {
          return foundRate.rate;
        } else return 0;
      }
    }
  };

  const renderMockedSessionSpeakers = () => (
    <>
      <Grid xs={12} lg={2} xl={2} item className={classes.singleSpeakerBlock}>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p className={classes.textCenter}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid xs={6} lg={10} xl={10} container className={classes.mxAuto} justify="space-around">
          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadPDFImg}`} src={PDF} alt="" />

          </Grid>

          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadZoomImg}`} src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid xs={12} lg={2} xl={2} item className={classes.singleSpeakerBlock}>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p className={classes.textCenter}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid xs={6} lg={10} xl={10} container className={classes.mxAuto} justify="space-around">
          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadPDFImg}`} src={PDF} alt="" />

          </Grid>

          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadZoomImg}`} src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid xs={12} lg={2} xl={2} item className={classes.singleSpeakerBlock}>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p className={classes.textCenter}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid xs={6} lg={10} xl={10} container className={classes.mxAuto} justify="space-around">
          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadPDFImg}`} src={PDF} alt="" />

          </Grid>

          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadZoomImg}`} src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid xs={12} lg={2} xl={2} item className={classes.singleSpeakerBlock}>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p className={classes.textCenter}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid xs={6} lg={10} xl={10} container className={classes.mxAuto} justify="space-around">
          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadPDFImg}`} src={PDF} alt="" />

          </Grid>

          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadZoomImg}`} src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid xs={12} lg={2} xl={2} item className={classes.singleSpeakerBlock}>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p className={classes.textCenter}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid xs={6} lg={10} xl={10} container className={classes.mxAuto} justify="space-around">
          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadPDFImg}`} src={PDF} alt="" />

          </Grid>

          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadZoomImg}`} src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid xs={12} lg={2} xl={2} item className={classes.singleSpeakerBlock}>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p className={classes.textCenter}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid xs={6} lg={10} xl={10} container className={classes.mxAuto} justify="space-around">
          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadPDFImg}`} src={PDF} alt="" />

          </Grid>

          <Grid className={classes.zoomPdfIconsItem} item>

            <img className={`${classes.pointerImg} ${classes.loadZoomImg}`} src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

    </>
  );

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

  const renderSessionSpeakers = () => (

    currentSessionSpeakersInfo.map((element: any) => {
      if (!element.isModerator) {
        return (
          <>
            <Grid className={classes.singleSpeakerBlock} xs={12} lg={2} xl={2} item>

              <p className={classes.speakerAvatarInsideSessionParagraph}>
                <img className={classes.speakerAvatarInsideSession} src={element.linkToImg} alt="" />
              </p>
              <p className={classes.speakerNameInsideSession}>{element.lastName}</p>
              <p className={classes.speakerNameInsideSession}>{element.firstName}</p>
              <p className={classes.textCenter}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    id={element.id}
                    classes={{ iconEmpty: 'rateSmallDefault' }}
                    className={classes.smallScoreStarImg}
                    name={element.id}
                    disabled={checkIsWatched(element.id)}
                    value={renderSpeakersRates(element) || 0}
                    readOnly={checkIsWatched(element.id)}
                    onChange={async (name, newValue) => {
                      sendVoteForSpeaker(newValue, +element.id);
                    }}
                  />
                </Box>

              </p>

              <Grid xs={6} lg={10} xl={10} container className={classes.mxAuto} justify="space-around">
                <Grid className={classes.zoomPdfIconsItem} item>

                  <img
                    className={checkIsWatched(element.id) ? `${classes.loadPDFImg} ${classes.disabledImg}`
                      : `${classes.pointerImg} ${classes.loadPDFImg}`}
                    src={checkIsWatched(element.id) ? PDFDisabled : PDF}
                    onClick={() => window.open(`${element.linkToPresentation}`, '_blank')}
                    alt=""
                  />

                </Grid>

                {
                  element.linkToZoom ? (
                    <Grid className={classes.zoomPdfIconsItem} item>

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
        return 'ФАМИЛИЯ Имя';
      }

      if (currentUserData.channelUserInfo.activeSession
        && currentUserData.channelUserInfo.break) {
        return 'ФАМИЛИЯ Имя';
      }

      if (currentModeratorInfo) {
        return `${currentModeratorInfo.lastName} ${currentModeratorInfo.firstName}`;
      } else return 'ФАМИЛИЯ Имя';
    } else return 'ФАМИЛИЯ Имя';
  };

  return (
    <>

      <Grid xs={12} item container className={classes.mainContainerBckg}>
        {/* mobile */}
        <Hidden only={['sm', 'lg', 'xl', 'md']}>
          <Grid justify="space-around" item className={classes.moderatorContainerInfoBlock} container xs={12} lg={4} xl={4}>

            <Grid item xs={4} xl={3}>
              <img width="100%" src={renderModeratorImgSrc()} alt="" />

            </Grid>
            <Grid className={classes.moderatorInfoBlock} item xs={6} xl={8} lg={8}>

              <p className={classes.moderatorHeaderText}>Модератор</p>
              <p className={classes.moderatorFullName}>{renderModeratorFullName()}</p>

            </Grid>

          </Grid>
        </Hidden>
        <Grid item xs={12} lg={8} xl={8}>
          <p className={classes.speakersBlockHeader}>Спикеры сессии</p>
        </Grid>
        <Hidden xsDown>
          <Grid justify="space-between" item className={classes.moderatorContainerInfoBlock} container xs={4} lg={4} xl={4}>

            <Grid item xs={3} xl={3}>
              <img width="100%" src={renderModeratorImgSrc()} alt="" />

            </Grid>
            <Grid className={classes.moderatorInfoBlock} item xs={8} xl={8} lg={8}>

              <p className={classes.moderatorHeaderText}>Модератор</p>
              <p className={classes.moderatorFullName}>{renderModeratorFullName()}</p>

            </Grid>

          </Grid>
        </Hidden>
        <Grid className={classes.sessionSpeakersBlock} justify="space-around" container xs={12}>

          {
            renderSpeakers()
          }

        </Grid>

      </Grid>

    </>
  );
};

export default memo(SpeakersSessionInfoBlock);
