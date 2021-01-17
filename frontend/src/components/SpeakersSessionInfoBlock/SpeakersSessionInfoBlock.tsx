import React, { memo } from 'react';
import {
  Grid, CircularProgress, Typography, Button,
} from '@material-ui/core';
import Iframe from 'react-iframe';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import useStyles from './style';
import VideoPlayerMain from '../VideoPlayerMain/VideoPlayerMain';
import ModeratorCard from '../ModeratorCard/ModeratorCard';
import noAvatar from '../../img/speakersImg/noAvatar.svg';

const SpeakersSessionInfoBlock = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(5);

  const { currentModeratorInfo, currentSessionSpeakersInfo } = props;

  const renderMockedSessionSpeakers = () => (
    <>
      <Grid item>

        <p><img src="http://localhost:3005/img/speakers/per_Marinus.jpg" alt="" /></p>
        <p>ФАМИЛИЯ</p>
        <p>Имя</p>
        <p>
          {' '}
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating className={classes.smallScoreStarImg} name="read-only" value={value} readOnly />
          </Box>

        </p>
        <p>icons</p>

      </Grid>

      <Grid item>

        <p><img src="http://localhost:3005/img/speakers/per_Marinus.jpg" alt="" /></p>
        <p>ДЕМИН</p>
        <p>Василий</p>
        <p>stars</p>
        <p>icons</p>

      </Grid>

      <Grid item>

        <p><img src="http://localhost:3005/img/speakers/per_Marinus.jpg" alt="" /></p>
        <p>ДЕМИН</p>
        <p>Василий</p>
        <p>stars</p>
        <p>icons</p>

      </Grid>

      <Grid item>

        <p><img src="http://localhost:3005/img/speakers/per_Marinus.jpg" alt="" /></p>
        <p>ДЕМИН</p>
        <p>Василий</p>
        <p>stars</p>
        <p>icons</p>

      </Grid>

      <Grid item>

        <p><img src="http://localhost:3005/img/speakers/per_Marinus.jpg" alt="" /></p>
        <p>ДЕМИН</p>
        <p>Василий</p>
        <p>stars</p>
        <p>icons</p>

      </Grid>
    </>
  );

  const renderSessionSpeakers = () => null;

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

        <Grid justify="space-between" container xs={12}>

          {

            currentSessionSpeakersInfo ? renderMockedSessionSpeakers() : renderSessionSpeakers()

          }

        </Grid>

      </Grid>

    </>
  );
};

export default memo(SpeakersSessionInfoBlock);
