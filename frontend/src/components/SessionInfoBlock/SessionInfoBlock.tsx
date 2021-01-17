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

const SessionInfoBlock = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(2);

  const { currentSpeakerInfo } = props;

  console.log('currentSpeakerInfo :>> ', currentSpeakerInfo);

  return (
    <>

      <Grid item container className={classes.darkBlueBckg}>
        <Grid item xs={12}>
          <p className={props.currentSessionLetter && props.currentSessionLetter.length > 10
            ? classes.sessionLetterTextLong : classes.sessionLetterText}
          >
            {props.currentSessionLetter || 'Сессия #'}
          </p>

        </Grid>

        <p className={classes.sessionNameText}>
          {props.currentSessionDescription || 'Тема сессии'}
        </p>

      </Grid>

      <Grid item container justify="space-between" className={classes.lightBlueBckg}>

        <Grid item className={classes.speakerInfoBlock} xs={8}>
          <p className={classes.speakerTheme}>
            {currentSpeakerInfo && currentSpeakerInfo.topicName || 'Тема доклада'}
          </p>

          <Grid container spacing={5}>

            <Grid item xs={2}>
              <img className={classes.speakerAvatarImg} width="100%" src={currentSpeakerInfo && currentSpeakerInfo.linkToImg || noAvatar} alt="" />

            </Grid>
            <Grid item xs={8}>
              <p className={classes.speakerHeaderText}>Спикер</p>
              <p className={classes.speakerFullNameText}>{`${currentSpeakerInfo && currentSpeakerInfo.lastName || 'ФАМИЛИЯ'} ${currentSpeakerInfo && currentSpeakerInfo.firstName || 'Имя'}`}</p>
              <p className={classes.speakerFullCompanyText}>{`${currentSpeakerInfo && currentSpeakerInfo.company || 'Компания'}, ${currentSpeakerInfo && currentSpeakerInfo.statusInCompany || 'должность'}`}</p>
            </Grid>
          </Grid>

        </Grid>

        <Grid alignItems="center" alignContent="center" xs={3}>

          <p className={classes.textCenter}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography className={classes.rateSpeakerText} component="legend">Оцените выступление</Typography>
              <Rating
                className={classes.rateSpeakerStarsImg}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </p>

          <p className={classes.textCenter}>
            <Button className={classes.loadPresenationButton}>Скачать презентацию</Button>
          </p>

          <p className={classes.textCenter}>
            <Button className={classes.goToZoomButton}>Перейти в Zoom</Button>
          </p>

        </Grid>

        {/* <p className={classes.speakerTheme}>
          {props.currentSpeakerTheme || 'Тема доклада'}
        </p>
        <p className={classes.sessionNameText}>
          {props.currentSessionName || 'Тема сессии'}
        </p> */}

      </Grid>

    </>
  );
};

export default memo(SessionInfoBlock);
