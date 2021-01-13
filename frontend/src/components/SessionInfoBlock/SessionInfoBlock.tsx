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

const SessionInfoBlock = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <>
      <Grid container className={classes.mainSessionInfoContainer} xl={12}>

        <Grid container className={classes.darkBlueBckg}>

          <Grid item xl={12}>
            <p className={classes.sessionLetterText}>
              {props.currentSessionLetter || 'Сессия #'}
            </p>
            <p className={classes.sessionNameText}>
              {props.currentSessionName || 'Тема сессии'}
            </p>
          </Grid>

        </Grid>

      </Grid>

    </>
  );
};

export default memo(SessionInfoBlock);
