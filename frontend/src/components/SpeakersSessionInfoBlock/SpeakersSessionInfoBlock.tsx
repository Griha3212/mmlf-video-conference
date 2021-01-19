/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { memo, useEffect } from 'react';
import {
  Grid,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
// import { useEffect } from 'react';
import useStyles from './style';
import noAvatar from '../../img/speakersImg/noAvatar.svg';
import PDF from '../../img/pdf_icon.svg';
import Zoom from '../../img/zoomfondo-blanco-vertical-seeklogo.svg';

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
    dataForUser,
  } = props;

  const [currentSessionSpeakersAllRatesState,
    setCurrentSessionSpeakersAllRatesState] =
    React.useState<Vote[]>(currentSessionSpeakersAllRates);

  useEffect(() => {
    setCurrentSessionSpeakersAllRatesState(currentSessionSpeakersAllRates);
  }, [currentSessionSpeakersAllRates]);

  console.log('currentSessionSpeakersAllRatesState :>> ', currentSessionSpeakersAllRatesState);

  console.log('currentSessionSpeakersAllRates :>> ', currentSessionSpeakersAllRates);
  // console.log('currentSessionSpeakersInfo :>> ', currentSessionSpeakersInfo);
  // console.log('dataForUser :>> ', dataForUser);

  const checkIsWatched = (speakerId: number) => {
    if (dataForUser && dataForUser.foundUser && dataForUser.foundUser.watchedSpeakers) {
      const foundWtchedSpeaker = dataForUser.foundUser.watchedSpeakers.find(
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
        } else return 4;
      }
    }
  };

  const renderMockedSessionSpeakers = () => (
    <>
      <Grid item>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p>
          {' '}
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid container justify="space-around">
          <Grid item>

            <img src={PDF} alt="" />

          </Grid>

          <Grid item>

            <img src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid item>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p>
          {' '}
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid container justify="space-around">
          <Grid item>

            <img src={PDF} alt="" />

          </Grid>
          <Grid item>

            <img src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid item>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p>
          {' '}
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid container justify="space-around">
          <Grid item>

            <img src={PDF} alt="" />

          </Grid>
          <Grid item>

            <img src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid item>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p>
          {' '}
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid container justify="space-around">
          <Grid item>

            <img src={PDF} alt="" />

          </Grid>
          <Grid item>

            <img src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>

      <Grid item>

        <p className={classes.speakerAvatarInsideSessionParagraph}>
          <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
        </p>
        <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
        <p className={classes.speakerNameInsideSession}>Имя</p>
        <p>
          {' '}
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>

        <Grid container justify="space-around">
          <Grid item>

            <img src={PDF} alt="" />

          </Grid>
          <Grid item>

            <img src={Zoom} alt="" />

          </Grid>

        </Grid>

      </Grid>
    </>
  );

  const renderSessionSpeakers = () => (

    currentSessionSpeakersInfo.map((element: any) => {
      if (!element.isModerator) {
        return (
          <>
            <Grid item>

              <p className={classes.speakerAvatarInsideSessionParagraph}>
                <img className={classes.speakerAvatarInsideSession} src={element.linkToImg} alt="" />
              </p>
              <p className={classes.speakerNameInsideSession}>{element.lastName}</p>
              <p className={classes.speakerNameInsideSession}>{element.firstName}</p>
              <p>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  {console.log('element :>> ', element)}
                  <Rating
                    className={classes.smallScoreStarImg}
                    name="read-only"
                    disabled={checkIsWatched(element.id)}
                    value={renderSpeakersRates(element)}
                    readOnly
                  />
                </Box>

              </p>

              <Grid container justify="space-around">
                <Grid item>

                  <img
                    className={classes.pointerImg}
                    src={PDF}
                    onClick={() => window.open(`${element.linkToPresentation}`, '_blank')}
                    alt=""
                  />

                </Grid>

                {
                  element.linkToZoom ? (
                    <Grid item>

                      <img
                        src={Zoom}
                        className={classes.pointerImg}
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

  return (
    <>

      <Grid item container className={classes.mainContainerBckg}>

        <Grid item xs={8}><p className={classes.speakersBlockHeader}>Спикеры сессии</p></Grid>

        <Grid item className={classes.moderatorContainerInfoBlock} container xs={4}>

          <Grid item xs={3}>
            <img width="100%" src={currentModeratorInfo && currentModeratorInfo.linkToImg || noAvatar} alt="" />

          </Grid>
          <Grid className={classes.moderatorInfoBlock} item xs={8}>
            <div>
              <p className={classes.moderatorHeaderText}>Модератор</p>
              <p className={classes.moderatorFullName}>{`${currentModeratorInfo && currentModeratorInfo.lastName || 'ФАМИЛИЯ'} ${currentModeratorInfo && currentModeratorInfo.firstName || 'Имя'}`}</p>
            </div>
          </Grid>

        </Grid>

        <Grid justify="space-around" container xs={12}>

          {
            currentSessionSpeakersInfo ? renderSessionSpeakers() : renderMockedSessionSpeakers()
          }

        </Grid>

      </Grid>

    </>
  );
};

export default memo(SpeakersSessionInfoBlock);
