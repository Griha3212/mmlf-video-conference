import React, { memo } from 'react';
import {
  Grid,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import noAvatar from '../../img/speakersImg/noAvatar.svg';
import PDF from '../../img/pdf_icon.svg';
import Zoom from '../../img/zoomfondo-blanco-vertical-seeklogo.svg';

const SpeakersSessionInfoBlock = (props: any) => {
  const classes = useStyles();
  const [value] = React.useState<number | null>(5);

  const { currentModeratorInfo, currentSessionSpeakersInfo } = props;

  console.log('currentSessionSpeakersInfo :>> ', currentSessionSpeakersInfo);

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
    currentSessionSpeakersInfo.map((element: any) => (
      <>
        <Grid item>

          <p className={classes.speakerAvatarInsideSessionParagraph}>
            <img className={classes.speakerAvatarInsideSession} src={noAvatar} alt="" />
          </p>
          <p className={classes.speakerNameInsideSession}>ФАМИЛИЯ</p>
          <p className={classes.speakerNameInsideSession}>Имя</p>
          <p>
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
    ))
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
