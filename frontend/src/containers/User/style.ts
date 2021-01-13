import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  innerContainer: {

    paddingLeft: '120px',
    paddingRight: '120px',
    width: '100%',

  },

  redBckgContainer: {

    backgroundColor: '#FF414A',
    height: '1034px',

  },

  myAuto: {

    marginTop: 'auto',
    marginBottom: 'auto',

  },

  topPart: {

    height: '120px',

  },

  conferenceTopText: {

    fontSize: '81px',
    lineHeight: '91px',
    fontFamily: 'Gotham Pro Bold',
    textTransform: 'uppercase',
    color: 'white',

  },
  darkBlueBckg: {
    backgroundColor: '#00124D',
  },
  mmlfTopLogoImg: {

    width: '374px',
    height: '61px',

  },
  loadProgramButton: {

    // borderWidth: '1px',
    // borderColor: '#707070 !important',
    borderRadius: '0px',
    fontFamily: 'Gotham Pro Medium',
    fontSize: '24px',
    lineHeight: '27px',
    whiteSpace: 'nowrap',
    backgroundColor: '#FF414A',
    color: 'white',
    border: 'none',
    width: '340px',
    height: '60px',
    // textTransform: 'capitalize',
    textTransform: 'initial',
  },
  mainContainer: {

    paddingLeft: '120px',
    paddingRight: '120px',
    marginTop: '20px',
    borderTop: '1px solid #707070',
    borderBottom: '1px solid #707070',

  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    position: 'relative',
  },
}));

export default useStyles;
