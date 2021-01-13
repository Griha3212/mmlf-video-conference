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
          {/* <Typography align="center"></Typography> */}
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Оцените выступление</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue: any) => {
                setValue(newValue);
              }}
            />
          </Box>
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

      <Grid container>

        <Grid item xl={2}>
          <ModeratorCard />

        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xl={10}>

          <Grid container>
            {/*
            <Grid item xl={2}></Grid>
            <Grid item xl={2}></Grid>
            <Grid item xl={2}></Grid>
            <Grid item xl={2}></Grid>
            <Grid item xl={2}></Grid>
            <Grid item xl={2}></Grid> */}

          </Grid>

        </Grid>

      </Grid>

    </>
  );
};

export default memo(SessionInfoBlock);
