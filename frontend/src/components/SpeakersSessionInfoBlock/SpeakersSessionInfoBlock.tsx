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
  const [value, setValue] = React.useState<number | null>(2);

  const { currentModeratorInfo } = props;

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

        {/* {
          dataForAdmin && dataForAdmin.speakers.map(
            (element) => renderSpeakersDataForUser(element),
          )
        } */}

      </Grid>

    </>
  );
};

export default memo(SpeakersSessionInfoBlock);
