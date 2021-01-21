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

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Checkbox } from '@material-ui/core';
import { apiGetStats } from '../../api/stats';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import parseToken from '../../utils/parseToken';
import { apiGetUser } from '../../api/user';
import useStyles from './style';

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

type User = {

  company: string;
  firstName: string;
  id: number;
  lastName: string;

};

type Vote = {
  rate: number;
  user: User;
};

type DataForStats = {

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

  usersWhoWatchedSpeaker: Array<User>;
  votes: Array<Vote>;

};

const StatsPage: FC = () => {
  const classes = useStyles();
  const { token } = getLocalStorageData();
  const [userData] = useState(parseToken(token.accessToken as string));

  const [error]: [string, (error: string) => void] = useState('');

  const [activeSpeaker, setActiveSpeaker] = useState('');

  const [selectedSpeakerToActivate, setSelectedSpeakerToActivate] = useState('');

  const [dataForStatsViewer, setDataForStatsViewer] = useState<DataForStats[]>();
  const [activeButtonId, setActiveButtonId] = useState<number>();

  const loadDataForStatsViewer = async () => {
    const response = await apiGetStats(userData.id, token);
    setDataForStatsViewer(response);

    console.log('response :>> ', response);
  };

  useEffect(() => {
    loadDataForStatsViewer();
  }, []);

  const renderStatsData = () => (

    <>
      <Grid />

    </>

  );

  // function createData(
  //   name: string,
  //   calories: number,
  //   fat: number,
  //   carbs: number,
  //   protein: number,
  //   price: number,
  // ) {
  //   return {
  //     name,
  //     calories,
  //     fat,
  //     carbs,
  //     protein,
  //     price,
  //     history: [
  //       { date: '2020-01-05', customerId: '11091700', amount: 3 },
  //       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
  //     ],
  //   };
  // }

  const Row = (props: { row: DataForStats }) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    let sum = 0;

    row.votes.map((element) => {
      sum += element.rate;
    });

    const medianValue = (+sum / +row.votes.length || 0).toFixed(2);

    const renderRate = (historyRow: any) => {
      const currentRate = row && row!.votes.find(
        (element: any) => element.user.id === historyRow.id,
      );

      console.log('row :>> ', row);
      console.log('historyRow :>> ', historyRow);

      return currentRate && currentRate.rate || 0;
    };

    return (
      <>
        <TableRow>
          <TableCell align="center">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            {`${row.firstName} ${row.lastName}`}
          </TableCell>
          <TableCell align="center">{row.usersWhoWatchedSpeaker.length}</TableCell>
          <TableCell align="center">{row.votes.length}</TableCell>
          <TableCell align="center">{medianValue}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Подробнее
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Имя Фамилия участника</TableCell>
                      <TableCell align="center">Просмотрел</TableCell>
                      <TableCell align="center">Оценка</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.usersWhoWatchedSpeaker.map((historyRow) => (
                      <TableRow key={historyRow.id}>
                        <TableCell align="center" component="th" scope="row">
                          {`${historyRow.firstName} ${historyRow.lastName}`}
                        </TableCell>
                        <TableCell align="center">
                          <Checkbox
                            defaultChecked
                            color="primary"
                            disabled
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </TableCell>
                        <TableCell align="center">{renderRate(historyRow)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  //   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  // ];

  return (
    <>
      <Container component="main" maxWidth="xs">

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

        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="center">Имя Фамилия спикера</TableCell>
                <TableCell align="center">Количество просмотров</TableCell>
                <TableCell align="center">Количество оценок</TableCell>
                <TableCell align="center">Средняя оценка</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataForStatsViewer && dataForStatsViewer.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Grid>

    </>
  );
};

export default memo(StatsPage);
