import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  mainVideoContainer: {

    height: '720px',

  },

  channelContainer: {

    maxWidth: '29%',
    cursor: 'pointer',

  },

  chooseChannelSessionLetter: {

    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '65px',
    color: 'black',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'center',

  },

  chooseChannelSessionDescription: {

    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '25px',
    lineHeight: '34px',
    color: 'black',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',

  },

  channelContainerBottomPart: {

    backgroundColor: '#ECF1F1',
    padding: '44px 0px',
    minHeight: '357px',

  },

  mainContainerBckg: {
    padding: '0 110px',
  },

  speakersBlockHeader: {

    fontFamily: 'Gotham Pro Black',
    fontSize: '70px',
    lineHeight: '79px',
    marginTop: '0px',
    textTransform: 'uppercase',
    color: '#00124D',

  },

  changeSessionMainContainer: {

    marginTop: '100px',

  },
  innerContainer: {

    paddingLeft: '120px',
    paddingRight: '120px',
    width: '100%',
    position: 'relative',
    zIndex: 2,

  },

  redBckgContainer: {

    backgroundColor: '#FF414A',
    height: '1034px',
    position: 'absolute',
    zIndex: 1,

  },

  myAuto: {

    marginTop: 'auto',
    marginBottom: 'auto',

  },

  topPart: {

    height: '120px',

  },

  conferenceTopText: {

    fontSize: '4vw',
    lineHeight: '6vw',
    fontFamily: 'Gotham Pro Bold',
    textTransform: 'uppercase',
    color: 'white',
    marginLeft: '7vw',

  },
  darkBlueBckg: {
    backgroundColor: '#00124D',
  },
  mmlfTopLogoImg: {

    width: '374px',
    height: '61px',
    position: 'relative',
    top: '5px',

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
    marginLeft: '6vw',
    marginTop: '6px',
    transition: '0.2s',
    left: '2vw',
    '&:hover': {
      backgroundColor: '#00124D',
      border: '1px solid #FF414A',
      color: '#FF414A',
      transition: '0.2s',
    },
  },
  mainContainer: {

    paddingLeft: '120px',
    paddingRight: '120px',
    // marginTop: '20px',
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
