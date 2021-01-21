/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/ban-types */
import React, {
  FC, memo, useState, useEffect,
  ChangeEvent,
} from 'react';

// import ContentContainer from '../ContentContainer/ContentContainer';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './style';
import { apiGetUser } from '../../api/user';
import parseToken from '../../utils/parseToken';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import { apiGetStats } from '../../api/stats';

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

type DataForAdmin = {
  channelForShowing: {
    break: boolean, id: number, link: string,
    number: number
  },
  description: string;
  id: number;
  letter: string;
  name: string;
  speakers: Array<Speaker>

};

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const StatsPage: FC = () => {
  const classes = useStyles();
  const { token } = getLocalStorageData();
  const [userData] = useState(parseToken(token.accessToken as string));

  const [error]: [string, (error: string) => void] = useState('');
  const [open, setOpen] = useState(false);

  const [activeSpeaker, setActiveSpeaker] = useState('');

  const [selectedSpeakerToActivate, setSelectedSpeakerToActivate] = useState('');

  const [dataForStatsViewer, setDataForStatsViewer] = useState<DataForAdmin>();
  const [activeButtonId, setActiveButtonId] = useState<number>();

  const loadDataForStatsViewer = async () => {
    const response = await apiGetStats(userData.id, token);
    setDataForStatsViewer(response);

    console.log('response :>> ', response);
  };

  useEffect(() => {
    loadDataForStatsViewer();
  }, []);

  const handleClose = async (event: ChangeEvent<unknown>, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    await setOpen(false);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {error}
          </Alert>
        </Snackbar>

        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Страница Просмотра Статистики
          </Typography>

        </div>

      </Container>

      <Grid container justify="space-around">

        <p>Hello</p>

      </Grid>

    </>
  );
};

export default memo(StatsPage);
