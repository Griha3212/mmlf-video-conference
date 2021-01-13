import React, { memo } from 'react';
import {
  Grid, CircularProgress, Typography, Button,
} from '@material-ui/core';
import Iframe from 'react-iframe';
import useStyles from './style';
import VideoPlayerMain from '../VideoPlayerMain/VideoPlayerMain';

const SessionInfoBlock = (props: any) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
    >

      <Grid item xl={6}>
        <Typography>{props.currentSessionLetter || 'Буква сессии'}</Typography>
        <Typography>{props.currentSessionName || 'Название сессии до 70 символов'}</Typography>

        <Typography>{props.currentSessionSpeakerFullName || 'ФИО Спикера'}</Typography>
        <Typography>{props.currentSessionSpeakerPosition || 'Компания, должность'}</Typography>
      </Grid>

      <Grid item xl={6}>
        <Typography align="center">Оцените выступление</Typography>
        <Grid container>
          <Grid item xl={6}>
            {' '}
            <Button>Скачать презентацию</Button>
          </Grid>
          <Grid item xl={6}>
            {' '}
            <Button>Перейти в Zoom</Button>
          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
};

export default memo(SessionInfoBlock);
